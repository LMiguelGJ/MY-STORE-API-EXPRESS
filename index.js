const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
const {checkApiKey} = require('./middlewares/auth.handler')

const {ormErrorHandler, logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const whitelist = ['http://localhost:8080', 'https://myapp.co'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  }
}
app.use(cors(options));

require('./utils/auth')

app.get('/', checkApiKey, (req, res) => {
  res.send('Hola mi server en express');
});
app.get('/api/v1', (req, res) => {
  res.send('Hola mi server en express');
});

routerApi(app);

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`http://localhost:${port}/api/v1`);
});
