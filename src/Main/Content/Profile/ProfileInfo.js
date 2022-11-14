import React, {useState} from 'react';
import withoutAvatarMock from '../../../img/withoutAvatarMock.jpg';
import ProfileDescription from './ProfileDescription/ProfileDescription';
import EditPhoto from './EditPhoto/EditPhoto';
import ProfileEditForm from './ProfileEditForm/ProfileEditForm';

const ProfileInfo = React.memo((props) => {
  let [editMode, setEditMode] = useState(false)
  let enebleEditMode = () => {
    setEditMode(!editMode)
  }

  const onSubmit = (formData) => {
    props.saveProfileInfo(formData)
    .then(()=>{
      enebleEditMode()
    })
  }

   return (
    <div className="profile__container">
    <div className="profile__photo">
      {props.profile.photos.large 
      ? <img src={props.profile.photos.large} alt="" className="" />
      : <img src={withoutAvatarMock} alt="" className="" />}
    </div>
    {editMode 
    ? <ProfileEditForm initialValues={props.profile} onSubmit={onSubmit} profile={props.profile}/>
    : <ProfileDescription profile={props.profile} authId = {props.authId} status={props.status} setMyStatus={props.setMyStatus}/>
    }
    {!editMode && (props.authId === props.profile.userId) && <label className="profile__description-edit">
        <div className="profile__description-edit-icon"></div>
        <button onClick={enebleEditMode}></button>
    </label>}
    {props.authId === props.profile.userId && <EditPhoto editPhoto = {props.editPhoto}/>}
  </div>
   )
  }
) 

export default ProfileInfo;