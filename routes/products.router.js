const express = require('express');
const validatorHandler = require('./../middlewares/validator.handler');
const { createproducSchema, updateproducSchema, getproducSchema, queryProductSchema } = require('./../schemas/product.schema')
const ProductsService = require('./../services/product.service');

const router = express.Router();
const service = new ProductsService();
const passport = require('passport');


router.get('/',
  validatorHandler(queryProductSchema, 'query'),
  async (req, res, next) => {
    try {
      const products = await service.find(req.query);
      res.json(products);
    } catch (error) {
      next(error);
    }
  });

router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});

router.get('/:id',
  passport.authenticate('jwt', {session: false}),
  validatorHandler(getproducSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await service.findOne(id);
      res.json(product);
    } catch (error) {
      next(error);
    }
  });

router.post('/',
  passport.authenticate('jwt', {session: false}),
  validatorHandler(createproducSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json(newProduct);
  });

router.patch('/:id',
  passport.authenticate('jwt', {session: false}),
  validatorHandler(getproducSchema, 'params'),
  validatorHandler(updateproducSchema, 'body'),
  async (req, res) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const product = await service.update(id, body);
      res.json(product);
    } catch (error) {
      res.status(404).json({
        message: error.message
      });
    }

  });

router.put('/:id',
  passport.authenticate('jwt', {session: false}),
  validatorHandler(getproducSchema, 'params'),
  validatorHandler(updateproducSchema, 'body'),
  async (req, res) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const product = await service.update(id, body);
      res.json(product);
    } catch (error) {
      res.status(404).json({
        message: error.message
      });
    }

  });

router.delete('/:id',
  passport.authenticate('jwt', {session: false}),
  async (req, res) => {
  const { id } = req.params;
  const rta = await service.delete(id);
  res.json(rta);
});

module.exports = router;
