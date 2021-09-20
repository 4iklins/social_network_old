import './Messages.scss';
import Message from '../Message/Message';
import users from '../data/user.json';
import SmallBtn from '../Small_btn/Small_btn';
import {NavLink} from 'react-router-dom';

let Avatar = (item) => {
  console.log(item.obj.avatar)
  let name = item.obj.name;
  let out = '';
  name.split(' ').map((word) =>
    out += word[0].toUpperCase()
    )
  if(item.obj.avatar !== ""){
    return <img src={item.obj.avatar} alt="" />
    }
  else return <p className="user_without_avatar">{out}</p>
};


function Messages() {
  return (
    <div className="messages">
      <div className="dialogs">
        <p className="dialogs_description">Dialogs</p>
        <div className="dialogs_wrapper">
        <ul className="dialogs_list">
          {users.map(item =>
          <li className="dialogs_item">
            <Avatar obj={item}/>
            <NavLink to={`/messages/id${item.id}`} className="dialog_name">{item.name}</NavLink>
          </li>
          )}
        </ul>
        </div>
      </div>
      <div className="chat_wrapper">
        <div className="chat">
          <div className="chat_content">
            <Message avatar=""/>
          </div>
          <div className="chat_message_input">
            <textarea name="" id=""></textarea>
            <div className="chat_buttons">
              <button className="chat_send"></button>
            </div>
          </div>
          <div className="chat_media_buttons">
          <a href="">
              <div className="chat_media_button photo">
              <SmallBtn />
              </div>
            </a>
            <a href="">
              <div className="chat_media_button video">
              <SmallBtn />
              </div>
            </a>
            <a href="">
              <div className="chat_media_button audio">
              <SmallBtn />
              </div>
            </a>
            </div>
        </div>
      </div>
    </div>
  );
};


export default Messages