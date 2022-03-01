const connection = require('../config/connection');

const getData = () => {
  const sql = {
    text: 'SELECT users.name, notes.title, notes.note FROM notes JOIN users ON (users.id = notes.users_id);',
    values: '',
  };
  return connection.query(sql);
};

module.exports = getData;
