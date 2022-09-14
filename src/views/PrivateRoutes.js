import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { LOGIN } from "../routes/paths";

const PrivateRoutes = () => {
  const { isAuthenticated } = useAuth0();

  return <>{isAuthenticated ? <Outlet /> : <Navigate to={LOGIN}></Navigate>}</>;
};
export default PrivateRoutes;
