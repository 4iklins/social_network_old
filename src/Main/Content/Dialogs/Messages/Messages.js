import './Messages.scss';
import Message from './Message/Message';

function Messages (props) {
  let avatar ="";
  let dialog = props.match.params.id;

  if(props.dialogsPage.users[dialog].messages.length !== 0){
    return (
      props.dialogsPage.users[dialog].messages.map(message => {
        if(message.isMe === true){
          avatar = props.myProfile.photos.small;
        } else {
          avatar = props.dialogsPage.users[dialog].photos.small
        }
        return(
          <Message avatar = {avatar} text={message.message} date={message.date} isMe={message.isMe} user={props.myProfile}/>
        )
      })
    )
  } else {
    return null
  }

}
export default Messages