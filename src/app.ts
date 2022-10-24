const express = require('express');
const app = express();

const { bookRoute } = require('./routes');

app.get('/', (_req, res) => {
  res.status(200).send('Hello World!');
});

app.use('/book-page', bookRoute)

module.exports = app;
