const express = require('express');
const router = express.Router();
const registerService = require('../services/RegisterService');

router.post('/', async function(req, res) {
    try {
        const user = await registerService.createUser(req.body)
        res.status(200).send(user);
    } catch(err) {
        console.log('err ',err)
        res.status(400).send({message: err.message})
    }
});

module.exports = router;
