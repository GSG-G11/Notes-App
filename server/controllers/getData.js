const getData = require('../database/queries');

// eslint-disable-next-line no-unused-vars
const getNoteData = (request, response) => {
  // eslint-disable-next-line no-console
  getData().then((data) => data.rows).catch((error) => console.log(error));
};

module.exports = getNoteData;
