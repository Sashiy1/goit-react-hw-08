import clsx from "clsx";
import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUserName } from "../../redux/auth/selectors";
import { apiLogoutUser } from "../../redux/auth/operations";

const Navigation = () => {
  const dispatch = useDispatch()
  const onLogout = () => {
    dispatch(apiLogoutUser())
  }
  const getActiveStyles = ({ isActive }) =>
    clsx(css.navLink, {
      [css.active]: isActive,
    });

  const isLoggedIn = useSelector(selectIsLoggedIn)
  const userName = useSelector(selectUserName)
 

  return (
    <nav className={css.nav}>
      {!isLoggedIn ? (
        <>
          {" "}
          <NavLink to="/" className={getActiveStyles}>
            Home
          </NavLink>
          <NavLink to="/login" className={getActiveStyles}>
            Login
          </NavLink>
          <NavLink to="/register" className={getActiveStyles}>
            Register
          </NavLink>
        </>
      ) : (
        <>
          {" "}
          <NavLink to="/" className={getActiveStyles}>
            Home
          </NavLink>
          <NavLink to="/contacts" className={getActiveStyles}>
            Contacts
          </NavLink>
          <span>Welcome {userName}</span>
          <button type="button" onClick={onLogout}>Log Out</button>
        </>
      )}
    </nav>
  );
};

export default Navigation;
