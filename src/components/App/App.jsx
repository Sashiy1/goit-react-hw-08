import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import { useEffect } from "react";

import { apiGetContacts } from "../../redux/contacts/operations";
import { selectContactsDetailsIsError, selectContactsDetailsIsLoading } from "../../redux/contacts/selectors";


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiGetContacts());
  }, [dispatch]);

  const isLoading = useSelector(selectContactsDetailsIsLoading);
  const isError = useSelector(selectContactsDetailsIsError);
  return (
    <div>
     
  
      <ContactForm />
      <SearchBox />
      {isError && <p>Oooops something went wrong</p>}
      {isLoading && <p>page is loading</p>}
      <ContactList />
    </div>
  );
};

export default App;
