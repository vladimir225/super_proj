const Note = require('../models/Note')
const jwt = require('jsonwebtoken');
const config = require('../config/server')

const createNote = async (newNote, payload) => {
    console.log(newNote, '===-----==')
    Note.create({title: newNote.title, userId:payload.id})
    return { title: newNote.title }
}

const getNotes = (payload) => {
    return collection = Note.findAll({raw: true, where: {userId:payload.id}})
}

module.exports= {
    createNote,
    getNotes
}