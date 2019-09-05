const Note = require('../models/Note')
const config = require('../config/server')
const jwt = require('jsonwebtoken');


const giveNotes = (token) => {
    console.log(token, '---------------------------')
    const decoded = jwt.verify(token.token, config.secretJWT);
    console.log(decoded)
    return collection = Note.findAll({raw: true, where: {userId:decoded.id}})
}

module.exports= {
    giveNotes
}