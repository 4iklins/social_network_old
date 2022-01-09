import './MessageInput.scss';
import React from 'react';
import MediaButton from '../../../../MediaButton/MediaButton';
import { sendMessageActionCreator, updateEnteredMessageTextActionCreator } from '../../../../data/dialogs-reducer';



function MessageInput (props) {
  
  let newMessageElement = React.createRef();
  let sendMessage = () => {
    props.dispatch(sendMessageActionCreator());
  };

  let onEnteredTextChange = () => {

      let text = newMessageElement.current.value;
      props.dispatch(updateEnteredMessageTextActionCreator(text));
  };

  return (
    <div className="message_input">
      <div className="chat_message_input">

      <textarea name="" id="" 
                value={props.dialogsPage.newMessageText}
                ref={newMessageElement}
                onChange={onEnteredTextChange}/>

        <div className="chat_buttons" onClick = {sendMessage}>
          <button className="chat_send"></button>
        </div>
      </div>
      <div className="chat_media_buttons">
        <MediaButton icon="image"/>
        <MediaButton icon="video"/>
        <MediaButton icon="audio"/>
      </div>
    </div>
  )
}

export default MessageInput