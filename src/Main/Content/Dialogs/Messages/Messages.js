import './Messages.scss';
import Message from './Message/Message';
import classNames from 'classnames';

function Messages (props) {
  let dialog = props.match.params.id;

  if(props.dialogsPage.users[dialog].messages.length !== 0){
    return (
      props.dialogsPage.users[dialog].messages.map((message,i) => {
        if(message.isMe){
          return(
            <div className={classNames("dialogs__message","dialogs__message--isMe")} key={i}>
              <Message text={message.message} date={message.date} isMe={message.isMe} avatar={props.myProfile.photos.small} name={props.myProfile.fullName} />
            </div>
          )
        } else {
          return(
            <div className={classNames("dialogs__message")} key={i}>
              <Message text={message.message} date={message.date} isMe={message.isMe} avatar={props.dialogsPage.users[dialog].photos.small} name={props.dialogsPage.users[dialog].name} />
            </div>
          )
        }
      })
    )
  } else {
    return null
  }

}
export default Messages