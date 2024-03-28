import css from "./ContactList.module.css"
import Contact from "../Contact/Contact";


const ContactList = ({contacts, onDeleteContact}) => {
    
    return (
        <ul className={css.contactList}>
          {contacts.map((contact) => (
             <Contact contact={contact} onDeleteContact={onDeleteContact} key={contact.id}/>   
          ))}
        </ul>
      );

};





export default ContactList;


