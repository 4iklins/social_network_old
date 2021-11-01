import './MessageInput.scss';
import React from 'react';
import MediaButton from '../MediaButton/MediaButton';


function MessageInput () {

  let newMessageElement = React.createRef();
  let sendMessage = () => {

  };

  let onEnteredTextChange = () =>{
      let text = newMessageElement.current.value;
      
  };

  return (
    <div className="message_input">
      <div className="chat_message_input">

      <textarea name="" id="" 
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