import css from "./Contact.module.css";
import { FaPhoneAlt } from "react-icons/fa";

import { RiContactsFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { apiDeleteContact } from "../../redux/contacts/operations";


const Contact = ({ contact }) => {


  const dispatch = useDispatch();

  return (
    <li className={css.contactItem} key={contact.id}>
      <p className={css.contactText}>
        <RiContactsFill /> {contact.name}
      </p>
      <p className={css.contactText}>
        <FaPhoneAlt /> {contact.number}
      </p>
      <button
        onClick={() => dispatch(apiDeleteContact(contact.id))}
        className={css.contactBtn}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
