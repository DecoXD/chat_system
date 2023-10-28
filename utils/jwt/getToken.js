const jwt = require('jsonwebtoken')




const getToken = async (req) => {
    
    if(!req.headers.authorization){
        return null
    }
    const authenticate = req.headers.authorization.split(' ')[1]
    return authenticate

}

module.exports = getToken