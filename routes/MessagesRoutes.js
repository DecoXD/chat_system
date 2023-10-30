const Message = require('../models/Message')

const router = require('express').Router()


router.get('/:receiver',Message.show_messages)

router.post('/:receiver',Message.send_message)


module.exports = router