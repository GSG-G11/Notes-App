const { deleteData } = require('../database/queries');
const { serverError } = require('./error');

const deleteNote = (request, response) => {
  console.log(request.params.id);
  deleteData(request.params.id)
    .then(() => {
      response.redirect('/');
    })
    .catch(() => {
      serverError(response);
    });
};
module.exports = deleteNote;
