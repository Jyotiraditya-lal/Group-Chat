const bodyParser = require('body-parser');
const express=require('express')
const loginRoute=require('./Routes/login')
const MessageRouter=require('./Routes/MessageForm')

const app=express()

app.use(bodyParser.urlencoded({extended: false}))

app.use(loginRoute)
app.use(MessageRouter)

app.use('/',(req,res,next)=>{
    res.send('<h1>Welcome to Group Chat App</h1>')
})

app.use((req,res,next)=>{
   res.status(404).send('<h1>Page not found</h1>')
})

app.listen(3000)
