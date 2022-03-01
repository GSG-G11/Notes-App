/* eslint-disable camelcase */
const connection = require('../config/connection');

const deleteData = (note_id) => {
  const sql = {
    text: 'DELETE FROM notes WHERE id=$1;',
    values: [note_id],
  };
  return connection.query(sql);
};

module.exports = deleteData;
