import AddressesList from "../../components/addressesList/AddressesList";
import Header from "../../components/header/Header";
import ConfirmDeleteAddressModal from "../../components/modals/confirmDeleteAddressModal/ConfirmDeleteAddressModel";
import CreateAddressModal from "../../components/modals/createAddressModal/CreateAddressModal";
import UpdateAddressModal from "../../components/modals/updateAddressModal/UpdateAddressModal";
import { useAddressContext } from "../../hooks/useAddressContext";
import styles from "./style.module.scss";

const DashboardPage = () => {
  const { createAddressModalIsVisible, editingAddress, confirmDeleteAddress } =
    useAddressContext();

  return (
    <main>
      <div>
        <Header />
      </div>
      <section className={`containerDashboard ${styles.address_section}`}>
        <AddressesList />
      </section>
      {createAddressModalIsVisible && <CreateAddressModal />}
      {Object.keys(editingAddress).length > 0 && <UpdateAddressModal />}
      {Object.keys(confirmDeleteAddress).length > 0 && (
        <ConfirmDeleteAddressModal />
      )}
    </main>
  );
};

export default DashboardPage;
