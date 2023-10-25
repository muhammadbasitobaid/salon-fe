import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

interface RouteGuardProps {
  children: ReactNode;
}

const RouteGuard = ({ children }: RouteGuardProps) => {
  const isLoggedIn: boolean = localStorage.getItem("logged_user") !== null;
  const location = useLocation();
  console.log(isLoggedIn);
  return isLoggedIn ? (
    <>{children}</>
  ) : (
    <Navigate
      replace={true}
      to="/login"
      state={{ from: `${location.pathname}${location.search}` }}
    />
  );
};

export default RouteGuard;
