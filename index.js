const express = require('express')
const db = require('./db/conn')
const app = express()

//MODELS
const User = require('./models/User')
const Message = require('./models/Message')

//routes
const router = require('./routes/AuthRoutes')
const messageRouter = require('./routes/MessagesRoutes')


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