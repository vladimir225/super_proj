const Note = require('../models/Note')
const jwt = require('jsonwebtoken');
const config = require('../config/server')

const createNote = (newNote) => {
    console.log(newNote, '===-----==')
    const decoded = jwt.verify(newNote.token, config.secretJWT);
    Note.create({title: newNote.title, userId:decoded.id})
    return { title: newNote.title }
}

module.exports= {
    createNote
}