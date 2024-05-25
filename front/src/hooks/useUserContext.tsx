import { useContext } from "react";
import { UserContext } from "../providers/UserContext";

export const useUserContext = () => {
  const authContext = useContext(UserContext);

  return authContext;
};
