import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  getAllUsersController,
  getUserByIdController,
  updateUserController,
} from "../controllers/users.controller";
import { validateBody } from "../middlewares/globals.middleware";
import { userReqSchema, userUpdateSchema } from "../schemas/user.schema";
import {
  doesUserExist,
  isUserNameUnique,
} from "../middlewares/users.middleware";

export const userRouter: Router = Router();

userRouter.post(
  "/register",
  validateBody(userReqSchema),
  isUserNameUnique,
  createUserController
);

userRouter.get("/all", getAllUsersController);

userRouter.get("/:userId", doesUserExist, getUserByIdController);

userRouter.patch(
  "/:userId",
  doesUserExist,
  validateBody(userUpdateSchema),
  isUserNameUnique,
  updateUserController
);

userRouter.delete("/:userId", doesUserExist, deleteUserController);
