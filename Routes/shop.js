const express=require('express')

const router=express.Router()

router.get('/',(req,res,next)=>{
    console.log('second middleware')
    res.send('<h1>Hello from Expressjs</h1>')
})

module.exports= router