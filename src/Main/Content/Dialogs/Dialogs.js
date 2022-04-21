import './Dialogs.scss';
import Messages from './Messages/Messages';
import DialogsList from './DialogsList/DialogsList';
import SendMessageForm from './SendMessageForm/SendMessageForm';
import {Route} from 'react-router-dom';

function Dialogs(props) {
  const onMessageSend = (formData) => {
    props.sendMessage(formData.sendMessage,props.match.params.id)
  }
  return (
    <div className="dialogs">
      <div className="dialogs__box">
        <p className="dialogs__description">Dialogs</p>
        <div className="dialogs__wrapper">
        <DialogsList dialogsPage={props.dialogsPage}/>
        </div>
      </div>
      <div className="dialogs__chat-wrapper">
        <div className="dialogs__chat">
          <div className="dialogs__chat-content-wrapper">
            <div className="dialogs__chat-content">
              <Route path="/messages/dialog/:id" render={ ()=> <Messages{...props}/>}/>
            </div>
          </div>
          <Route path ="/messages/dialog" 
                 render={ () => <SendMessageForm onSubmit={onMessageSend}/>}/>
        </div>
      </div>
    </div>
  );
};


export default Dialogs