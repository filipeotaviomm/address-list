import { z } from "zod";

export const loginFormSchema = z.object({
  userName: z.string().min(1, "O campo username é obrigatório"),
  password: z.string().min(1, "A senha é obrigatória"),
});

export type ILoginFormValues = z.infer<typeof loginFormSchema>;
