import { Input } from "../input/Input";
import { InputPassword } from "../inputPassword/InputPassword";
import { zodResolver } from "@hookform/resolvers/zod";
import { ILoginFormValues, loginFormSchema } from "./loginFormSchema";
import { ImSpinner3 } from "react-icons/im";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useUserContext } from "../../../hooks/useUserContext";
import styles from "./style.module.scss";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const { userLogin } = useUserContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ILoginFormValues>({ resolver: zodResolver(loginFormSchema) });

  const login = (formData: ILoginFormValues) => {
    userLogin(formData, setLoading, reset);
  };

  return (
    <form className={styles.login_form} onSubmit={handleSubmit(login)}>
      <Input
        label="Username"
        id="userName"
        placeholder="Digite seu username"
        {...register("userName")}
        error={errors.userName}
        disabled={loading}
      />
      <InputPassword
        label="Senha"
        id="password"
        placeholder="Digite sua senha"
        {...register("password")}
        error={errors.password}
        disabled={loading}
      />
      <button className="p2 lg" type="submit" disabled={loading}>
        {loading ? <ImSpinner3 /> : "Entrar"}
      </button>
    </form>
  );
};

export { LoginForm };
