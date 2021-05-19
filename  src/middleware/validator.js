'use strict';

module.exports = (req, res, next) => {
  if (!req.params.id) {
    throw new Error('Invalid ID');
  } else {
    next();
  }
};