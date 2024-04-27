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
      <h1>contatcs</h1>
      <ContactForm />
      <SearchBox />
      {isError && <p>Oooops something went wrong</p>}
      {isLoading && <Loader />}
      <ContactList />
    </div>
  );
};

export default ContactsPage;
