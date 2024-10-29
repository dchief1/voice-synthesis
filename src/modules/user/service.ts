import { BadRequestError, ConflictError, UnauthorizedError } from "../../utils/error";
import { generateToken } from "../../utils/generateToken";
import User from "./model";
import { IUser } from "./type";

export const createService = async (data: IUser) => {
  const existingUser = await User.findOne({
    email: data.email,
  });

  if (existingUser) {
    if (existingUser.email === data.email) {
      throw new ConflictError(`Email already in use`);
    }
  }

  const user = await User.create({
    ...data,
  });

  // Omit the password field from the returned  data
  const { password, ...userDataWithoutPassword } = user.toObject();

  return {
    success: true,
    message: "User created",
    user: userDataWithoutPassword,
  };
};

export const loginService = async (email: string, password: string) => {
  const user = await User.findOne({
    email,
  });

  if (!user) {
    throw new BadRequestError("Incorrect login details");
  }

  if (!(await user.comparePassword(password))) {
    throw new UnauthorizedError("Incorrect password");
  }

  const token = generateToken(user);

  const data = {
    ...user.toJSON(),
    token,
  };

  return {
    success: true,
    message: `Welcome ${user.first_name}`,
    data,
  };
};
