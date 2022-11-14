import './Login.scss'
import LoginForm from './LoginForm/LoginForm';

function Login(props) {
  const onSubmit = (formData) => {
    const {email,password,rememberMe,captcha} = formData
    
    props.login(email,password,rememberMe,captcha)
    .then((id)=>{
      props.requestMyData(id, props.setAuthProgress,props.setMyProfile,props.setMyStatusText)
    })
    
  }

  return (
    <div className="login">
      <h1 className="visibility-hidden">Login</h1>
      <div className="login__form-wrapper">
        <LoginForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
      </div>
    </div>
  );
}

export default Login