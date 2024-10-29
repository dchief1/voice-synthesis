import { StatusCodes } from "http-status-codes";
import { Controller } from "../../utils/constant";
import { getConversationHistory, handleUserMessage } from "./service";
import { validateRequest } from "../../middleware/validation";
import { createConverseDto } from "./dto";

export const converse: Controller = async (req, res, next) => {
  await validateRequest(createConverseDto)(req, res, async () => {
    try {
      const { message } = req.body;
      const userId = req.user.userId;
      res.status(StatusCodes.OK).json(await handleUserMessage(userId, message));
    } catch (error) {
      next(error);
    }
  });
};

export const getHistory: Controller = async (req, res, next) => {
  try {
    const userId = req.user.userId;
    res.status(StatusCodes.OK).json(await getConversationHistory(userId));
  } catch (error) {
    next(error);
  }
};
