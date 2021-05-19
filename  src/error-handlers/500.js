'use strict';

module.exports = (error, req, res, next) => {
  res.statusMessage = 'Server Error';
  res.status(500).json({
    status: 500,
    error: error.message,
    route: req.path,
  });
};