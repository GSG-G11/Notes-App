const { deleteData } = require('../database/queries');

const deleteNote = (request, response) => {
  console.log(request.params.id);
  deleteData(request.params.id)
    .then(() => {
      response.redirect('/');
    })
    .catch((err) => {
      response.json({ massage: 'server error!!!' });
    });
};
module.exports = deleteNote;
