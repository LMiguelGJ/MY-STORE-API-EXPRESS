const Joi = require('joi');

const customerId = Joi.number().integer();
const orderId = Joi.number().integer();
const productId = Joi.number().integer();
const amount = Joi.number().integer().min(1);
const id = Joi.number().integer();

const getOrderSchema = Joi.object({
  id: id.required(),
})

const createOrderSchema = Joi.object({
  customerId: customerId.required(),
})

const addItemSchema = Joi.object({
  orderId: orderId.required(),
  amount: amount.required(),
  productId: productId.required(),
})


module.exports = { getOrderSchema, createOrderSchema, addItemSchema };
