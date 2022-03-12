import './MessageInput.scss';
import React from 'react';
import MediaButton from '../../../../common/MediaButton/MediaButton';
import RoundBtn from '../../../../common/RoundBtn/RoundBtn';
import imageIcon from '../../../../img/image_icon.svg';
import videoIcon from '../../../../img/video_icon.svg';
import audioIcon from '../../../../img/music_icon.svg';
import sendIcon from '../../../../img/send_icon.svg';




function MessageInput (props) {
  
  let newMessageElement = React.createRef();
  let onSendMessage = () => {
    props.sendMessage();
  };

  let onEnteredTextChange = () => {
      let text = newMessageElement.current.value;
      props.enteredTextChange(text);
  };

  return (
    <div className="message_input">
      <div className="chat_message_input">

      <textarea name="" id="" 
                value={props.dialogsPage.newMessageText}
                ref={newMessageElement}
                onChange={onEnteredTextChange}/>

        <div className="chat_buttons" onClick = {onSendMessage}>
          <RoundBtn icon={sendIcon} type="submit"/>
        </div>
      </div>
      <div className="chat_media_buttons">
       <MediaButton icon={imageIcon} type="button"/>
       <MediaButton icon={videoIcon} type="button"/>
       <MediaButton icon={audioIcon} type="button"/>
      </div>
    </div>
  )
}

export default MessageInput