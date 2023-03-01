import express from "express";
import bookRoute from "./routes/books";

const app = express();

app.get('/', (_req, res) => {
  res.status(200).send('Hello World!');
});

app.use('/book-page', bookRoute)

export default app;
