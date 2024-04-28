import { useSelector, useDispatch } from "react-redux";
import { selectUserName } from "../../redux/auth/selectors";
import { apiLogoutUser } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  return (
    <div className={css.userMenu}>
      <p className={css.userMenuText}>Welcome, {userName} </p>
      <button
        className={css.logOutBtn}
        type="button"
        onClick={() => dispatch(apiLogoutUser())}
      >
        Logout
      </button>
    </div>
  );
}