const Note = require('../models/Note')
const jwt = require('jsonwebtoken');
const config = require('../config/server')

const createNote = (newNote, payload) => {
    console.log(newNote, '===-----==')
    Note.create({title: newNote.title, userId:payload.id})
    return { title: newNote.title }
}

module.exports= {
    createNote
}