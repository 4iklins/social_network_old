import './MessageInput.scss';
import MediaButton from '../MediaButton/MediaButton';


function MessageInput () {
  return (
    <div className="message_input">
      <div className="chat_message_input">
      <textarea name="" id=""></textarea>
        <div className="chat_buttons">
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