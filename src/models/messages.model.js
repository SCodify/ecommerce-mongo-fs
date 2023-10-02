const mongoose = require('mongoose') 

const messagesCollection = 'message'

const messagesSchema = mongoose.Schema({
  messages: [String],
})

const Messages = mongoose.model(messagesCollection, messagesSchema)

module.exports = Messages