// app.get('/book-page/:name', (req, res) => {
//   const { name } = req.params;
//   res.status(200).send(name.toUpperCase());
// });

const bookName = async (req, res) => {
  const {name} = req.params;
  res.status(200).send(name.toUpperCase())
}

module.exports = { bookName };