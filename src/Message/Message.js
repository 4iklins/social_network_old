import './Message.scss';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import classNames from  'classnames';


function Message({avatar, text, date, isMe}) {
  return (
    <div className={classNames("message", {"message--isme": isMe})}>
      <div className="message_user_avatar">
        <img src={avatar} alt="" />
      </div>
      <div className="message_content">
        <div className="message_bubble">
          <p className="message_text">{text}</p>
        </div>
        <span className="message_date">{formatDistanceToNow(date, {addSuffix:true})}</span>
      </div>

    </div>
  );
}

export default Message