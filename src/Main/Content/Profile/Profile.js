import React from 'react';
import './Profile.scss';
import Post from './Post/Post';
import ProfileInfo from './ProfileInfo';
import CreatePost from './CreatePost/CreatePost';





function Profile(props) {
  return (
    <div className="profile">
      <ProfileInfo status={props.status} setUserStatus={props.setUserStatus} statusError={props.statusError} statusErrorMessage={props.statusErrorMessage}
                   authId = {props.authId} profile = {props.profile}/>
      <CreatePost authId = {props.authId} profile = {props.profile} posts = {props.posts} addPost = {props.addPost}/>
    </div>
  );
}

export default Profile;