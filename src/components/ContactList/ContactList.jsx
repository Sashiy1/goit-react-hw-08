import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";

const ContactList = () => {
  const contacts = useSelector((state) => state.contactsDetails.contacts.items);

  const filter = useSelector((state) => state.filtersDetails.filters.name);

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <ul className={css.contactList}>
      {visibleContacts.map((contact) => (
        <Contact contact={contact} key={contact.id} />
      ))}
    </ul>
  );
};

export default ContactList;
