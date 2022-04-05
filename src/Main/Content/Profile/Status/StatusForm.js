import { Field, reduxForm } from "redux-form";
import { Input } from "../../../../common/FormFields/FormFields";

const StatusForm = (props) => {
  <form>
    <div className="status_input">
    <Field
      type="text"
      component ={Input}
      value={props.status}
      autoFocus={true}
    />
    </div>
  </form>
}

export default reduxForm({
  form: 'status'
})(StatusForm);