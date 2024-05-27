import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../../hooks/useUserContext";
import { IUser } from "../../../types/types";
import { useAddressContext } from "../../../hooks/useAddressContext";
import { useEffect, useRef } from "react";
import styles from "./style.module.scss";

const MenuHeader = () => {
  const { setIsMenuOpen, setUser } = useUserContext();
  const { setAddressesList } = useAddressContext();

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("@address-list:token");
    navigate("/");
    setIsMenuOpen(false);
    setUser({} as IUser);
    setAddressesList([]);
  };

  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutClick = (e: MouseEvent) => {
      if (!boxRef.current?.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    // const handleInClick = (e: MouseEvent) => {
    //   setTimeout(() => {
    //     if (boxRef.current?.contains(e.target as Node)) {
    //       setIsMenuOpen(false);
    //     }
    //   }, 100);
    // };

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("mousedown", handleOutClick);
    // window.addEventListener("mousedown", handleInClick);
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("mousedown", handleOutClick);
      // window.removeEventListener("mousedown", handleInClick);
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div className={styles.div_menu} ref={boxRef}>
      <button>Atualizar seus dados</button>
      <button>Arquivo CSV</button>
      <button>Deletar sua conta</button>
      <button onClick={logout}>Log out</button>
    </div>
  );
};

export default MenuHeader;
