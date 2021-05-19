'use strict';

module.exports = (req, res, next) => {
  console.log('Path:',req.path, 'method=', req.method );
  next();
};