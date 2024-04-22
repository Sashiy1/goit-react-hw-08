import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";

import { useDispatch } from "react-redux";

import { apiAddContact } from "../../redux/contactsOps";

const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "User name must be at least 3 characters!")
    .max(30, "User name must be less than 30 characters!")
    .required("User name is required!"),
  number: Yup.string().required("Number is required"),
});

const INITIAL_FORM_DATA = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (info, formActions) => {
    dispatch(apiAddContact(info));
    formActions.resetForm();
  };

  return (
    <>
      <h1>Phonebook</h1>
      <Formik
        validationSchema={ContactFormSchema}
        initialValues={INITIAL_FORM_DATA}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <label className={css.label}>
            <span className={css.labelText}>Name</span>

            <Field className={css.formInput} type="text" name="name" />
            <ErrorMessage
              className={css.errorMsg}
              name="name"
              component="span"
            />
          </label>
          <label className={css.label}>
            <span className={css.labelText}>Number</span>
            <Field className={css.formInput} type="phone" name="number" />
            <ErrorMessage
              className={css.errorMsg}
              name="number"
              component="span"
            />
          </label>
          <button
            className={css.FormBtn}
            type="submit"
            aria-label="Add new contact"
          >
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
