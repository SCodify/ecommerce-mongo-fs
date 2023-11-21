const { Router } = require('express')
const CartsMongoDao = require('../DAOs/cartsMongo.dao')

const Carts = new CartsMongoDao

const router = Router()

router.get('/', async (req, res) => {
  const carts = await Carts.findAllCarts()
  res.json({ carts })
})

router.post('/', async (req, res) => { 
  try {
    const newCart = await Carts.insertOneCart()
    res.json({ message: newCart })
  } catch (error) {
    // console.log(error)
    res.json(error)
  }
})

module.exports = router