import { Link } from "react-router-dom"
import RegisterForm from "../../components/RegisterForm/RegisterForm"


const RegisterPage = () => {
  return (
    <div>
      <h1>Register</h1>
      <RegisterForm />
      <span>Alredy have an account?<Link to="/login">Sign In</Link></span>
    </div>
  )
}

export default RegisterPage
