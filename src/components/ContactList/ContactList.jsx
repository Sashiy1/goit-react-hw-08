import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { apiGetContacts } from "../../redux/contactsOps";



const ContactList = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(apiGetContacts)

  }, [dispatch])

  

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
