import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    messagesId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Messages",
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    admin: {
      type: String,
      require: true,
    },
    members: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
  },
  {timestamps: true}
);

const Conversation = mongoose.model("Conversation", conversationSchema);

export default Conversation;
