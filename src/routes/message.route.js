import express from "express";
import { protectRoute } from "../middleware/auth.middleware";
import { getUsersFroSidebar } from "../controllers/message.controller";

const router = express.Router();

router.get("/users", protectRoute ,getUsersFroSidebar);

export default router;
