import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectFiltredContacts } from "../../redux/filtersSlice";


const ContactList = () => {


  const visibleContacts = useSelector(selectFiltredContacts)
  return (
    <>
      <ul className={css.contactList}>
        {visibleContacts.map((contact) => (
          <Contact contact={contact} key={contact.id} />
        ))}
      </ul>
    </>
  );
};

export default ContactList;
