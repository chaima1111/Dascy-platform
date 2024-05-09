import express from "express";
import { Login, logOut, Me, register } from "../controllers/Auth.js";

const router = express.Router();

router.get("/me", Me);
router.post("/login", Login);
router.post("/signup", register);
router.delete("/logout", logOut);

export default router;
