import jwt from "jsonwebtoken";
import configs from "../config/configs";
import { IUser } from "../modules/user/type";

const jwtSecretKey = configs.JWT_SECRET_KEY;

interface TokenPayload {
  userId: string;
  email: string;
}

const generateToken = (user: IUser & { _id: any }): string => {
  const payload: TokenPayload = {
    userId: user._id.toString(),
    email: user.email,
  };

  const token = jwt.sign(payload, jwtSecretKey, { expiresIn: "2d" });

  return token;
};

export { generateToken };
