const express = require('express');
const fs = require('fs');
const router = express.Router();

router.get('/message', (req, res, next) => {
    res.send(`
        <form action="/sent-message" method="POST">
            <label for="message">Enter message</label><br />
            <input name="message">
            <input type="hidden" id="username" name="username">
            <br />
            <button type="submit">Send</button>
        </form>
        <script>
            document.getElementById('username').value = localStorage.getItem('username');
        </script>
    `);
});

router.post('/sent-message', (req, res, next) => {
    const combinedMessage = `${req.body.username}:${req.body.message}\n`

    fs.appendFile('message.txt',combinedMessage,(err)=>{
        if (err) {
            console.error(err);
            res.status(500).send('Error saving the message.');
        } else {
            console.log('Message saved successfully.');
            res.redirect('/message');
        }
    })
});

module.exports = router;
