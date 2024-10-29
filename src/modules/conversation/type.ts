import mongoose from "mongoose";

export interface IConversation {
  userId: mongoose.Types.ObjectId;
  message: string;
  aiResponse: string;
  timestamp: Date;
}
