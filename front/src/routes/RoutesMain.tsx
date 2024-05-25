import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/loginPage/LoginPage";
import RegisterPage from "../pages/registerPage/RegisterPage";
import { PrivateRoutes } from "./privateRoutes/PrivateRoutes";
import { DashboardPage } from "../pages/dashboardPage/dashboardPage";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route element={<PrivateRoutes />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
};

export { RoutesMain };
