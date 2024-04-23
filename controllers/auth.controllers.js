import bcrypt from "bcrypt";
import User from "../models/users.model.js";

export const signup = async (req, res) => {
  try {
    // Hash password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // Create a new user instance
    const newUser = new User({
      phoneNumber: req.body.phoneNumber,
      password: hashedPassword,
      displayName: req.body.displayName,
      avatar: req.body.avatar,
    });
    console.log(newUser.displayName)

    // Save the user to the database
    const savedUser = await newUser.save();
    
    // Return the saved user
    return res.status(201).json(savedUser);
  } catch (error) {
    return res.status(500).json({ error: "Error registering user" });
  }
};

