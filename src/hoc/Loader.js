import { useAuth0 } from "@auth0/auth0-react";

const Auth0Loader = ({ children }) => {
  const { isLoading } = useAuth0();

  return <>{isLoading ? <div>Loading...</div> : children}</>;
};
export default Auth0Loader;
