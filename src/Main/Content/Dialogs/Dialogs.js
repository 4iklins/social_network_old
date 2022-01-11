import './Dialogs.scss';
import Messages from './Messages/Messages';
import DialogsList from './DialogsList/DialogsList';
import MessageInput from './MessageInput/MessageInput';
import {Route} from 'react-router-dom';

function Dialogs(props) {
  return (
    <div className="dialogs_box">
      <div className="dialogs">
        <p className="dialogs_description">Dialogs</p>
        <div className="dialogs_wrapper">
        <DialogsList dialogsPage={props.dialogsPage}/>
        </div>
      </div>
      <div className="chat_wrapper">
        <div className="chat">
          <div className="chat_content_wrapper">
            <div className="chat_content">
              <Route path="/messages/dialog/id0" render={ ()=> <Messages dialogsPage={props.dialogsPage}/>}/>
            </div>
          </div>
          <Route path ="/messages/dialog" render={ () => <MessageInput sendMessage={props.sendMessage} enteredTextChange={props.enteredTextChange} dialogsPage={props.dialogsPage}/>}/>
        </div>
      </div>
    </div>
  );
};


export default Dialogs