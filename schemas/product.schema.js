const Joi = require('joi');

const id = Joi.string().uuid;
const name = Joi.string().string().min(3).max(15);
const price = Joi.number().integer().min(10);
const image = Joi.string().uri();


const createproducSchema = Joi.object({
    name: name.required(),
    price: price.required(),
    image: image.required(),
})
const updateproducSchema = Joi.object({
    name: name(),
    price: price(),
    image: image()
})
const getproducSchema = Joi.object({
    id: id.required(),
})

module.exports = {createproducSchema , updateproducSchema, getproducSchema};