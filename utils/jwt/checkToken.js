const jwt = require('jsonwebtoken')
const getToken = require('./getToken')



const checkToken = async (req,res,next) => {

    const token = await getToken(req)
    const secret = 'shh'
    
    try {
        await jwt.verify(token,secret)
        
        next()
    } catch (error) {
       
        res.status(404).json({message:'token invalido'})
        return
    }
    
}

module.exports = checkToken