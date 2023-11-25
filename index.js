const express = require('express')
const db = require('./db/conn')
const app = express()
const cors = require('cors')
//MODELS
const User = require('./models/User')
const Message = require('./models/Message')
const Contact = require('./models/Contact')


//routes
const router = require('./routes/AuthRoutes')
const contactRouter = require('./routes/ContactRoutes')
const messageRouter = require('./routes/MessagesRoutes')

app.use(cors({
    origin:'http://localhost:3000',
   
}))

app.use(express.urlencoded({
    extends:true
}))

app.use(express.json())

//end-points
app.use('/contacts',contactRouter)
app.use('/direct',messageRouter)
app.use('/',router)

db.sync().then(() =>{
    app.listen(5000)
})