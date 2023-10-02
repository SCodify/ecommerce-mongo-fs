const mongoose = require('mongoose') 

const productsCollection = 'product'

const productsSchema = mongoose.Schema({
  title: String,
  description: String,
  code: String,
  price: Number,
  status: Boolean,
  stock: Number,
  category: String,
})

const Products = mongoose.model(productsCollection, productsSchema)

module.exports = Products