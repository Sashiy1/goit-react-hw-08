import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import { nanoid } from "nanoid";

const initialContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const stringifiedContacts = localStorage.getItem("contacts");
    if (!stringifiedContacts) return initialContacts;
    const parsedContacts = JSON.parse(stringifiedContacts)
    return parsedContacts
  })




  const [filter, setFilter] = useState("");

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );

  const handleDelete = (conactId) => {
    setContacts((prevState) => prevState.filter((contact) => contact.id !== conactId));
  }; 

  const onAddNewContact = (contactData) => {
    const finalContacts = {
      ...contactData,
      id: nanoid(),
    };

    setContacts((prevState) => [...prevState, finalContacts]); 
  };


 useEffect(() => {
  localStorage.setItem('contacts', JSON.stringify(contacts))
 }, [contacts])

  return (
    <div>
      <h1 className="appTitle">Phonebook</h1>
      <ContactForm onAddNewContact={onAddNewContact}/>
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleContacts} onDeleteContact={handleDelete} />
    </div>
  );
};

export default App;
