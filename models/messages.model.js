import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    text: {
      type: String,
    },
    images: {
      type: [String],
      required: true,
    },
    files: {
      type: [String],
      required: true,
    },
    recallAt: {
      type: Date,
    },
    deleteAt: {
      type: Date,
    },
    createdAt: {
      type: Date,
    },
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);
const Message = mongoose.model("Message", messageSchema);

export default Message;
