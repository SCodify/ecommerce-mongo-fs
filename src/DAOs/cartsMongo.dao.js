const Carts = require('../models/carts.model')

class CartsMongoDao {
  async findAllCarts() {
    return await Carts.find().lean().exec()
  }

  async findOneCart(cid) {
    return await Carts.findById(cid)
  }

  async insertOneCart() {
    const newCart = await Carts.create({})
    return newCart._id
  }

  async addToCard(cid, pid) {
    
  }
}

module.exports = CartsMongoDao