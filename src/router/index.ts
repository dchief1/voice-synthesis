import { Router } from "express";
import UserRoute from "../modules/user/index";
import ConversationRoute from "../modules/conversation/index";

export const PREFIXES = {
  API: "/api/v1/",
};

const route = Router();

const User = `/user`;

const Conversation = "/conversation";

route.use(User, UserRoute);
route.use(Conversation, ConversationRoute);

export default route;
