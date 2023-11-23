const express = require('express');
const validatorHandler = require('./../middlewares/validator.handler');
const { getOrderSchema, createOrderSchema } = require('./../schemas/order.schema')
const OrderService = require('./../services/order.service');

const router = express.Router();
const service = new OrderService();

router.get('/:id',
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
  '/',
  validatorHandler(createOrderSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newOrder = await service.create(body);
    res.status(201).json(newOrder);
  }
);

module.exports = router;
