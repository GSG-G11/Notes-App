// const getData = require('../database/queries/getData');
const { getData } = require('../database/queries');

// eslint-disable-next-line no-unused-vars
const getNoteData = (request, response) => {
  // eslint-disable-next-line no-console
  getData().then((data) => console.log(data.rows)).catch((error) => console.log(error));
};

module.exports = getNoteData;
