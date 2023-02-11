const Joi = require('joi');

const validator = (schema) => (payload) => schema.validate(payload, { abortEarly: false});
const signUpSchema = Joi.object({
    name: Joi.string().min(3).required(),
    surname: Joi.string().min(3).required()
})

exports.validateSignUp = validator(signUpSchema);