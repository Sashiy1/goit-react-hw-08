import css from "./ContactList.module.css"
import Contact from "../Contact/Contact";


const ContactList = ({filter, contacts, onDeleteContact}) => {



  const visibleContacts = contacts.filter((contact) =>
  contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
);


   
    return (
        <ul className={css.contactList}>
          {visibleContacts.map((contact) => (
             <Contact contact={contact} onDeleteContact={onDeleteContact} key={contact.id}/>   
          ))}
        </ul>
      );

};





export default ContactList;


