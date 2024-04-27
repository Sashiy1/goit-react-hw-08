import { Link } from "react-router-dom"
import LoginForm from "../../components/LoginForm/LoginForm"


const LoginPage = () => {
  return (
    <div>
      <h1>login</h1>
      <LoginForm />
      <span>Dont have an account?<Link to="/register">Sign Up</Link></span>
     
    </div>
  )
}

export default LoginPage
