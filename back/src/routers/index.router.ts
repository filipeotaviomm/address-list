import { Router } from "express";
import { loginRouter } from "./login.router";

export const router: Router = Router();

router.use("/login", loginRouter);
