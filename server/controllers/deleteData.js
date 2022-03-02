const { deleteData } = require('../database/queries');
const { serverError } = require('./error');

const deleteNote = (request, response) => {

  deleteData(4)
    .then((data) => {
      response.json(data);
    })
    .catch(() => {
      serverError(response);
    });

};
module.exports = deleteNote;
