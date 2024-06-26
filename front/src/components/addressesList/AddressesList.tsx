import AddressesCard from "./addressesCard/AddressesCard";
import { IAddress } from "../../types/types";
import { useAddressContext } from "../../hooks/useAddressContext";
import styles from "./style.module.scss";
import { CiCirclePlus } from "react-icons/ci";

const AddressesList = () => {
  const { addressesList, setCreateAddressModalIsVisible } = useAddressContext();
  return (
    <div className={styles.cards_list}>
      <div className={styles.title_list}>
        <h1>Lista de Endereços:</h1>
      </div>
      <div className={styles.plus_button}>
        <button onClick={() => setCreateAddressModalIsVisible(true)}>
          <p className="p2 lg">Criar Endereço</p>
          <CiCirclePlus size={30} style={{ color: "#291e82" }} />
        </button>
      </div>
      {addressesList.length > 0 ? (
        <ul>
          {addressesList.map((address: IAddress) => (
            <AddressesCard key={address.id} address={address} />
          ))}
        </ul>
      ) : (
        <div className={styles.div_none_address}>
          <p>Você ainda não tem endereço cadastrado</p>
        </div>
      )}
    </div>
  );
};

export default AddressesList;
