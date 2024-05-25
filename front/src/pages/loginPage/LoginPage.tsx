import { LoginForm } from "../../components/forms/loginForm/LoginForm";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  return (
    <div>
      <div>
        <main>
          <h1>Login</h1>
          <LoginForm />
          <div>
            <p>Ainda não possui uma conta?</p>
            <Link to="/register">Cadastre-se</Link>
          </div>
        </main>
      </div>
    </div>
  );
};
