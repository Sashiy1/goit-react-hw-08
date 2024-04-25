import { useDispatch } from "react-redux";

import { Suspense, lazy, useEffect } from "react";

import { apiGetContacts } from "../../redux/contacts/operations";

import Navigation from "../Navigation/Navigation";





import { Route, Routes } from "react-router-dom";
import Loader from "../Loader/Loader";



const NotFound = lazy(() => import("../../pages/NotFound/NotFound"));
const RegisterPage = lazy(() =>
  import("../../pages/RegisterPage/RegisterPage")
);
const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("../../pages/ContactsPage/ContactsPage"));


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiGetContacts());
  }, [dispatch]);

  return (
    <div>
      <Navigation />
      <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Suspense>

    </div>
  );
};

export default App;
