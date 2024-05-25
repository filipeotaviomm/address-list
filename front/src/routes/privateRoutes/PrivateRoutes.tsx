import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoutes = () => {
  const token: string | null = localStorage.getItem("@address-list");

  return token ? <Outlet /> : <Navigate to="/" />;
};
