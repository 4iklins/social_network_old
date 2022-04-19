import './SendMessageForm.scss';
import React from 'react';
import MediaButton from '../../../../common/MediaButton/MediaButton';
import RoundBtn from '../../../../common/RoundBtn/RoundBtn';
import imageIcon from '../../../../img/image_icon.svg';
import videoIcon from '../../../../img/video_icon.svg';
import audioIcon from '../../../../img/music_icon.svg';
import sendIcon from '../../../../img/send_icon.svg';
import { reduxForm, Field, reset } from 'redux-form';
import {Textarea} from '../../../../common/FormFields/FormFields'

function SendMessageForm (props) {
  return (
    <form className="message_input" onSubmit={props.handleSubmit}>
      <div className="chat_message_input">

      <Field 
        name="sendMessage"
        component={Textarea}
        id="" 
      />

        <div className="chat_buttons">
          <RoundBtn icon={sendIcon} type="submit" disabled = {props.pristine}/>
        </div>
      </div>
      <div className="chat_media__buttons">
       <MediaButton icon={imageIcon} type="button"/>
       <MediaButton icon={videoIcon} type="button"/>
       <MediaButton icon={audioIcon} type="button"/>
      </div>
    </form>
  )
}
const afterSubmit = (result, dispatch) =>
  dispatch(reset('sendMessage'));

export default reduxForm({
  form: "sendMessage",
  onSubmitSuccess:afterSubmit
})(SendMessageForm)
