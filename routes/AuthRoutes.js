const User = require('../models/User')

const router = require('express').Router()


router.post('/register',User.register)
router.post('/login',User.login)

module.exports = router