import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import { RegisterForm } from "../../components/forms/registerForm/RegisterForm";

const RegisterPage = () => {
  return (
    <main className={styles.register_main}>
      <div>
        <h1 className={styles.title}>Login</h1>
        <RegisterForm />
        <div className={styles.div_register}>
          <p>Já possui uma conta?</p>
          <Link to="/">Login</Link>
        </div>
      </div>
    </main>
  );
};

export default RegisterPage;
