import dotenv from "dotenv";

dotenv.config();

export const configs = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT || 9000,
  ENVIRONMENT: process.env.ENVIRONMENT,

  DB_URL: process.env.DB_URL as string,

  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY as string,

  BREVO_API_KEY: process.env.BREVO_API_KEY as string,
};

export default configs;
