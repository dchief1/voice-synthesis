import express from "express";
import * as controller from "./controller";
import { verifyToken } from "../../middleware/auth";

const router = express.Router();

router.route("/converse").post(verifyToken, controller.converse);

router.route("/history").get(verifyToken, controller.getHistory);

export default router;
