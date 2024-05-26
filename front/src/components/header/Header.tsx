import { useUserContext } from "../../hooks/useUserContext";
import styles from "./style.module.scss";
import { TiArrowSortedDown } from "react-icons/ti";

const Header = () => {
  const { user } = useUserContext();
  return (
    <header>
      <div className={styles.div_header}>
        <div>
          <h1>Olá, {user.name}!!</h1>
        </div>
        <button>
          <p className="p2 lg">Menu</p>
          <TiArrowSortedDown size={20} />
        </button>
      </div>
    </header>
  );
};

export default Header;
