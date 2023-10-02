const { Router } = require('express')
const ProductsMongoDao = require('../DAOs/productsMongo.dao')

const Products = new ProductsMongoDao()

const router = Router()

router.get('/', async (req, res) => {
  const products = await Products.findAll()
  res.json({ message: products })
})

router.post('/', async (req, res) => {
  try {
    const { title, description, code, price, status, stock, category } = req.body

    const newProductData = {
      title,
      description,
      code,
      price,
      status,
      stock,
      category,
    }

    const newProduct = await Products.insertOne(newProductData)
    res.json({ message: newProduct._id })
  } catch (error) {
    console.log(error)
  }
})

module.exports = router