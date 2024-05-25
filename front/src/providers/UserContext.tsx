import { createContext } from "react";
import { IUserContext, IChildren } from "../types/types";

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: IChildren) => {
  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};
