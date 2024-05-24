import { Router } from "express";
import { loginRouter } from "./login.router";
import { userRouter } from "./user.router";

export const router: Router = Router();

router.use("/login", loginRouter);
router.use("/user", userRouter);
