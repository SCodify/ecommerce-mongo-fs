const Products = require('../models/products.model')

class ProductsMongoDao {
  async findAll() {
    return await Products.find()
  }

  async insertOne(newProductData) {
    const newProduct = await Products.create(newProductData)
    return newProduct._id
  }
}

module.exports = ProductsMongoDao