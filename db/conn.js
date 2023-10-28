const {Sequelize} = require('sequelize')

const db = new Sequelize('chat_system','root','',{
    dialect:'mysql',
    host:'localhost'
})


db.authenticate().then(() =>{
    console.log('conectado')
}).catch((err) =>{
    console.log('erro')
})

module.exports = db