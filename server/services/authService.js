import bcrypt from "bcryptjs";
import validator from "validator";

import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";

export const registerUser = async (body) => {

  const { name, email, password } = body;

  if (!name || !email || !password)
    throw new Error("All fields are required");

  if (!validator.isEmail(email))
    throw new Error("Invalid Email");

  if (password.length < 6)
    throw new Error("Password should be at least 6 characters");

  const exists = await User.findOne({ email });

  if (exists)
    throw new Error("Email already registered");

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  return {
    success: true,
    user: {
      _id: user._id,
      name: user.name,
      email: user.email,
    },
    token: generateToken(user._id),
  };
};

export const loginUser = async (body) => {

  const { email, password } = body;

  if (!email || !password)
    throw new Error("All fields are required");

  const user = await User.findOne({ email });

  if (!user)
    throw new Error("Invalid Credentials");

  const matched = await bcrypt.compare(
    password,
    user.password
  );

  if (!matched)
    throw new Error("Invalid Credentials");

  return {
    success: true,
    user: {
      _id: user._id,
      name: user.name,
      email: user.email,
    },
    token: generateToken(user._id),
  };
};

export const getProfile = async (id) => {

  return await User.findById(id).select("-password");

};