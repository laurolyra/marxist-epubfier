const express = require('express');
const app = express();

const routes = require('./routes');

app.get('/', (_req, res) => {
  res.status(200).send('Hello World!');
});

app.use('/book-page', routes.bookRoute)

module.exports = app;
