const jwt = require('jsonwebtoken')

const getUser = async (token) => {
    
    const secret = 'shh'
    try {
        const decodedToken = jwt.verify(token,secret)
        if(decodedToken){
            return decodedToken.id
        }
    } catch (error) {
        return null
    }
    
}

module.exports = getUser