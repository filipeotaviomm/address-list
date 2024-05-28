import { useUserContext } from "../../hooks/useUserContext";
import MenuHeader from "./menuHeader/MenuHeader";
import styles from "./style.module.scss";
import { TiArrowSortedDown } from "react-icons/ti";

const Header = () => {
  const { user, setIsMenuOpen, isMenuOpen } = useUserContext();
  return (
    <header>
      <div className={styles.div_header}>
        <div>
          <h1>Olá, {user.name}!!</h1>
        </div>
        <button onClick={() => setIsMenuOpen(true)}>
          <p className="title">Menu</p>
          <TiArrowSortedDown size={20} />
        </button>
        {isMenuOpen && <MenuHeader />}
      </div>
    </header>
  );
};

export default Header;
