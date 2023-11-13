const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3000;

app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});
app.get('/api/v1', (req, res) => {
  res.send('Hola mi server en express');
});

routerApi(app);

app.listen(port, () => {
  console.log(`http://localhost:${port}/api/v1:`);
});
