import { StatusCodes } from "http-status-codes";
import { checkJwt } from "./helpers";
import { Controller } from "../utils/constant";

export const verifyToken: Controller = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        message: "user Unauthorized",
        status: false,
      });
    }
    // console.log(req.headers, "TOKEN::::");
    const token: any = await checkJwt(req.headers.authorization?.split(" ")[1]);
    if (!token)
      return res.status(StatusCodes.UNAUTHORIZED).json({
        message: "Invalid token",
        status: false,
      });

    req.user = token;

    next();
  } catch (err) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      message: "Token validation error",
      status: false,
    });
  }
};
