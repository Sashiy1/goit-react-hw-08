import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setContacts } from "../../redux/contactsSlice";

const initialContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector((state) => state.contactsDetails.contacts.items);

  const filter = useSelector((state) => state.filtersDetails.filters.name);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(initialContacts));

    const stringifiedContacts = localStorage.getItem("contacts");
    if (!stringifiedContacts) return;
    const parsedContacts = JSON.parse(stringifiedContacts);

    dispatch(setContacts(parsedContacts));
  }, [dispatch]);

  const visibleContacts =
    contacts && Array.isArray(contacts)
      ? contacts.filter((contact) =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
      : [];

  return (
    <ul className={css.contactList}>
      {visibleContacts.map((contact) => (
        <Contact contact={contact} key={contact.id} />
      ))}
    </ul>
  );
};

export default ContactList;
