const express = require('express')
const db = require('./db/conn')
const app = express()
const cors = require('cors')
//MODELS
const User = require('./models/User')
const Message = require('./models/Message')
const Contact = require('./models/Contact')

//socket
const server = require('http').createServer(app)

const io = require('socket.io')(server,
  {cors:{
    origin:'http://localhost:3000',
    methods:['GET','POST']
  }}
  )

//routes
const router = require('./routes/AuthRoutes')
const contactRouter = require('./routes/ContactRoutes')
const messageRouter = require('./routes/MessagesRoutes')

app.use(cors({
  origin:'http://localhost:3000'

}))


app.use(express.urlencoded({
    extends:true
}))

app.use(express.json())

io.on('connection',(socket)=>{

socket.on('sendMessage',(message)=>{
    socket.broadcast.emit('upMessages',message)
})


socket.on('disconect',()=>{
console.log('ok')
})


})
//end-points
app.use('/contacts',contactRouter)
app.use('/direct',messageRouter)
app.use('/',router)

db.sync().then(() =>{
    server.listen(5000)
})


