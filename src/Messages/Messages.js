import './Messages.scss';
import Message from '../Message/Message';
import users from '../data/user.json';
import {NavLink} from 'react-router-dom'

function Messages() {
  console.log(users)
  return (
    <div className="messages">
      <div className="dialogs">
        <p className="dialogs_description">Dialogs</p>
        <div className="dialogs_wrapper">
        <ul className="dialogs_list">
          {users.map(item =>
          <li className="dialogs_item">
            <img src="" alt="" />
            <NavLink to={`/messages/id${item.id}`} className="dialog_name">{item.name}</NavLink>
          </li>
          )}
        </ul>
        </div>

      </div>
      <div className="chat">

      </div>
    </div>
  );
}

export default Messages