import React from 'react';
import './Profile.scss';
import Post from './Post/Post';
import CreatePostForm from './CreatePost/CreatePostForm';
import Contacts from './Contacts';
import withoutAvatarMock from '../../../img/withoutAvatarMock.jpg';
import Status from './Status/Status';


function Profile(props) {
  const addNewPost = (formData) =>{
    console.log(formData.postText)
    props.addPost(formData.postText);
  }
  return (
    <div className="profile_wrapper">
      <div className="profile_container">
        <div className="profile_photo">
          {props.profile.photos.large 
          ? <img src={props.profile.photos.large} alt="" className="" />
          : <img src={withoutAvatarMock} alt="" className="" />}
        </div>
        <div className="profile_description">
          <div className="profile_name">{props.profile.fullName}</div>
          {props.authId === props.profile.userId
          ? <Status status={props.status} setUserStatus={props.setUserStatus}/>
          : <div className="profile_user_status"><span>Status: </span>{props.status}</div> }
          <div className="profile_about">Abount me: {props.profile.aboutMe}</div>
          <div className="profile_contacts">
            <div>Contacts:</div>
            <Contacts contacts = {props.profile.contacts}/>
          </div>
        </div>
      </div>
      <CreatePostForm {...props} onSubmit={addNewPost}/>
      {props.posts.map(post => {
        return <Post postData={post} key={post.id}/>
      })}
    </div>
  );
}

export default Profile;