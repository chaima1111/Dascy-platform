import express from "express";
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/User.js";
// import { verifyUser, adminOnly } from "../middleware/AuthUser.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get("/users", verifyUser, getUsers);
router.get("/users/:id", verifyUser, getUserById);
router.post("/users", verifyUser, createUser);
router.post("/register", verifyUser, createUser);
router.patch("/users/:id", verifyUser, updateUser);
router.delete("/users/:id", verifyUser, deleteUser);
// router.get('/users', verifyUser,adminOnly, getUsers);
// router.get('/users/:id',verifyUser, adminOnly, getUserById);
// router.post('/users', verifyUser, adminOnly, createUser);
// router.patch('/users/:id',verifyUser,adminOnly, updateUser);
// router.delete('/users/:id',verifyUser, adminOnly, deleteUser);

export default router;
