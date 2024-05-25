import { createContext } from "react";
import { IUserContext, IChildren } from "../types/types";
import { IRegisterFormValues } from "../components/forms/registerForm/registerFormSchema";
import { backApi } from "../services/backApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { ILoginFormValues } from "../components/forms/loginForm/loginFormSchema";

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: IChildren) => {
  const navigate = useNavigate();

  const userRegister = async (
    formData: IRegisterFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    reset: () => void
  ) => {
    try {
      setLoading(true);
      await backApi.post("/user/register", formData);
      toast.success("Conta criada com sucesso");
      navigate("/");
      reset();
    } catch (error: any) {
      if (error.response?.status === 409) {
        console.log(error);
        toast.error("Username já cadastrado");
      }
    } finally {
      setLoading(false);
    }
  };

  const userLogin = async (
    formData: ILoginFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    reset: () => void
  ) => {
    try {
      setLoading(true);
      const response = await backApi.post("/login", formData);
      const { token } = response.data;
      localStorage.setItem("@address-list:token", token);
      navigate("/dashboard");
      reset();
    } catch (error: any) {
      console.log(error);
      if (error.response?.status === 401) {
        toast.error("Username ou senha incorretos");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider value={{ userRegister, userLogin }}>
      {children}
    </UserContext.Provider>
  );
};
