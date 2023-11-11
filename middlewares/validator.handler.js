const boom = require('@hapi/boom');

function validatorHandler(schema, property){
     return (req, res, next) => {
        const data = req[property];
        const {error} = schema.validate(data, {abortEatly: false});
        if (error){
            next(boom.badRequest(error))
        }
     }
}

module.exports = validatorHandler;