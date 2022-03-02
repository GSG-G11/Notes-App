const express = require('express');
const getNoteData = require('./getData');
const postNoteData = require('./postData');
const deleteNote = require('./deleteData');

const addNoteHandle = require('./addNoteHandle');

const router = express.Router();

router.get('/addNotes', addNoteHandle);
router.get('/getData', getNoteData);
router.post('/addNote', postNoteData);
router.use('/deleteData', deleteNote);

module.exports = router;
