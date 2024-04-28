import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useDispatch, useSelector } from "react-redux";
import { selectFiltredContacts } from "../../redux/contacts/selectors";
import { useEffect } from "react";
import { apiGetContacts } from "../../redux/contacts/operations";



const ContactList = () => {
const dispatch = useDispatch()

  useEffect(() => {
    dispatch(apiGetContacts());
  
  }, [dispatch]);

  const visibleContacts = useSelector(selectFiltredContacts)
  return (
    <>
      <ul className={css.contactList}>
      {visibleContacts.length === 0 && <p>There are no contacts!</p>}
        {visibleContacts.map((contact) => (
          <Contact contact={contact} key={contact.id} />
        ))}
      </ul>
    </>
  );
};

export default ContactList;
