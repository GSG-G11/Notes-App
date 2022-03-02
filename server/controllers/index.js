const express = require('express');
const getNoteData = require('./getData');
const postNoteData = require('./postData');
const deleteNote = require('./deleteData');
const { pageNotFound, serverError } = require('./error');

const router = express.Router();

router.get('/getData', getNoteData);
router.post('/addNote', postNoteData);
router.use('/deleteData', deleteNote);
router.use(pageNotFound);
router.use(serverError);

module.exports = router;
