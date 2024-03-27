import css from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <div>
      <form className={css.form}>
        <label className={css.label}>
          <span className={css.labelText}>Name</span>
          <input className={css.formInput} type="text" />
        </label>
        <label className={css.label}>
          <span className={css.labelText}>Number</span>
          <input className={css.formInput} type="text" />
        </label>
        <button
          className={css.FormBtn}
          type="submit"
          aria-label="Add new contact"
        >
          Add contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
