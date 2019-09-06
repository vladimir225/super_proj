const express = require('express');
const router = express.Router();
const NoteService = require('../services/NoteService');

router.post('/', async function(req, res) {
    console.log('body', req.body)
    try {
        const note = await NoteService.createNote(req.body, req.user)
        console.log('note', note)
        res.send(note);
    } catch(err) {
        console.log('err ',err)
        res.status(400).send({message: err.message})
    }
});

module.exports = router;
