const Products = require('../models/products.model')

class ProductsMongoDao {

  strToBoolean(str){
    if(str == 'true') {
      return true
    } else {
      return false
    }
  }

  async findAllProducts(estado) {
    console.log('estadoDao: ', estado)
    console.log('estado tipo: ', typeof(estado))
    console.log('condición: ', this.strToBoolean(estado))



    if(this.strToBoolean(estado)) {
      return await Products.find({status: true})
    } else {
      return await Products.find({status: false})
    }
    //return await Products.find().sort({ title: 1 }).lean().exec()
  }

  async findOneProduct(pid) {
    return await Products.findById(pid)
  }

  async insertOne(newProductData) {
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