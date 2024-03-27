import css from "./Contact.module.css";
import { FaPhoneAlt } from "react-icons/fa";

import { RiContactsFill } from "react-icons/ri";

const Contact = ({ contactsData }) => {
  console.log(contactsData);

  return (
    <ul className={css.contactList}>
      {contactsData.map((contact) => (
        <li className={css.contactItem} key={contact.id}>
          <p className={css.contactText}><RiContactsFill />   {contact.name}</p>
          <p className={css.contactText}><FaPhoneAlt />   {contact.number}</p>
          <button className={css.contactBtn}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default Contact;


