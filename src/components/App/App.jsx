import Navigation from "../Navigation/Navigation";
import Loader from "../Loader/Loader";


import { useDispatch } from "react-redux";
import { Suspense, lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { apiRefreshUser } from "../../redux/auth/operations";
import { RestrictedRoute } from "../RestrictedRoute/RestrictedRoute";
import { PrivateRoute } from "../PrivateRoute/PrivateRoute";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const RegisterPage = lazy(() =>
  import("../../pages/RegisterPage/RegisterPage")
);
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() =>
  import("../../pages/ContactsPage/ContactsPage")
);
const NotFound = lazy(() => import("../../pages/NotFound/NotFound"));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    
    dispatch(apiRefreshUser());
  }, [dispatch]);

  return (
    <div>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute>
                <RegisterPage />
              </RestrictedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute>
                <LoginPage />
              </RestrictedRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
