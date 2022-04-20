import React from 'react';
import './Profile.scss';
import Post from './Post/Post';
import CreatePostForm from './CreatePost/CreatePostForm';
import Contacts from './Contacts';
import withoutAvatarMock from '../../../img/withoutAvatarMock.jpg';
import Status from './Status/Status';
import StatusWithHooks from './Status/StatusWithHooks';


function Profile(props) {
  const addNewPost = (formData) =>{
    props.addPost(formData.postText);
  }
  return (
    <div className="profile">
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
          <div className="profile__about">Abount me: {props.profile.aboutMe}</div>
          <div className="profile__contacts">
            <div>Contacts:</div>
            <Contacts contacts = {props.profile.contacts}/>
          </div>
        </div>
      </div>
      {props.authId === props.profile.userId 
      && 
      <div className="profile__create-post">
        <CreatePostForm {...props} onSubmit={addNewPost}/>
      </div>}
  
      {props.posts.map(post => {
        return (
          <div className="profile__post">
            <Post {...props} postData={post} key={post.id}/>
          </div>
        )
      })}
    </div>
  );
}

export default Profile;