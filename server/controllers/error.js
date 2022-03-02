const { join } = require('path');

const pageNotFound = (req, res, next) => {
  res.status(404).sendFile(join(__dirname, '../../public/html/notFound.html'));
};

const serverError = (err, req, res, next) => {
  res.status(500).sendFile(join(__dirname, '../../public/html/serverError.html'));
};

module.exports = { pageNotFound, serverError };
