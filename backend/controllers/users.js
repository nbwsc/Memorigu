const products = require('../models/products');

const APIError = require('../rest').APIError;

module.exports = {
    'GET /users': (ctx, next) => {
        ctx.rest({
            apis:Object.keys(module.exports)
        });
    },
    'POST /users/login':async (ctx,next) =>{
        ctx.rest({
            'a':'a'
        })
    }

};
