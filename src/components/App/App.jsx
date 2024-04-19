import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { nanoid } from "nanoid";
import {
  addContact,
  setContacts,
  deleteContact,
} from "../../redux/contactsSlice";
import { changeFilter  } from "../../redux/filtersSlice";

const initialContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const newContacts = [
  { id: "id-1", name: "pomidor", number: "459-12-56" },
  { id: "id-2", name: "ogorek", number: "443-89-12" },
  { id: "id-3", name: "czosnek", number: "645-17-79" },
  { id: "id-4", name: "arbuz", number: "227-91-26" },
];

const App = () => {
  const selectContacts  = useSelector((state) => state.contactsDetails.contacts.items);
  const selectNameFilter  = useSelector((state) => state.filtersDetails.filters.name);

  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(initialContacts));

    const stringifiedContacts = localStorage.getItem("contacts");
    if (!stringifiedContacts) return newContacts;
    const parsedContacts = JSON.parse(stringifiedContacts);

    dispatch(
      setContacts(parsedContacts.length > 0 ? parsedContacts : newContacts)
    );
  }, [dispatch]);



  const onAddNewContact = (contactData) => {
    const newContact = {
      ...contactData,
      id: nanoid(),
    };

    dispatch(addContact(newContact));
  };
  const handleDelete = (conactId) => {
    dispatch(deleteContact(conactId));
  };
  const handleFilter = (value) => {
    dispatch(changeFilter (value));
  };

  return (
    <div>
      <h1 className="appTitle">Phonebook</h1>
      <ContactForm onAddNewContact={onAddNewContact} />

      <SearchBox  onFilter={handleFilter} />
      {selectContacts && Array.isArray(selectContacts) && (
        <ContactList
          contacts={selectContacts}
          filter={selectNameFilter }
          onDeleteContact={handleDelete}
        />
      )}
    </div>
  );
};

export default App;
