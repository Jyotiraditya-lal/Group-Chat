const bodyParser = require('body-parser');
const express=require('express')
const admin=require('./Routes/admin')
const shop=require('./Routes/shop')

const app=express()

app.use(bodyParser.urlencoded({extended: false}))

app.use('/admin',admin)
app.use('/shop',shop)

app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not found</h1>')
})

app.listen(3000)
