/* eslint-disable no-unused-vars */

const { getData, getCategory  } = require('../database/queries');
const { serverError } = require('./error');

const getNoteData = (request, response) => {
  // eslint-disable-next-line no-console
  getData().then((data) => data.rows)
    .catch(() => {
      serverError(response);
    });
};
// const getCategory = (request, response) => {
//   // eslint-disable-next-line no-console
// eslint-disable-next-line max-len
//   getData().then((data) => console.log(data.rows)).catch((err) => response.status(500).json({ msg: 'Internal Server Error' }));
// };
module.exports = getNoteData;
