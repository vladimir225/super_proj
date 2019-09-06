const express = require('express');
const router = express.Router();
const NotesService = require('../services/NotesService');

router.post('/', async function(req, res) {
    try {
        console.log(req.body, 'body')
        const notes = await NotesService.giveNotes(req.user)
        res.send(notes);
    } catch(err) {
        console.log('err ',err)
        res.status(400).send({message: err.message})
    }
});

module.exports = router;
