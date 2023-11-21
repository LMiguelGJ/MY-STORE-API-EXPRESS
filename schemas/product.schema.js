const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(15);
const price = Joi.number().integer().min(10);
const description = Joi.string().min(10);
const image = Joi.string().uri();
const categoryId = Joi.number().integer();


const createproducSchema = Joi.object({
    name: name.required(),
    price: price.required(),
    description: description.required(),
    image: image.required(),
    categoryId: categoryId.required()
})
const updateproducSchema = Joi.object({
    name: name,
    price: price,
    description: description.required(),
    image: image,
    categoryId
})
const getproducSchema = Joi.object({
    id: id,
})

module.exports = {createproducSchema , updateproducSchema, getproducSchema};
