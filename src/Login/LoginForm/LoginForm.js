import { Field, reduxForm } from "redux-form";
import './LoginForm.scss';
import { Input } from "../../common/FormFields/FormFields";
import { required } from "../../utils/validators/validators";
import errorImg from '../../img/warning_icon.svg'

const LoginForm = (props) => {
  return(
    <form onSubmit={props.handleSubmit} className="login-form">
      <div className="login-form__item">
        <label>
          <Field 
            name='email' 
            component={Input}
            type='text' 
            id='email' 
            placeholder="email"
            validate={[required]}/>
        </label>
      </div>
      <div className="login-form__item">
        <label>
          <Field 
            name ='password' 
            component={Input}
            type='password' 
            id='password' 
            placeholder="password"
            validate={[required]}/>
        </label>
      </div>
      <div className="login-form__item login-form__item--checkbox">
        <label>
          <span>Remember me</span>
          <Field name ='rememberMe' component='input'type='checkbox' id='rememberMe'/>
        </label>
      </div>

      {props.error &&  <div className="login-form__fail">
        <img src ={errorImg}></img><span>{props.error}</span>
      </div>}

      {props.captchaUrl && <div className="login-form__item login-form__item--captcha">
        <Field name ='captcha'
               component={Input}
               type='input'
               validate={[required]}/>
        <img src ={props.captchaUrl} className="login-form__captcha-img" alt={"captcha"}></img>
      </div>}
 
      <button className="login-form__submit" type="submit" disabled={props.invalid}>Login</button>
    </form>
  )
}

export default reduxForm({
  form:'login'
})(LoginForm)