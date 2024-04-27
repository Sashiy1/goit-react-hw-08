import clsx from "clsx";
import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUserName } from "../../redux/auth/selectors";

const Navigation = () => {
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
          <button>Log Out</button>
        </>
      )}
    </nav>
  );
};

export default Navigation;
