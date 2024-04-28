import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import css from "./Navigation.module.css";
import clsx from "clsx";
import { selectIsLoggedIn } from "../../redux/auth/selectors";


export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const getActiveStyles = ({ isActive }) =>
  clsx(css.navLink, {
    [css.active]: isActive,
  });

  return (
    <nav className={css.nav}>
      <NavLink  className={getActiveStyles} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink  className={getActiveStyles} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
}