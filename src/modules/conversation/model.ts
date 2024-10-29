import mongoose from "mongoose";
import { IConversation } from "./type";

const conversationSchema = new mongoose.Schema<IConversation>({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  aiResponse: {
    type: String,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Conversation = mongoose.model<IConversation>("conversation", conversationSchema);

export default Conversation;
