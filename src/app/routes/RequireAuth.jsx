import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useLoading from "../hooks/useLoading";

const RequireAuth = ({ allowedRole }) => {
  const { auth } = useAuth();
  const { isLoading } = useLoading();
  const location = useLocation();

  if (!isLoading) {
    return allowedRole == auth?.role ? (
      <Outlet />
    ) : auth?.user ? (
      <Navigate to="/unauthorized" state={{ from: location }} replace />
    ) : (
      <Navigate to="/login" state={{ from: location }} replace />
    );
  }
};

export default RequireAuth;
