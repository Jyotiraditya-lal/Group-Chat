const express= require('express')

const router= express.Router()

router.get('/login',(req,res,next)=>{
    res.send('<form action="/login" method="POST"><label id="username">Username</label><br /><input type="text" name="username"><br /><button type="submit">login </button></form>')
})

router.post('/login',(req,res,next)=>{
    const username = req.body.username;
    res.send(`<script>localStorage.setItem('username', '${username}'); window.location.href = '/message';</script>`);
})

module.exports= router
