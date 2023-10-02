const productsController = require('../controllers/products.controller')

const router = (app) => {
  app.use('/products', productsController)
  //app.use('/messages', messagesController)
  //app.use('/carts', cartsController)
}

module.exports = router