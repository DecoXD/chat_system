const Message = require('../models/Message')

const router = require('express').Router()


router.post('/:receiver',Message.send_message)


module.exports = router