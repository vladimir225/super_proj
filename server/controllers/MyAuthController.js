const express = require('express');
const authService = require('../services/MyAuthService');

module.exports = async (req, res, next) => {
    try {
        const auth = await authService.checkAuth(req.body)
        next()
    } catch(err) {
        console.log('err ',err)
        res.status(401).send({message: err.message})
    }
};


