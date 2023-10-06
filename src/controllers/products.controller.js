const { Router } = require('express')
const ProductsMongoDao = require('../DAOs/productsMongo.dao')

const Products = new ProductsMongoDao()

const router = Router()

router.get('/create', async (req, res) => {
  res.render('createProduct.handlebars', {
    style: "createProduct"
  })
})

router.get('/list', async (req, res) => {
  try {
    const products = await Products.findAllProducts()
    res.render('productsList.handlebars', {
      products, 
      style: "productsList"
    })
  } catch (error) {
    console.log(error)
  }
})

router.get('/modify', async (req, res) => {
  res.render('modifyProduct.handlebars', {
    style: "modifyProduct"
  })
})

router.get('/', async (req, res) => {
  const estado = req.query.estado
  console.log('estadoRouter: ', estado == 'true' ? true : false)
  const products = await Products.findAllProducts(estado)
  console.log('productsRouter: ', products)
  res.json({ products })
})

router.get('/:pid', async (req, res) => {
  const { pid } = req.params
  const product = await Products.findOneProduct(pid)
  res.json({ product })
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
    res.json({ message: newProduct })
  } catch (error) {
    // console.log(error)
    res.json(error)
  }
})

router.patch('/:pid', async (req, res) => {
  try {
    const { pid } = req.params
    
    const { title, description, code, price, status, stock, category } = req.body

    const updateProductData = {
      title,
      description,
      code,
      price,
      status,
      stock,
      category,
    }

    const updatedProduct = await Products.updateProduct(pid, updateProductData)
    console.log('updatedProduct: ', updatedProduct)
    res.json({ message: 'Product is updated' })
  } catch (error) {
    res.json({ message: error })
  }
})

router.delete('/:pid', async (req, res) => {
  const { pid } = req.params
  await Products.deleteProduct(pid)
  res.json({ message: 'Product deleted' })
})

module.exports = router