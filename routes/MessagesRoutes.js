const Message = require('../models/Message')
const checkToken = require('../utils/jwt/checkToken')

const router = require('express').Router()


router.get('/:receiver',checkToken,Message.show_messages)

router.post('/:receiver',checkToken,Message.send_message)


module.exports = router