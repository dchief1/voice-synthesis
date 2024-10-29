import Joi from "joi";

export const createDto = Joi.object({
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  email: Joi.string()
    .email()
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    .required(),
  password: Joi.string().min(6).required(),
});

export const loginDto = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});
