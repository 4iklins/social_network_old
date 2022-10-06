import React from 'react';
import './Profile.scss';
import ProfileInfo from './ProfileInfo';
import CreatePost from './CreatePost/CreatePost';





function Profile(props) {
  return (
    <div className="profile">
      <ProfileInfo status={props.status} setMyStatus={props.setMyStatus} statusError={props.statusError} statusErrorMessage={props.statusErrorMessage}
                   authId = {props.authId} profile = {props.profile} editPhoto = {props.editPhoto} saveProfileInfo={props.saveProfileInfo}/>
      <CreatePost authId = {props.authId} profile = {props.profile} posts = {props.posts} addPost = {props.addPost}/>
    </div>
  );
}

export default Profile;