const Joi = require('joi');

const id = Joi.string().uuid().required();
const name = Joi.string().min(3).max(15);
const price = Joi.number().integer().min(10);
const description = Joi.string().min(10);
const image = Joi.string().uri();


const createproducSchema = Joi.object({
    name: name.required(),
    price: price.required(),
    description: description.required(),
    image: image.required(),
})
const updateproducSchema = Joi.object({
    name: name,
    price: price,
    description: description.required(),
    image: image
})
const getproducSchema = Joi.object({
    id: id,
})

module.exports = {createproducSchema , updateproducSchema, getproducSchema};
