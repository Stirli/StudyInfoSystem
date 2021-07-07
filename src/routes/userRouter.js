import express from "express";
import * as userController from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.use("/create", userController.addUser);
userRouter.use("/", userController.getUsers);

export default userRouter;
