import { z } from "zod";

export const CreateAddressFormSchema = z.object({
  zipCode: z
    .string()
    .min(8, "Esse campo deve conter 8 números")
    .max(8, "Esse campo deve conter apenas 8 números"),
  street: z
    .string()
    .min(1, "Campo obrigatório")
    .max(50, "Limite máximo de caracteres: 50"),
  number: z.string().min(1, "Campo obrigatório"),
  neighborhood: z
    .string()
    .min(1, "Campo obrigatório")
    .max(50, "Limite máximo de caracteres: 50"),
  city: z
    .string()
    .min(1, "Campo obrigatório")
    .max(50, "Limite máximo de caracteres: 50"),
  state: z
    .string()
    .min(1, "Campo obrigatório")
    .max(2, "Limite máximo de caracteres: 2"),
  complement: z.string().nullish(),
});

export type ICreateAddressFormValues = z.infer<typeof CreateAddressFormSchema>;
