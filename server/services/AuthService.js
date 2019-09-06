const User = require('../models/User')
const jwt = require('jsonwebtoken');
const config = require('../config/server')

const checkAuth = (token) => {
    try {
        const decoded = jwt.verify(token.token, config.secretJWT)
    } catch {
        throw new Error('не валидный токен')
        
    }
}

module.exports= {
    checkAuth  
}