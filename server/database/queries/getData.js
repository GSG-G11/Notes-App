const connection = require('../config/connection');

const getData = () => {
  const sql = {
    text: 'SELECT notes.id, categories.category, notes.title, notes.note FROM notes JOIN categories  ON (categories.id = notes.category_id);',
    values: '',
  };
  return connection.query(sql);
};

const getCategory = (id) => {
  const sql = {
    text: 'SELECT notes.id, title, note FROM notes WHERE category_id=$1;',
    values: [id],
  };
  return connection.query(sql);
};
module.exports = { getData, getCategory };
// module.exports = getData;
