
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export const PrivateRoute = ({ children, redirectTo = "/login" }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn)
  return !isLoggedIn ? <Navigate to={redirectTo} replace /> : children;
};

