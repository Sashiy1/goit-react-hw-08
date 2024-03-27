import css from "./ContactList.module.css"
import Contact from "../Contact/Contact";


const ContactList = ({contactsData}) => {
    
    return (
        <>
        <Contact contactsData={contactsData} />
        </>
    )

};





export default ContactList;