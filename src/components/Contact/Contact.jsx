import css from "./Contact.module.css";
import { FaPhoneAlt } from "react-icons/fa";

import { RiContactsFill } from "react-icons/ri";

const Contact = ({ contact, onDeleteContact }) => {
  console.log(contact);

  return (
    <li className={css.contactItem} key={contact.id}>
      <p className={css.contactText}>
        <RiContactsFill /> {contact.name}
      </p>
      <p className={css.contactText}>
        <FaPhoneAlt /> {contact.number}
      </p>
      <button
        onClick={() => onDeleteContact(contact.id)}
        className={css.contactBtn}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
