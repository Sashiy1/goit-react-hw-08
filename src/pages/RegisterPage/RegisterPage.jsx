import { Link } from "react-router-dom"
import RegisterForm from "../../components/RegisterForm/RegisterForm"
import css from "./RegisterPage.module.css"


const RegisterPage = () => {
  return (
    <div className={css.registerFormBox}>
      <h1>Please Sign In</h1>
      <RegisterForm />
      <span className={css.redirectText} >Alredy have an account?  <Link className={css.redirectLink} to="/login">Sign In</Link></span>
    </div>
  )
}

export default RegisterPage
