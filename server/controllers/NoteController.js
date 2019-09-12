const express = require('express');
const noteRouter = express.Router();
const { createNote, getNotes, deleteNote } = require('../services/NoteService');

const createNoteController = async (req, res) => {
    console.log('body', req.body)
    try {
        const note = await createNote(req.body, req.user)
        console.log('note', note)
        res.send(note);
    } catch(err) {
        console.log('err ',err)
        res.status(400).send({message: err.message})
    }
};

const getNotesController = async (req, res) => {
    try {
        console.log(req.body, 'body')
        const notes = await getNotes(req.user)
        res.send(notes);
    } catch(err) {
        console.log('err ',err)
        res.status(400).send({message: err.message})
    }
};

const deleteNoteController = async (req, res) => {
    try {
        const note = await deleteNote(req.params.id)
        res.send(note)
    } catch(err) {
        res.status(404).send({message: err.message})
    }
}

noteRouter.post('/create', createNoteController );
noteRouter.post('/get', getNotesController);
noteRouter.delete('/delete/:id', deleteNoteController)

module.exports = noteRouter;
