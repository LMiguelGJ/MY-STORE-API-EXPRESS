const express = require('express');
const validatorHandler = require('./../middlewares/validator.handler');
const { getOrderSchema, createOrderSchema, addItemSchema } = require('./../schemas/order.schema')
const OrderService = require('./../services/order.service');

const router = express.Router();
const service = new OrderService();
const passport = require('passport');


router.get('/:id',
  passport.authenticate('jwt', {session: false}),
  validatorHandler(getOrderSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const Order = await service.findOne(id);
      res.json(Order);
    } catch (error) {
      next(error);
    }
  });

  router.post(
    '/add-item',
    passport.authenticate('jwt', {session: false}),
    validatorHandler(addItemSchema, 'body'),
    async (req, res) => {
      const body = req.body;
      const newItem = await service.addItem(body);
      res.status(201).json(newItem);
    }
  );

  router.post(
    '/',
    passport.authenticate('jwt', {session: false}),
    validatorHandler(createOrderSchema, 'body'),
    async (req, res) => {
      const body = req.body;
      const newOrder = await service.create(body);
      res.status(201).json(newOrder);
    }
  );

module.exports = router;
