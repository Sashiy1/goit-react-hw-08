import { useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";

import {
  selectContactsDetailsIsError,
  selectContactsDetailsIsLoading,
} from "../../redux/contacts/selectors";
import Loader from "../../components/Loader/Loader";


const ContactsPage = () => {
  const isLoading = useSelector(selectContactsDetailsIsLoading);
  const isError = useSelector(selectContactsDetailsIsError);

  return (
    <div>
      
      <ContactForm />
      <SearchBox />
      {isError && <p>There are no contacts!</p>}
      {isLoading && <Loader />}
      <ContactList />
    </div>
  );
};

export default ContactsPage;
