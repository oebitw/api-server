'use strict';

require('dotenv').config();
const server = require('./ src/server.js');
const mongoose = require('mongoose');


mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    server.start(process.env.PORT || 3000);
  })
  .catch((error) => {
    console.log('Connection Error: ', error.message);
  });