import { useSelector, useDispatch } from "react-redux";
import { selectUserName } from "../../redux/auth/selectors";
import { apiLogoutUser } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUserName);
  return (
    <div className={css.div}>
      <p className={css.text}>Welcome, {user.name} </p>
      <button
        className={css.btn}
        type="button"
        onClick={() => dispatch(apiLogoutUser())}
      >
        Logout
      </button>
    </div>
  );
}