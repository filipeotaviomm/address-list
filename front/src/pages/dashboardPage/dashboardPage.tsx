import AddressesList from "../../components/addressesList/AddressesList";
import Header from "../../components/header/Header";
import styles from "./style.module.scss";

const DashboardPage = () => {
  return (
    <main>
      <div>
        <Header />
      </div>
      <section className={`containerDashboard ${styles.address_section}`}>
        <AddressesList />
      </section>
    </main>
  );
};

export default DashboardPage;
