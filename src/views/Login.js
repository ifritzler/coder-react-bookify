import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";

const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  if (isAuthenticated) return <Navigate to="/"></Navigate>;
  loginWithRedirect();
  return null;
};
export default Login;
