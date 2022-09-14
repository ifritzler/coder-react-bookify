import { Outlet } from "react-router-dom";

const PublicRoutes = ({ children }) => {
  return (
    <>
      <Outlet />
    </>
  );
};
export default PublicRoutes;
