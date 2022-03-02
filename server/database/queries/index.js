const { getData, getCategory } = require('./getData');
// const getData = require('./getData');
const postData = require('./postData');
const deleteData = require('./deleteData');

module.exports = {
  getData,
  postData,
  deleteData,
  getCategory,
};
