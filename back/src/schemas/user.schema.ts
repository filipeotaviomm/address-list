import { z } from "zod";

const userSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1).max(50),
  userName: z.string().min(1).max(50),
  password: z.string().min(1).max(255),
});

const userReqSchema = userSchema.omit({
  id: true,
});

const userRespSchema = userSchema.omit({ password: true });

const allUsersRespSchema = userSchema.omit({ password: true }).array();

const userUpdateSchema = userReqSchema.partial();

const loginSchema = userSchema.pick({ userName: true, password: true });

export {
  userSchema,
  userReqSchema,
  userRespSchema,
  allUsersRespSchema,
  userUpdateSchema,
  loginSchema,
};
