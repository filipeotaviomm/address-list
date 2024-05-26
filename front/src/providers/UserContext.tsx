import { createContext, useEffect, useState } from "react";
import { IUserContext, IChildren, IUser } from "../types/types";
import { IRegisterFormValues } from "../components/forms/registerForm/registerFormSchema";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { ILoginFormValues } from "../components/forms/loginForm/loginFormSchema";
import { jwtDecode } from "jwt-decode";

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: IChildren) => {
  const [isUserLogged, setIsUserLogged] = useState<boolean>(false);
  const [user, setUser] = useState<IUser>({} as IUser);
  const [isUpdateUserModalOpen, setIsUpdateUserModalOpen] =
    useState<boolean>(false);
  const [confirmDeleteUser, setConfirmDeleteUser] = useState<boolean>(false);
  const navigate = useNavigate();

  const userRegister = async (
    formData: IRegisterFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    reset: () => void
  ) => {
    try {
      setLoading(true);
      await api.post("/user/register", formData);
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
      const response = await api.post("/login", formData);
      const { token } = response.data;
      localStorage.setItem("@address-list:token", token);
      setIsUserLogged(!isUserLogged);
      navigate("/dashboard");
      reset();
    } catch (error: any) {
      console.log(error);
      if (error.response?.status === 401) {
        console.log(error);
        toast.error("Username ou senha incorretos");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const getUserbyId = async () => {
      const token: string | null = localStorage.getItem("@address-list:token");
      if (token) {
        try {
          const decoded = jwtDecode(token);
          api.defaults.headers.common.Authorization = `Bearer ${token}`;
          const response = await api.get(`/user/${decoded.sub}`);
          setUser(response.data);
          navigate("/dashboard");
        } catch (error) {
          console.log(error);
        }
      }
    };
    getUserbyId();
  }, [isUserLogged]);

  const updateUser = async (
    formData: ILoginFormValues, //tem que mudar
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    const token: string | null = localStorage.getItem("@contact-liszt:token");
    if (token) {
      try {
        setLoading(true);
        const decoded = jwtDecode(token);
        api.defaults.headers.common.Authorization = `Bearer ${token}`;
        const response = await api.patch(`/user/${decoded.sub}`, formData);
        const newUser = { ...response.data, ...formData };
        setUser(newUser);
        setIsUpdateUserModalOpen(false);
        toast.success("Perfil atualizado com sucesso");
      } catch (error: any) {
        if (error.response?.status === 409) {
          toast.error("Username indisponível");
        }
      } finally {
        setLoading(false);
      }
    }
  };

  const deleteUser = async (
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    const token: string | null = localStorage.getItem("@address-list:token");

    if (token) {
      try {
        setLoading(true);
        const decoded = jwtDecode(token);
        api.defaults.headers.common.Authorization = `Bearer ${token}`;
        await api.delete(`/user/${decoded.sub}`);
        toast.success("Sua conta foi deletada");
        localStorage.removeItem("@address-list:token");
        navigate("/");
        setConfirmDeleteUser(false);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <UserContext.Provider
      value={{
        userRegister,
        userLogin,
        user,
        setUser,
        deleteUser,
        confirmDeleteUser,
        setConfirmDeleteUser,
        isUserLogged,
        updateUser,
        isUpdateUserModalOpen,
        setIsUpdateUserModalOpen,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
