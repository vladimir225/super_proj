const Note = require('../models/Note')
const config = require('../config/server')
const jwt = require('jsonwebtoken');


const giveNotes = (payload) => {
    return collection = Note.findAll({raw: true, where: {userId:payload.id}})
}

module.exports= {
    giveNotes
}