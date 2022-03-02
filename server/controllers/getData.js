/* eslint-disable no-unused-vars */
const { getData } = require('../database/queries');
const { serverError } = require('./error');

const getNoteData = (request, response) => {
  // eslint-disable-next-line no-console
  getData().then((data) => data.rows)
    .catch(() => {
      serverError(response);
    });
};

module.exports = getNoteData;
