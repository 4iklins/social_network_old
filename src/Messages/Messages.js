import './Messages.scss';
import Message from '../Message/Message';

function Messages ({id, state}) {
  let avatar ="";
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