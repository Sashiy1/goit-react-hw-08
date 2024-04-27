import css from "./RegisterForm.module.css";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { apiRegisterUser } from "../../redux/auth/operations";

const UserRegisterSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "User name must be at least 3 characters!")
      .max(30, "User name must be less than 30 characters!")
      .required("User name is required!"),
      email: Yup.string().required("Number is required"),
      password: Yup.string()
      .min(8, "User password must be at least 8 characters!")
      .max(30, "User password must be less than 30 characters!")
      .required("User password is required!"),
  });


  const INITIAL_FORM_DATA = {
    name: "",
    email: "",
    password: "",
  };

const RegisterForm = () => {
    const dispatch = useDispatch();

    const registerUser = (formData, formActions) => {
      dispatch(apiRegisterUser(formData));
      formActions.resetForm();
    };
  
    return (
      <>
  
        <Formik
          validationSchema={UserRegisterSchema}
          initialValues={INITIAL_FORM_DATA}
          onSubmit={registerUser}
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
              <span className={css.labelText}>Email</span>
              <Field className={css.formInput} type="email" name="email" />
              <ErrorMessage
                className={css.errorMsg}
                name="email"
                component="span"
              />
            </label>
            <label className={css.label}>
              <span className={css.labelText}>Password</span>
              <Field className={css.formInput} type="password" name="password" autoComplete="off" />
              <ErrorMessage
                className={css.errorMsg}
                name="password"
                component="span"
              />
            </label>
            <button
              className={css.FormBtn}
              type="submit"
              title="click to register user"
              aria-label="Register new user"
            >
              Sign Up
            </button>
          </Form>
        </Formik>
      </>
    );
}

export default RegisterForm;





