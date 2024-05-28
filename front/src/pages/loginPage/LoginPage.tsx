import { LoginForm } from "../../components/forms/loginForm/LoginForm";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";

const LoginPage = () => {
  return (
    <main className={styles.login_main}>
      <div>
        <h1 className={styles.title}>Login</h1>
        <LoginForm />
        <div className={styles.div_register}>
          <p>Ainda não possui uma conta?</p>
          <Link to="/register">Cadastre-se</Link>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
