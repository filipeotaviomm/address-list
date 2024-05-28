import "./styles/index.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AddressProvider } from "./providers/AddressContext";
import { UserProvider } from "./providers/UserContext";
import { RoutesMain } from "./routes";

function App() {
  return (
    <>
      <UserProvider>
        <AddressProvider>
          <RoutesMain />
        </AddressProvider>
      </UserProvider>
      <ToastContainer autoClose={2 * 1000} position="top-right" />
    </>
  );
}

export default App;
