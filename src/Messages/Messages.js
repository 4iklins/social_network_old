import './Messages.scss';
import Message from '../Message/Message';
import users from '../data/user.json';
import SmallBtn from '../Small_btn/Small_btn';
import {NavLink} from 'react-router-dom';
import avatar from '../img/avatar.jpg';

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
          <div className="chat_content_wrapper">
          <div className="chat_content">

            <Message avatar="https://sun9-53.userapi.com/impf/c841421/v841421591/2b031/vffpFG3wGhc.jpg?size=1168x1172&quality=96&sign=2b0eb245091cfc23d4b5b38dd8ca77b4&type=album"
            text="Ну шо ты?)"
            date={new Date(2021, 8, 21, 13, 40, 13)}/>

            <Message avatar={avatar}
            text="А нишо)"
            date={new Date(2021, 8, 21, 15, 40, 13)}
            isMe={true}/>

            <Message avatar="https://sun9-53.userapi.com/impf/c841421/v841421591/2b031/vffpFG3wGhc.jpg?size=1168x1172&quality=96&sign=2b0eb245091cfc23d4b5b38dd8ca77b4&type=album"
            text="Ну и зря)"
            date={new Date(2021, 8, 21, 16, 40, 13)}/>
            
            
          </div>
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