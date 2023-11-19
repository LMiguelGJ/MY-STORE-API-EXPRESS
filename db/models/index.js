const {User, UserSchemas } = require('./user.model')
const {Customer, CustomerSchema } = require('./customer.model')

function setupModels(sequelize) {
    User.init(UserSchemas, User.config(sequelize))
    Customer.init(CustomerSchema, Customer.config(sequelize))
}

module.exports = setupModels;