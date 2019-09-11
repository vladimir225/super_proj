const express = require('express');
const authRouter = express.Router();
const { registerUser, loginUser } = require('../services/AuthService');

const loginController = async (req, res) => {
    try {
        const user = await loginUser(req.body)
        res.send(user);
        console.log(user)
    } catch(err) {
        console.log('err ',err)
        res.status(400).send({message: err.message})
    }
};

const registerController = async (req, res) => {
    try {
        const user = await registerUser(req.body)
        res.status(200).send(user);
    } catch(err) {
        console.log('err ',err)
        res.status(400).send({message: err.message})
    }
};

authRouter.post('/login', loginController );
authRouter.post('/register', registerController);

module.exports = authRouter;