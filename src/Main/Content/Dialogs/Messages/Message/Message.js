import './Message.scss';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import classNames from 'classnames';
import Avatar from '../../../../../common/Avatar/Avatar';


function Message({avatar, text, date, isMe, user}) {
  return (
    <div className={classNames("message", {"message--isme": isMe})}>
      <div className="message__user-avatar">
        {avatar ? <img src={avatar} alt="" />:  <Avatar user={user}/>}
      </div>
      <div className="message__content">
        <div className="message__bubble">
          <p className="message__text">{text}</p>
        </div>
        <span className="message__date">{formatDistanceToNow(date, {addSuffix:true})}</span>
      </div>

    </div>
  );
}

export default Message