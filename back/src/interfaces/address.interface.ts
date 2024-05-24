import { z } from "zod";
import {
  addressReqSchema,
  addressSchema,
  allAddressRespSchema,
} from "../schemas/address.schema";

type IAddressReq = z.infer<typeof addressReqSchema>;

type IAddressResp = z.infer<typeof addressSchema>;

type IAllAddressesResp = z.infer<typeof allAddressRespSchema>;

interface IAddressUpdate {
  zipCode?: string;
  street?: string;
  number?: number;
  complement?: string;
  neighborhood?: string;
  city?: string;
  state?: string;
}

export { IAddressReq, IAddressResp, IAllAddressesResp, IAddressUpdate };
