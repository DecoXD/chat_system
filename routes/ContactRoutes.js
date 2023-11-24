const Contact = require('../models/Contact')
const checkToken = require('../utils/jwt/checkToken')
const router = require('express').Router()


router.get('/all',checkToken,Contact.showContacts)
module.exports = router