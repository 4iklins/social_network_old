import React from 'react';
import './Profile.scss';
import Post from './Post/Post';
import CreatePost from './CreatePost/CreatePost';

function Profile(props) {

  return (
    <div className="profile_wrapper">
      <div className="profile_container">
        <div className="profile_photo">
          photo
          <img src="" alt="" className="" />
        </div>
        <div className="profile_description">
          description
        </div>
      </div>
      <CreatePost {...props}/>
      {props.profilePage.posts.map(post => {
        return <Post postData={post}/>
      })}
    </div>
  );
}

export default Profile;