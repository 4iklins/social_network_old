import './Dialogs.scss';
import Messages from '../Messages/Messages';
import MediaButton from '../MediaButton/MediaButton';
import DialogsList from '../DialogsList/DialogsList';
import MessageInput from '../MessageInput/MessageInput';
import {Route} from 'react-router-dom';

function Dialogs(props) {
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
              <Route path = {`/messages/dialog/id${user.id}`} render={ () => <Messages id={user.id} state={props.state} />}/>
              )}
            </div>
          </div>
          <Route path ="/messages/dialog" component={MessageInput}/>
        </div>
      </div>
    </div>
  );
};


export default Dialogs