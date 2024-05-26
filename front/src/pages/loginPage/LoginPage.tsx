import { LoginForm } from "../../components/forms/loginForm/LoginForm";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <main>
      <div>
        <div>
          <h1>Login</h1>
          <LoginForm />
          <div>
            <p>Ainda não possui uma conta?</p>
            <Link to="/register">Cadastre-se</Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
