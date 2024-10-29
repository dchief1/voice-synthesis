import { StatusCodes } from "http-status-codes";
import { validateRequest } from "../../middleware/validation";
import { Controller } from "../../utils/constant";
import { createDto, loginDto } from "./dto";
import { createService, loginService } from "./service";

export const create: Controller = async (req, res, next) => {
  await validateRequest(createDto)(req, res, async () => {
    try {
      res.status(StatusCodes.OK).json(await createService(req.body));
    } catch (error) {
      next(error);
    }
  });
};

export const login: Controller = async (req, res, next) => {
  await validateRequest(loginDto)(req, res, async () => {
    try {
      const { email, password } = req.body;
      res.status(StatusCodes.OK).json(await loginService(email, password));
    } catch (error) {
      next(error);
    }
  });
};
