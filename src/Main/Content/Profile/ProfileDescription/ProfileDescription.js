import './ProfileDescription.scss';
import StatusWithHooks from '../Status/StatusWithHooks';
import Contacts from '../Contacts';

function ProfileDescription (props) {
  
  return(
    <div className="profile__description">
      <div className="profile__name">{props.profile.fullName}</div>
      {
      props.authId === props.profile.userId
      ? <StatusWithHooks status={props.status} setMyStatus={props.setMyStatus}/>
      : <div className="profile__user-status"><span>Status: </span>{props.status}</div>
      }
      {props.statusError && <div className ="profile__user-status-error">{props.statusErrorMessage}</div>}
      <div className="profile__about profile__head">Abount me: {props.profile.aboutMe}</div>
      <div className = "profile__loking-for-a-job profile__head">
        Looking for a job: {props.profile.lookingForAJob ? "yes":"no"}
      </div>
      {props.profile.lookingForAJob && <div className = "profile__loking-for-a-job-decription profile__head">My skills: {props.profile.lookingForAJobDescription}</div>}
      <div className="profile__contacts profile__head">
        <div>Contacts:</div>
        <Contacts contacts = {props.profile.contacts}/>
      </div>

    </div>
  )
}
export default ProfileDescription;