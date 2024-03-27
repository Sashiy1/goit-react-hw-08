import css from "./ContactList.module.css"
import Contact from "../Contact/Contact";


const ContactList = ({contacts, onDeleteContact}) => {
    
    return (
        <>
        <Contact contacts={contacts} onDeleteContact={onDeleteContact}/>
        </>
    )

};





export default ContactList;