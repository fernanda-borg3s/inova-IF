import userController from "../controllers/user.controller.js";
import authorize from "../middleware/authorize.js";
import { Router } from "express";

const userRouter = Router();

userRouter.get("/userAluna", userController.getUserAluna);
userRouter.get("/userProfessora", userController.getUserProfessora);
export default userRouter;