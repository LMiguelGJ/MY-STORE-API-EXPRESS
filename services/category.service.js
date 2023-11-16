const boom = require('@hapi/boom');
const sequelize = require('../libs/sequelize');

class CategoryService {

  constructor(){
  }
  async create(data) {
    return data;
  }

  async find() {
    const query = 'SELECT * FROM public.task ORDER BY id ASC';
    const [data, metadata] = await sequelize.query(query);
    return {
      data,
      metadata,
    }
  }

  async findOne(id) {
    return { id };
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
