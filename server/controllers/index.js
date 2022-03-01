const express = require('express');
const getNoteData = require('./getData');

const router = express.Router();

router.get('/getData', getNoteData);

module.exports = router;
