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