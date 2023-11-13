const express = require('express');
const routerApi = require('./routes');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = 3000;

app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});
app.get('/api/v1', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/api/v1', (req, res) => {
  res.send('Hola mi server en express');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`http://localhost:${port}/api/v1`);
});
