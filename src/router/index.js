const productsController = require('../controllers/products.controller')
const cartsController = require('../controllers/carts.controller')

const router = (app) => {
  app.use('/products', productsController)
  app.use('/carts', cartsController)
  //app.use('/messages', messagesController)
}

module.exports = router