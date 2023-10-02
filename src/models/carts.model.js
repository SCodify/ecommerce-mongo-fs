const mongoose = require('mongoose') 

const cartsCollection = 'cart'

const cartsSchema = mongoose.Schema({
  products: [String]
})

const Carts = mongoose.model(cartsCollection, cartsSchema)

module.exports = Carts