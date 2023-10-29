const { body } = require('express-validator');


const validatinMiddleware = ()=>{
    return [
        body("name").notEmpty().withMessage("name is required").isLength(2).withMessage("length must be greater than 2"),
        body("price").notEmpty().withMessage("price is required")
    ]
}

module.exports = {validatinMiddleware}