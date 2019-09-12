const Note = require('../models/Note')
const jwt = require('jsonwebtoken');
const config = require('../config/server')

const createNote = async (newNote, payload) => {
    console.log(newNote, '===-----==')
    const createNote = await Note.create({title: newNote.title, userId:payload.id})
    return createNote.dataValues 
}

const getNotes = async (payload) => {
    return collection = Note.findAll({raw: true, where: {userId:payload.id}})
}

const deleteNote = async (id) => {
    Note.destroy({ where: {id:id} })
}

module.exports= {
    createNote,
    getNotes,
    deleteNote
}