const Joi = require('joi');

const customerId = Joi.number().integer();
const id = Joi.number().integer();

const getOrderSchema = Joi.object({
  id: id.require(),
})

const createOrderSchema = Joi.object({
  customerId: customerId.required(),
})


module.exports = { getOrderSchema, createOrderSchema };
