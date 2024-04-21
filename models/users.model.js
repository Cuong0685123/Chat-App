import mongoose from "mongoose";
 
const userSchema = new mongoose.Schema(
    {
        text: {
            type: String,
            required: true,
          },
          friends: {
            type: [String],
            required: true,
          },
          phoneNumber: {
            type: [String],
            required: true,
          },
          password: {
			type: String,
            require: true,
		  },
		  displayName: {
			type: String,
            require: true,
		  },
            avatar: {
            type: String,
            required: true,
          },
        },
        {timestamps: true}
      );
      const User = mongoose.model("User", userSchema);

export default User;