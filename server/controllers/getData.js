/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

const { getData, getCategory } = require('../database/queries');
const { serverError } = require('./error');

const getNoteData = (request, response) => {
  getData().then((data) => response.json(data.rows))
    .catch(() => {
      serverError(response);
    });
};
const getCategoryData = (request, response) => {
  console.log('request', request.headers.value);
  getCategory(request.headers.value).then((data) => response.json(data.rows))
    .catch(() => {
      serverError(response);
    });
};
module.exports = { getNoteData, getCategoryData };
