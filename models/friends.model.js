import mongoose from "mongoose";
 
const friendSchema = new mongoose.Schema(
    {
        senderId: {
            type: String,
            required: true,
          },
          reciverId: {
            type: String,
            required: true,
          },
          status: {
            type: String,
            enum: ["pending", "accepted", "rejected"],
            default: "pending",
          },
        
        },
        
      );
      const Friend = mongoose.model("Friend", friendSchema);

export default Friend;