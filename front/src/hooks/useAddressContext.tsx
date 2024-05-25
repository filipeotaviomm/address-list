import { useContext } from "react";
import { AddressContext } from "../providers/AddressContext";

export const useAddressContext = () => {
  const authContext = useContext(AddressContext);

  return authContext;
};
