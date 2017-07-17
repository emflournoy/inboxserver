'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const knex = require('knex');
const path = require('path');


app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());

app.use(express.static(path.join('./client/build')));


// app.use('/messages',messages);

const port = process.env.PORT || 3003;

app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;
