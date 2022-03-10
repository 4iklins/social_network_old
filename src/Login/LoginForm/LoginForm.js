import { Field, reduxForm } from "redux-form";
import './LoginForm.scss'

const LoginForm = (props) => {
  return(
    <form onSubmit={props.handleSubmit} className="login-form">
      <div className="form_item">
        <label for='login'>
          <Field name='login' component='input' type='text' id='login' placeholder="login"/>
        </label>
      </div>
      <div className="form_item">
        <label for='password'>
          <Field name ='password' component='input'type='password' id='password' placeholder="password"/>
        </label>
      </div>
      <div className="form_item">
        <label for='remember'>
          Remember me
          <Field name ='remember' component='input'type='checkbox' id='remember'/>
        </label>
      </div>
      <button type="submit">Login</button>
    </form>
  )
}

export default reduxForm({
  form:'login'
})(LoginForm)