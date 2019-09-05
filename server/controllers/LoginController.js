const express = require('express');
const router = express.Router();
const LoginService = require('../services/LoginService');

router.post('/', async function(req, res) {
    try {
        const user = await LoginService.checkUser(req.body)
        res.send(user);
        console.log(user)
    } catch(err) {
        console.log('err ',err)
        res.status(400).send({message: err.message})
    }
});

module.exports = router;
