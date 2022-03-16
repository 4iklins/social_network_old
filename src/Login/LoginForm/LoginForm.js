import { Field, reduxForm } from "redux-form";
import './LoginForm.scss';
import { Input } from "../../common/FormFields/FormFields";
import { required } from "../../utils/validators/validators";

const LoginForm = (props) => {
  return(
    <form onSubmit={props.handleSubmit} className="login-form">
      <div className="login_item">
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
      <div className="login_item">
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
      <div className="login_item login_item--checkbox">
        <label>
          <span>Remember me</span>
          <Field name ='rememberMe' component='input'type='checkbox' id='rememberMe'/>
        </label>
      </div>
      <button className="login_submit" type="submit" disabled={props.invalid}>Login</button>
    </form>
  )
}

export default reduxForm({
  form:'login'
})(LoginForm)