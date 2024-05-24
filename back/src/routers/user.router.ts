import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  getAllUsersController,
  getUserByIdController,
  updateUserController,
} from "../controllers/user.controller";
import { validateBody } from "../middlewares/globals.middleware";
import { userReqSchema, userUpdateSchema } from "../schemas/user.schema";
import {
  doesUserExist,
  doesUserHavePermission,
  isUserLogged,
  isUserNameUnique,
} from "../middlewares/users.middleware";

export const userRouter: Router = Router();

userRouter.post(
  "/register",
  validateBody(userReqSchema),
  isUserNameUnique,
  createUserController
);

userRouter.get("/all", isUserLogged, getAllUsersController);

userRouter.get(
  "/:userId",
  doesUserExist,
  isUserLogged,
  doesUserHavePermission,
  getUserByIdController
);

userRouter.patch(
  "/:userId",
  doesUserExist,
  isUserLogged,
  doesUserHavePermission,
  validateBody(userUpdateSchema),
  isUserNameUnique,
  updateUserController
);

userRouter.delete(
  "/:userId",
  doesUserExist,
  isUserLogged,
  doesUserHavePermission,
  deleteUserController
);
