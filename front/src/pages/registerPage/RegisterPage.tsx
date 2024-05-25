import { Link } from "react-router-dom";
import { RegisterForm } from "../../components/forms/registerForm/RegisterForm";

const RegisterPage = () => {
  return (
    <main>
      <div>
        <h1>Cadastre-se</h1>
        <RegisterForm />
        <div>
          <p>Já possui uma conta? Faça</p>
          <Link to="/">login!</Link>
        </div>
      </div>
    </main>
  );
};

export default RegisterPage;
