const mongoose = require('mongoose') 

const productsCollection = 'product'

const productsSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description:{
    type: String,
  },
  code: {
    type: String,
    required: true,
    unique: true
  },
  price: {
    type: Number,
    required: true
  },
  status: {
    type: Boolean,
  },
  stock: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  }
})

const Products = mongoose.model(productsCollection, productsSchema)

module.exports = Products