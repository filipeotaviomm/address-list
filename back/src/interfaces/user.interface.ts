import { z } from "zod";
import {
  allUsersRespSchema,
  loginSchema,
  userReqSchema,
  userRespSchema,
} from "../schemas/user.schema";

type IUserReq = z.infer<typeof userReqSchema>;

type IUserResp = z.infer<typeof userRespSchema>;

type IAllUsersResp = z.infer<typeof allUsersRespSchema>;

interface IUserUpdate {
  name?: string;
  userName?: string;
  password?: string;
}

type ILoginReq = z.infer<typeof loginSchema>;

type ILoginResp = { id: string; userName: string; token: string };

export {
  IUserReq,
  IUserResp,
  IAllUsersResp,
  IUserUpdate,
  ILoginReq,
  ILoginResp,
};
