import { hash } from "bcryptjs";
import { prisma } from "../app";
import { User } from "@prisma/client";
import {
  IAllUsersResp,
  IUserReq,
  IUserResp,
  IUserUpdate,
} from "../interfaces/user.interface";
import { allUsersRespSchema, userRespSchema } from "../schemas/user.schema";

const createUserService = async (body: IUserReq): Promise<IUserResp> => {
  const hashedPassword = await hash(body.password, 10);

  const user = {
    ...body,
    password: hashedPassword,
  };

  const newUser: User = await prisma.user.create({ data: user });

  return userRespSchema.parse(newUser);
};

const getAllUsersService = async (): Promise<IAllUsersResp> => {
  const allUsers: User[] = await prisma.user.findMany();

  return allUsersRespSchema.parse(allUsers);
};

const getUserbyIdService = async (userId: string): Promise<IUserResp> => {
  const user: User | null = await prisma.user.findUnique({
    where: { id: userId },
  });

  return userRespSchema.parse(user);
};

const updateUserService = async (
  userId: string,
  body: IUserUpdate
): Promise<IUserResp> => {
  const { password } = body;
  if (password) {
    const hashedPassword = await hash(password, 10);
    body = { ...body, password: hashedPassword };
  }

  const user = await prisma.user.update({
    where: { id: userId },
    data: body,
  });

  return userRespSchema.parse(user);
};

const deleteUserService = async (userId: string): Promise<void> => {
  await prisma.user.delete({ where: { id: userId } });
};

export {
  createUserService,
  getAllUsersService,
  getUserbyIdService,
  updateUserService,
  deleteUserService,
};
