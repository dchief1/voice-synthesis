import Joi from "joi";

export const createConverseDto = Joi.object({
  message: Joi.string().required(),
});
