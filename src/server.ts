const mainApp = require('./app');
const port = 3000;

mainApp.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});