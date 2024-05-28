import { z } from "zod";

export const registerFormSchema = z
  .object({
    name: z
      .string()
      .min(1, "Campo obrigatório")
      .max(50, "Limite máximo de caracteres: 50"),
    userName: z
      .string()
      .min(1, "Campo obrigatório")
      .max(50, "Limite máximo de caracteres: 50"),
    password: z
      .string()
      .min(1, "A senha é obrigatória")
      .min(8, "É necessário pelo menos oito caracteres")
      .regex(/[A-Z]+/, "É necessário conter pelo menos uma letra maiúscula")
      .regex(/[a-z]+/, "É necessário conter pelo menos uma letra minúsucula")
      .regex(/[0-9]+/, "É necessário pelo menos um número")
      .regex(
        /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/]/,
        "É necessário ter pelo menos um caracter especial"
      ),
    confirmPassword: z.string().min(1, "É obrigatório confirmar a senha"),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "As senhas não correspondem",
    path: ["confirmPassword"],
  });

export type IRegisterFormValues = z.infer<typeof registerFormSchema>;
