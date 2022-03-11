import './Login.scss'
import LoginForm from './LoginForm/LoginForm';

function Login() {
  const onSubmit = (formData) => {
    console.log(formData)
  }

  return (
    <div className="login">
      <h1 className="visibility-hidden">Login</h1>
      <LoginForm onSubmit={onSubmit}/>
    </div>
  );
}

export default Login