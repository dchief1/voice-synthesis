import jwt from "jsonwebtoken";
import configs from "../config/configs";

const checkJwt = async (hash: string, secret: string = configs.JWT_SECRET_KEY ?? "") => {
  try {
    const token = jwt.verify(hash, secret);
    return token;
  } catch (err) {
    throw err;
  }
};

export { checkJwt };
