/* eslint-disable no-unused-vars */

const { getData, getCategory } = require('../database/queries');
const { serverError } = require('./error');

const getNoteData = (request, response) => {
  // eslint-disable-next-line no-console
  getData().then((data) => response.json(data.rows))
    .catch(() => {
      serverError(response);
    });
};
const getCategoryData = (request, response) => {
  // eslint-disable-next-line no-console
  getCategory(4).then((data) => response.json(data.rows))
    .catch(() => {
      serverError(response);
    });
};
module.exports = { getNoteData, getCategoryData };
