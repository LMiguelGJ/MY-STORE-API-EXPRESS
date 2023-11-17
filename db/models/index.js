const {User, UserSchemas } = require('./user.model')

function setupModels(sequelize) {
    User.init(UserSchemas, User.config(sequelize))
}

module.exports = setupModels;