import { useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import css from "./ContactsPage.module.css"

import {
  selectContactsDetailsIsError,
  selectContactsDetailsIsLoading,
} from "../../redux/contacts/selectors";
import Loader from "../../components/Loader/Loader";

const ContactsPage = () => {
  const isLoading = useSelector(selectContactsDetailsIsLoading);
  const isError = useSelector(selectContactsDetailsIsError);

  return (
    <div className={css.contactsGrig}>
      <div>
        {" "}
        <ContactForm />
        <SearchBox />

      </div>
      <div>
      {isError && <p>Error</p>}
        {isLoading && <Loader />}
        <ContactList />
      </div>
    </div>
  );
};

export default ContactsPage;
