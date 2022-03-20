import './Login.scss'
import LoginForm from './LoginForm/LoginForm';

function Login(props) {
  const onSubmit = (formData) => {
    const {email,password,rememberMe} = formData
    props.login(email,password,rememberMe)
  }

  return (
    <div className="login">
      <h1 className="visibility-hidden">Login</h1>
      <LoginForm onSubmit={onSubmit}/>
    </div>
  );
}

export default Login