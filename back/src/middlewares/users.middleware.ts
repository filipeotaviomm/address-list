import { User } from "@prisma/client";
import { prisma } from "../app";
import { verify } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors";

export const isUserNameUnique = async (
  req: Request,
  _res: Response,
  next: NextFunction
): Promise<void> => {
  if (!req.body.userName) return next();

  const userName: User | null = await prisma.user.findUnique({
    where: { userName: req.body.userName },
  });

  if (userName) {
    throw new AppError("This username already exists", 409);
  }

  return next();
};

export const doesUserExist = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const user: User | null = await prisma.user.findUnique({
    where: { id: req.params.userId },
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  res.locals.user = user;

  return next();
};

export const isUserLogged = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const authorization: string | undefined = req.headers.authorization;

  if (!authorization) {
    throw new AppError("Missing bearer token", 401);
  }

  const token = authorization.split(" ")[1];

  const decoded = verify(token, process.env.SECRET_KEY!);

  res.locals.decoded = decoded;

  return next();
};

export const doesUserHavePermission = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const userLoggedId = res.locals.decoded.userId;
  const userIdUrl = req.params.userId;

  if (userLoggedId !== userIdUrl) {
    throw new AppError("You do not have permission", 403);
  }

  return next();
};
