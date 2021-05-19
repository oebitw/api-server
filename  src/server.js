'use strict';

//////////////////////////////
//////// Dependencies ///////
////////////////////////////

const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');


//////////////////////////////
//////// Imports      ///////
////////////////////////////

// middleware
const logger = require('./middleware/logger.js');

// routes
const clothesRouter = require('./routes/clothes.js');
const foodRouter = require('./routes/food.js');

// Error handlers
const notFoundHandler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');


/////////////////////////////
//////// Middleware  ///////
///////////////////////////

// Parsing json
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));


// Global middleware
app.use(logger);



/////////////////////////////
//////// ROUTES      ///////
///////////////////////////

// home
app.get('/', homeHandler);

// clothes
app.use('/api/v1/clothes/', clothesRouter);

// food
app.use('/api/v1/food/', foodRouter);

// Error handlers
app.use('*', notFoundHandler);
app.use(errorHandler);


// homeHandler

function homeHandler(req,res){
  res.send('Hello from the other side');
}



//////////////////////////////
//////// Exports      ///////
////////////////////////////

module.exports = {
  app: app,
  start: (PORT) => {
    app.listen(PORT, () => {
      console.log(`Listening on http://localhost:${PORT}/`);
    });
  },
};