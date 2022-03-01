const { postData } = require('../database/queries');

const postNoteData = (request, response) => {
  const { title, noteContent, category } = request.body;
  const categoryValue = Number(category);
  postData(title, noteContent, categoryValue)
    .then(() => {
      response.redirect('/');
    })
    .catch((error) => console.log(error));
};

module.exports = postNoteData;
