const { json } = require('express');
const faker = require('faker');

class ProductServices {

  constructor(){
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = 10;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
      });
    }
  }

  async create(body){
    const newProduct = {
      id: faker.datatype.uuid(),
      // ...body, podemos usar el split operation
      name: body.name,
      price: parseInt(body.price),
      image: body.image,
    }
    this.products.push(newProduct);
    return {
      message: 'created',
      date: this.products.find(item => item.id == newProduct.id)
    }
  }

  async find(){
    return this.products;
  }

  async findOne(id){
    return this.products.find(item => item.id == id);
  }

  async delete(id){
    const newProducts = this.products.filter(item => item.id != id);
    this.products = newProducts;
    return {id}
  }

  async update(id, changes){
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('product not fount');
    } else {
      const product = this.products[index];
      this.products[index] = {
        ...product,
        ...changes
      };
      return this.products[index];
    }
  }

}

module.exports = ProductServices;
