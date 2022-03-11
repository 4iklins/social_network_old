import { Field, reduxForm } from "redux-form";
import './LoginForm.scss'

const LoginForm = (props) => {
  return(
    <form onSubmit={props.handleSubmit} className="login-form">
      <div className="login_item">
        <label>
          <Field name='login' component='input' type='text' id='login' placeholder="login"/>
        </label>
      </div>
      <div className="login_item">
        <label>
          <Field name ='password' component='input'type='password' id='password' placeholder="password"/>
        </label>
      </div>
      <div className="login_item login_item--checkbox">
        <label>
          <span>Remember me</span>
          <Field name ='remember' component='input'type='checkbox' id='remember'/>
        </label>
      </div>
      <button className="login_submit" type="submit">Login</button>
    </form>
  )
}

export default reduxForm({
  form:'login'
})(LoginForm)