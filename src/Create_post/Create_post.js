import React from 'react';
import './Create_post.scss';
import avatar from  '../img/avatar.jpg';
import RoundBtn from '../RoundBtn/RoundBtn';
import MediaButton from '../MediaButton/MediaButton';
import Post from '../Post/Post';
import {addPostActionCreator, updateEnteredPostTextActionCreator} from '../data/store.js'


function CreatePost(props) {
  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let onEnteredTextChange = () => {
    debugger
    let text = newPostElement.current.value;
    props.dispatch(updateEnteredPostTextActionCreator(text))
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
         value={props.postsPage.newPostText}
          ref={newPostElement}
          onChange = {onEnteredTextChange}
         />
      </div>
      <div className="create_post_media">
        <MediaButton icon="image"/>
        <MediaButton icon="video"/>
        <MediaButton icon="audio"/>
      </div>
      <div className="create_post_button" onClick={addPost}>
        <RoundBtn />
      </div>
    </div>
      {props.postsPage.posts.map(post => {
        return <Post postData={post}/>
      })}
    </div>
  );
}

export default CreatePost;