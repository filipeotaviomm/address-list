import "dotenv/config";
import { compare } from "bcryptjs";
import { AppError } from "../errors";
import { sign } from "jsonwebtoken";
import { ILoginReq, ILoginResp } from "../interfaces/user.interface";
import { prisma } from "../app";
import { User } from "@prisma/client";

export const loginService = async (body: ILoginReq): Promise<ILoginResp> => {
  const user: User | null = await prisma.user.findUnique({
    where: { userName: body.userName },
  });

  if (!user) {
    throw new AppError("Invalid credentials", 401);
  }

  const verifyPass: boolean = await compare(body.password, user.password);

  if (!verifyPass) {
    throw new AppError("Invalid credentials", 401);
  }

  const token: string = sign(
    { name: user.name, userName: user.userName },
    process.env.SECRET_KEY!,
    { subject: user.id, expiresIn: process.env.EXPIRES_IN }
  );

  return { token };
};
