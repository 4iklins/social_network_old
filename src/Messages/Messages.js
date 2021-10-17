import './Messages.scss';
import Message from '../Message/Message';
import avatar from '../img/avatar.jpg';

function Messages ({id, state}) {
  let avatar ="";
  console.log(id);
  return (
    state.dialogs[id].messages.map(message => {
      if(message.isMe === true){
        avatar = '/static/media/avatar.38c7a0b0.jpg';
      } else {
        avatar = state.users[id].avatar
      }
      return(
        <Message avatar = {avatar} text={message.message} date={message.date} isMe={message.isMe}/>
      )
    })
  )
}
export default Messages