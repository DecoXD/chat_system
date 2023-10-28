const jwt = require('jsonwebtoken')




const createToken = (user) => {
    const secret = 'shh'
    const payload = {id:user.id}
    const token = jwt.sign(payload,secret)

    return token

}

module.exports = createToken