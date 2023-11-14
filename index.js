const express = require('express')
const db = require('./db/conn')
const app = express()
const cors = require('cors')
//MODELS
const User = require('./models/User')
const Message = require('./models/Message')

//routes
const router = require('./routes/AuthRoutes')
const messageRouter = require('./routes/MessagesRoutes')

app.use(cors({
    origin:'http://localhost:3000',
    optionsSucessStatus:200
}))

app.use(express.urlencoded({
    extends:true
}))

app.use(express.json())

//end-points
app.use('/direct',messageRouter)
app.use('/',router)

db.sync().then(() =>{
    app.listen(3000)
})