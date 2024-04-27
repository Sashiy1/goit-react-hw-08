import css from "./LoginForm.module.css";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { apiLoginUser } from "../../redux/auth/operations";

const UserRegisterSchema = Yup.object().shape({
      email: Yup.string().required("Number is required"),
      password: Yup.string()
      .min(8, "User password must be at least 8 characters!")
      .max(30, "User password must be less than 30 characters!")
      .required("User password is required!"),
  });


  const INITIAL_FORM_DATA = {
    email: "",
    password: "",
  };

const LoginForm = () => {
    const dispatch = useDispatch();

    const loginUser = (formData, formActions) => {
      dispatch(apiLoginUser(formData));
      formActions.resetForm();
    };
  
    return (
      <>
  
        <Formik
          validationSchema={UserRegisterSchema}
          initialValues={INITIAL_FORM_DATA}
          onSubmit={loginUser}
        >
          <Form className={css.form}>
        
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
              Log In
            </button>
          </Form>
        </Formik>
      </>
    );
}

export default LoginForm;



