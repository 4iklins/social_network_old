import './Dialogs.scss';
import Messages from '../Messages/Messages';
import MediaButton from '../MediaButton/MediaButton';
import DialogsList from '../DialogsList/DialogsList';
import {Route} from 'react-router-dom';

function Dialogs(props) {
  debugger
  return (
    <div className="dialogs_box">
      <div className="dialogs">
        <p className="dialogs_description">Dialogs</p>
        <div className="dialogs_wrapper">
        <DialogsList users={props.state.users}/>
        </div>
      </div>
      <div className="chat_wrapper">
        <div className="chat">
          <div className="chat_content_wrapper">
          <div className="chat_content">
            {props.state.users.map(user => 
              <Route path = {`/messages/id${user.id}`} render={ () => <Messages id={user.id} state={props.state} />}/>
              )}
          </div>
          </div>
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
      </div>
    </div>
  );
};


export default Dialogs