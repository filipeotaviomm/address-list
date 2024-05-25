import { ToastContainer } from "react-toastify";
import { AddressProvider } from "./providers/AddressContext";
import { UserProvider } from "./providers/UserContext";
import { RoutesMain } from "./routes/RoutesMain";

function App() {
  return (
    <>
      <UserProvider>
        <AddressProvider>
          <RoutesMain />
        </AddressProvider>
      </UserProvider>
      <ToastContainer autoClose={2 * 1000} position="bottom-right" />
    </>
  );
}

export default App;
