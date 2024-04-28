import { useSelector } from "react-redux";
import Navigation from "../Navigation/Navigation";
import { selectIsLoggedIn, selectIsRefreshing } from "../../redux/auth/selectors";
import AuthNav from "../Navigation/AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";


const AppBar = () => {
    
    const isRefreshing = useSelector(selectIsRefreshing);
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <header >
          <Navigation />
          {!isRefreshing && <div>{isLoggedIn ? <UserMenu /> : <AuthNav />}</div>}
        </header>
      );
}

export default AppBar
