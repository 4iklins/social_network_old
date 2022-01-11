import './Dialogs.scss';
import Dialogs from './Dialogs';
import { sendMessageActionCreator, updateEnteredMessageTextActionCreator } from '../../../data/dialogs-reducer';

function DialogsContainer(props) {
  let state = props.store.getState();

  let sendMessage = () => {
    props.store.dispatch(sendMessageActionCreator());
  };

  let enteredTextChange = (text) => {
      props.store.dispatch(updateEnteredMessageTextActionCreator(text));
  };
  return (
    <Dialogs sendMessage={sendMessage} enteredTextChange={enteredTextChange} dialogsPage={state.dialogsPage}/>
  );
};


export default DialogsContainer;