import clsx from "clsx";
import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const getActiveStyles = ({ isActive }) =>
    clsx(css.navLink, {
      [css.active]: isActive,
    });

  return (
    <>
     
      <nav className={css.nav}>
        <NavLink to="/" className={getActiveStyles}>
        HomePage
        </NavLink >
        <NavLink to="/register" className={getActiveStyles}>
          Register
        </NavLink>
        <NavLink to="/login" className={getActiveStyles}>
          Login
        </NavLink>
        <NavLink to="/contacts" className={getActiveStyles}>
          Contacts
        </NavLink>
      </nav>
 
    </>
  );
};

export default Navigation;
