const {faker} = require('@faker-js/faker');
const boom = require('@hapi/boom')
const pool = require('../libs/postgres.pool')
const {models} = require('./../libs/sequelize')

class ProductsService {

  constructor(){
    // this.products = [];
    // this.generate();
    this.pool = pool;
    this.pool.on('error', (err)=> console.error(err));
  }

  // generate() {
  //   const limit = 10;
  //   for (let index = 0; index < limit; index++) {
  //     this.products.push({
  //       id: faker.string.uuid(),
  //       name: faker.commerce.productName(),
  //       price: parseInt(faker.commerce.price(), 10),
  //       image: faker.image.url(),
  //       isBlock: faker.datatype.boolean()
  //     });
  //   }
  // }

  async create(data) {
    const newProduct = await models.Product.create(data);
    return newProduct;
  }

  async find() {
    const rta = await models.Product.findAll({
      include: ['category']
    });
    return rta;
  }

  async findOne(id) {
    const product = this.products.find(item => item.id === id);
    if (!product){
      throw boom.notFound('product not found');
    }
    if (product.isBlock) {
      throw boom.conflict('product es block');
    }
    return product;
  }

  async update(id, changes) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('products no found');
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes
    };
    return this.products[index];
  }

  async delete(id) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('product not found');
    }
    this.products.splice(index, 1);
    return { id };
  }

}

module.exports = ProductsService;


