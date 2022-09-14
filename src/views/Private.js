import { useAuth0 } from "@auth0/auth0-react";

const Private = () => {
  const { logout } = useAuth0();
  return (
    <>
      <div>Vista de perfil</div>
      <button
        onClick={() => {
          logout({ returnTo: window.location.origin });
        }}
      >
        LOGOUT
      </button>
    </>
  );
};
export default Private;
