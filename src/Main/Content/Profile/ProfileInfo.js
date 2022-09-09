import React from 'react';
import withoutAvatarMock from '../../../img/withoutAvatarMock.jpg';
import Status from './Status/Status';
import StatusWithHooks from './Status/StatusWithHooks';
import Contacts from './Contacts';

const ProfileInfo = React.memo((props) => {
   return (
    <div className="profile__container">
    <div className="profile__photo">
      {props.profile.photos.large 
      ? <img src={props.profile.photos.large} alt="" className="" />
      : <img src={withoutAvatarMock} alt="" className="" />}
    </div>
    <div className="profile__description">
      <div className="profile__name">{props.profile.fullName}</div>
      {props.authId === props.profile.userId
      ? <StatusWithHooks status={props.status} setUserStatus={props.setUserStatus}/>
      : <div className="profile__user-status"><span>Status: </span>{props.status}</div> }
      {props.statusError && <div className ="profile__user-status-error">{props.statusErrorMessage}</div>}
      <div className="profile__about">Abount me: {props.profile.aboutMe}</div>
      <div className="profile__contacts">
        <div>Contacts:</div>
        <Contacts contacts = {props.profile.contacts}/>
      </div>
    </div>
  </div>
   )
  }
) 

export default ProfileInfo;