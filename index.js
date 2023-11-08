const express = require('express');
const app = express();
const { faker } = require('@faker-js/faker');
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
})
app.get('/nueva-ruta', (req, res) => {
  res.send('Hola soy una nueva ruta');
})

app.get('/products', (req, res) => {
  const product = [];
  for (let index = 0; index < 100; index++) {
    product.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price()),
      image: faker.image.url()
    })
  }
  res.json(product)
})

app.get('/users', (req, res) => {
  const {limit, offset} = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset
    })
  } else {
    res.send('No hay parametros')
  }
})



app.get('/categorias/:id/produtcs/:productId', (req, res) => {
  const {id , productId} = req.params;
  res.json({
    id,
    productId
  })
})


app.get('/products/:id', (req, res) => {
  const id = req.params.id;
  res.json({
    id,
    name: 'product 3',
    price: '3000'
  });
})

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('http://localhost:' + port);
})
