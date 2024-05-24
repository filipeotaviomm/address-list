import { z } from "zod";

const addressSchema = z.object({
  id: z.string().min(1),
  zipCode: z.string().min(8).max(8),
  street: z.string().min(1).max(50),
  number: z.number().nonnegative().min(1),
  complement: z.string().nullish(),
  neighborhood: z.string().min(1).max(50),
  city: z.string().min(1).max(50),
  state: z.string().min(2).max(2),
});

const addressReqSchema = addressSchema.omit({
  id: true,
});

const allAddressRespSchema = addressSchema.array();

const addressUpdateSchema = addressSchema.omit({ id: true }).partial();

export {
  addressSchema,
  addressReqSchema,
  allAddressRespSchema,
  addressUpdateSchema,
};
