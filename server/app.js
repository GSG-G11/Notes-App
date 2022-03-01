require('env2')('.env');
const { join } = require('path');
const express = require('express');
const compression = require('compression');
const router = require('./controllers');

const app = express();

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, '..', 'public')));
app.set('port', process.env.PORT || 3030);

app.use(router);

module.exports = app;
