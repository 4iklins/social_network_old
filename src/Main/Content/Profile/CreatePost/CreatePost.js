import React from "react";
import "./CreatePost.scss";
import CreatePostForm from "./CreatePostForm";
import Post from "../Post/Post";


const CreatePost =  React.memo((props) => {
  const addNewPost = (formData) =>{
    props.addPost(formData.postText);
  }
  return(
    <>
      {props.authId === props.profile.userId 
      && 
      <div className="profile__create-post">
        <CreatePostForm profile={props.profile} onSubmit={addNewPost}/>
      </div>}
  
      {props.posts.map(post => {
        return (
          <div className="profile__post">
            <Post profile={props.profile} postData={post} key={post.id}/>
          </div>
        )
      })}
    </>
  )
})

export default CreatePost;