import { useState } from "react";
import { IRegisterFormValues, registerFormSchema } from "./registerFormSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../input/Input";
import { InputPassword } from "../inputPassword/InputPassword";
import { ImSpinner3 } from "react-icons/im";
import { useUserContext } from "../../../hooks/useUserContext";

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const { userRegister } = useUserContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IRegisterFormValues>({
    resolver: zodResolver(registerFormSchema),
  });
  const registration = (formData: IRegisterFormValues) => {
    userRegister(formData, setLoading, reset);
  };

  return (
    <form onSubmit={handleSubmit(registration)}>
      <Input
        label="Nome"
        id="name"
        placeholder="Digite seu nome"
        {...register("name")}
        error={errors.name}
        disabled={loading}
      />
      <Input
        label="Username"
        id="userName"
        placeholder="Digite seu Username"
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
      <InputPassword
        label="Confirmar Senha"
        id="confirmPassword"
        placeholder="Digite novamente sua senha"
        {...register("confirmPassword")}
        error={errors.confirmPassword}
        disabled={loading}
      />
      <button type="submit" disabled={loading}>
        {loading ? <ImSpinner3 /> : "Cadastrar"}
      </button>
    </form>
  );
};

export { RegisterForm };
