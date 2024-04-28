import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import clsx from "clsx";

export default function AuthNav() {
  const getActiveStyles = ({ isActive }) =>
    clsx(css.navLink, {
      [css.active]: isActive,
    });
  return (
    <nav className={css.nav}>
      <NavLink to="/login" className={getActiveStyles}>
        Log In
      </NavLink>
      <NavLink to="/register" className={getActiveStyles}>
        Register
      </NavLink>
    </nav>
  );
}
