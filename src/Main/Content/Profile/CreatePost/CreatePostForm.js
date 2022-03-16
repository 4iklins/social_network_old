import "./CreatePost.scss";
import avatar from  '../../../../img/avatar.jpg';
import RoundBtn from '../../../../common/RoundBtn/RoundBtn';
import MediaButton from '../../../../common/MediaButton/MediaButton';
import React from 'react';
import sendIcon from '../../../../img/send_icon.svg';
import imageIcon from '../../../../img/image_icon.svg';
import videoIcon from '../../../../img/video_icon.svg';
import audioIcon from '../../../../img/music_icon.svg';
import { Field, reduxForm, reset } from "redux-form";
import { maxLength} from "../../../../utils/validators/validators";
import {Textarea} from '../../../../common/FormFields/FormFields'

let maxLength140 = maxLength(140);

function CreatePost (props) {
  return(
    <form className="create_post" onSubmit={props.handleSubmit}>
    <div className="create_post_text">
      <div className="create_post_user_avatar">
        <img src={avatar} alt="" />
      </div>
      <Field 
        name="postText"
        component={Textarea}
        id="" rows="5" 
        placeholder="What's on your mind?"
        validate = {[maxLength140]}
       />
    </div>
    <div className="create_post_media">
      <MediaButton icon={imageIcon} type="button"/>
      <MediaButton icon={videoIcon} type="button"/>
      <MediaButton icon={audioIcon} type="button"/>
    </div>
    <div className="create_post_button" >
      <RoundBtn icon={sendIcon} type="submit" disabled = {props.pristine}/>
    </div>
  </form>
  )
}
const afterSubmit = (result, dispatch) =>
  dispatch(reset('createPost'));

export default reduxForm({
  form:'createPost',
  onSubmitSuccess:afterSubmit
})(CreatePost);