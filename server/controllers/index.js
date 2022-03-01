const express = require('express');
const getNoteData = require('./getData');
const postNoteData = require('./postData');

const router = express.Router();

router.get('/getData', getNoteData);
router.post('/addNote', postNoteData);

module.exports = router;
