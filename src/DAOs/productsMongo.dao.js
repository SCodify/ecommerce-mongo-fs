const Products = require('../models/products.model')

class ProductsMongoDao {
  async findAllProducts() {
    return await Products.find().sort({ title: 1 }).lean().exec()
  }

  async findOneProduct(pid) {
    return await Products.findById(pid)
  }

  async insertOneProduct(newProductData) {
    const newProduct = await Products.create(newProductData)
    return newProduct._id
  }

  async updateProduct(pid, updateProductData){
    await Products.updateOne({_id: pid}, updateProductData)
  }

  async deleteProduct(pid){
    await Products.deleteOne({_id: pid})
  }
}

module.exports = ProductsMongoDao 