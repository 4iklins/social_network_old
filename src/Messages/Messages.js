import './Messages.scss';
import Message from '../Message/Message';

function Messages (props) {
  let avatar ="";

  if(props.dialogsPage.users[0].messages.length !== 0){
    return (
      props.dialogsPage.users[0].messages.map(message => {
        if(message.isMe === true){
          avatar = props.dialogsPage.me.avatar;
        } else {
          avatar = props.dialogsPage.users[0].avatar
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