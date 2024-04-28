import { Link } from "react-router-dom"
import LoginForm from "../../components/LoginForm/LoginForm"
import css from "./LoginPage.module.css"

const LoginPage = () => {
  return (
    <div className={css.loginFormBox}>
      <h1>Please Login</h1>
      <LoginForm />
      <span className={css.redirectText} >Dont have an account?  <Link className={css.redirectLink} to="/register">Sign Up</Link></span>
     
    </div>
  )
}

export default LoginPage
