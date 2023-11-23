const boom = require('@hapi/boom');

const {models} = require('./../libs/sequelize');

class OrderService {

  constructor(){
  }
  async create(data) {
    const newOrder = await models.Order.create(date);
    return newOrder;
  }

  async find() {
    return [];
  }

  async findOne(id) {
    const getOrder = await models.Order.findByPk(id, {
      include: [{
        association: 'customer',
        include: ['user']
      }]
    })
    return { getOrder };
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

module.exports = OrderService;
