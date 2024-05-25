import { Router } from "express";
import { loginRouter } from "./login.router";
import { userRouter } from "./users.router";
import { addressRouter } from "./addresses.router";

export const router: Router = Router();

router.use("/login", loginRouter);
router.use("/user", userRouter);
router.use("/address", addressRouter);
