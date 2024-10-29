import express, { Express, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import { connectDatabase } from "./config/database";
import route, { PREFIXES } from "./router";
import { handleNotFound } from "./middleware/not-found";
import { errorHandlerMiddleware } from "./middleware/error-handler";

connectDatabase();

const app: Express = express();

app.use(helmet());

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world!");
});

app.use(PREFIXES.API, route);

app.use(handleNotFound);
app.use(errorHandlerMiddleware);

export default app;
