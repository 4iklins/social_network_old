import './ProfileEditForm.scss';
import { Field, reduxForm, reset } from "redux-form";
import { CreateField } from "../../../../common/FormFields/FormFields";
import {contactAddress, required} from "../../../../utils/validators/validators"


function ProfileEditForm (props) {

  return(
    <form className="profile-edit-form" onSubmit={props.handleSubmit}>
      <label className="profile-edit-form__item profile-edit-form__item--name">
        <span>Name:</span>
        <Field
        name="fullName"
        component={CreateField}
        fieldType = "input"
        />
      </label>
      <label className="profile-edit-form__item profile-edit-form__item--about-me">
        Abount me:
        <Field
        name="aboutMe"
        component={CreateField}
        fieldType = "textarea"
        validate ={[required]}
        />
      </label>
      <label className="profile-edit-form__item profile-edit-form__item--looking-for-a-job">
        Looking for a job:
        <Field
        name="lookingForAJob"
        component={CreateField}
        fieldType = "input"
        type = "checkbox"
        />
      </label>
      <label className="profile-edit-form__item profile-edit-form__item--looking-for-a-job-description">
        My skills:
        <Field
        name="lookingForAJobDescription"
        component={CreateField}
        fieldType = "textarea"
        />
      </label>
      <div className="profile-edit-form__contacts">
        Contacts:
        {Object.keys(props.profile.contacts).map((contact)=>{
          return (
            <label className={`profile-edit-form__item profile-edit-form__contact profile-edit-form__contact--${contact}`}>
            {contact}:
            <Field
            name={`contacts.${contact}`}
            component={CreateField}
            fieldType = "input"
            validate= {[contactAddress]}
            placeholder={`https://${contact}.${contact==="vk"?"ru":"com"}`}
            />
          </label>
          )
        })}
      </div>
      {props.error &&  <div className="profile-edit-form__fail"><span>{props.error}</span></div>}
    <button className="profile-edit-form__button-save">Save</button>
    </form>
  )
}

export default reduxForm({
  form:'profile-edit'
})(ProfileEditForm);