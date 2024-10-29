import { getResponse } from "../../utils/constant";

import Conversation from "./model";

export const handleUserMessage = async (userId: string, message: string) => {
  const context = {};

  const aiResponse = getResponse(message, context);

  const conversation = await Conversation.create({
    userId,
    message,
    aiResponse,
  });

  return {
    success: true,
    conversation,
  };
};

export const getConversationHistory = async (userId: string) => {
  return await Conversation.find({ userId }).sort({ timestamp: -1 });
};
