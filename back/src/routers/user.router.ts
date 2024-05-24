import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  getAllUsersController,
  updateUserController,
} from "../controllers/user.controller";

export const userRouter: Router = Router();

userRouter.post("/register", createUserController);
userRouter.get("/all", getAllUsersController);
userRouter.get("/:userId");
userRouter.patch("/:userId", updateUserController);
userRouter.delete("/:userId", deleteUserController);
