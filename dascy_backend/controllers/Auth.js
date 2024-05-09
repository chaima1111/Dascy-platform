import User from "../models/UserModel.js";
import argon2 from "argon2";

export const Login = async (req, res) => {
  const user = await User.findOne({
    where: {
      email: req.body.email,
    },
  });
  if (!user) return res.status(404).json({ msg: "User not found" });
  const match = await argon2.verify(user.password, req.body.password);
  if (!match) return res.status(400).json({ msg: "Wrong Password" });
  req.session.userId = user.uuid;
  const uuid = user.uuid;
  const name = user.name;
  const email = user.email;
  const role = user.role;
  res.status(200).json({ uuid, name, email, role });
};

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ msg: "User already exists" });
    }
    const hashedPassword = await argon2.hash(password);
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      role: "user", // Assuming default role is "user"
    });

    res.status(201).json({ msg: "User registered successfully" });
  } catch (error) {
    console.error("Error in registration:", error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

export const Me = async (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ msg: "Please login to your account!" });
  }
  const user = await User.findOne({
    attributes: ["uuid", "name", "email", "role"],
    where: {
      uuid: req.session.userId,
    },
  });
  if (!user) return res.status(404).json({ msg: "User not found" });
  res.status(200).json(user);
};

export const logOut = (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.status(400).json({ msg: "can't logout" });
    res.status(200).json({ msg: "successful logout" });
  });
};
