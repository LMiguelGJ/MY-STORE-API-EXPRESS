// const boom = require('@hapi/boom');
const sequelize = require('../libs/sequelize');
const {models} = require('./../libs/sequelize')

class CategoryService {

  constructor(){
  }
  async create(data) {
    const newCategory = await models.Category.create(data);
    return newCategory;
  }

  async find() {
    const Categories = await models.Category.findAll();
    return Categories;
  }

  async findOne(id) {
    const Category = await models.Category.findByPk(id, {
      include: ['products']
    });
    return Category;
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }

}

module.exports = CategoryService;
