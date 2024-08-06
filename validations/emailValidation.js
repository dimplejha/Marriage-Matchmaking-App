const Joi = require('joi');

const emailSchema = Joi.string().email().required();

const validateEmail = (email) => {
  const { error } = emailSchema.validate(email);
  return !error;
};

module.exports = { validateEmail };
