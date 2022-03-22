import './Login.scss'
import LoginForm from './LoginForm/LoginForm';

function Login(props) {
  const onSubmit = (formData) => {
    const {email,password,rememberMe,captcha} = formData
    props.login(email,password,rememberMe,captcha)
  }

  return (
    <div className="login">
      <h1 className="visibility-hidden">Login</h1>
      <LoginForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
  );
}

export default Login