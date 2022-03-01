const { deleteData } = require('../database/queries');

const deleteNote = (request, response) => {
  deleteData(4).then((data) => { response.json(data); }).catch((error) => console.log(error));
};
module.exports = deleteNote;
