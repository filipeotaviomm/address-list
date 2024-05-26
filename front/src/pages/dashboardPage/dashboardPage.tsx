import AddressesList from "../../components/addressesList/AddressesList";
import Header from "../../components/header/Header";
import CreateAddressModal from "../../components/modals/createAddressModal/CreateAddressModal";
import { useAddressContext } from "../../hooks/useAddressContext";
import styles from "./style.module.scss";

const DashboardPage = () => {
  const { createAddressModalIsVisible } = useAddressContext();

  return (
    <main>
      <div>
        <Header />
      </div>
      <section className={`containerDashboard ${styles.address_section}`}>
        <AddressesList />
      </section>
      {createAddressModalIsVisible && <CreateAddressModal />}
    </main>
  );
};

export default DashboardPage;
