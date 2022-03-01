/* eslint-disable no-unused-vars */
const { getData } = require('../database/queries');

const getNoteData = (request, response) => {
  // eslint-disable-next-line no-console
  getData().then((data) => console.log(data.rows)).catch((error) => console.log(error));
};

module.exports = getNoteData;
