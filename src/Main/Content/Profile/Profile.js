import React from 'react';
import './Profile.scss';
import avatar from  '../../../img/avatar.jpg';
import RoundBtn from '../../../RoundBtn/RoundBtn';
import MediaButton from '../../../MediaButton/MediaButton';
import Post from './Post/Post';


function Profile(props) {
  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  }

  let onEnteredTextChange = () => {
    let text = newPostElement.current.value;
    props.updateEnteredPostText(text);
  }
  
  return (
    <div className="create_post_wrapper">
    <div className="create_post">
      <div className="create_post_text">
        <div className="create_post_user_avatar">
          <img src={avatar} alt="" />
        </div>
        <textarea 
          name="post_text"
         id="" rows="5" 
         placeholder="What's on your mind?"
         value={props.profilePage.newPostText}
          ref={newPostElement}
          onChange = {onEnteredTextChange}
         />
      </div>
      <div className="create_post_media">
        <MediaButton icon="image"/>
        <MediaButton icon="video"/>
        <MediaButton icon="audio"/>
      </div>
      <div className="create_post_button" onClick={onAddPost}>
        <RoundBtn />
      </div>
    </div>
      {props.profilePage.posts.map(post => {
        return <Post postData={post}/>
      })}
    </div>
  );
}

export default Profile;