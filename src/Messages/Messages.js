import './Messages.scss';
import Message from '../Message/Message';
import {chooseDialogActionCreator} from '../data/state.js';

function Messages ({id, state, dispatch}) {
  debugger
  let avatar ="";
  let dialogChoose = (id) => {
    dispatch(chooseDialogActionCreator(id));
  }
  dialogChoose(id);
  if(state.dialogs[id].messages.length !== 0){
    return (
      state.dialogs[id].messages.map(message => {
        if(message.isMe === true){
          avatar = state.me.avatar;
        } else {
          avatar = state.users[id].avatar
        }
        return(
          <Message avatar = {avatar} text={message.message} date={message.date} isMe={message.isMe}/>
        )
      })
    )
  } else {
    return <div></div>
  }

}
export default Messages