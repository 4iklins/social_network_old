import './DialogsList.scss';
import {NavLink} from 'react-router-dom';

let Avatar = (item) => {
  let name = item.user.name;
  let out = '';
  name.split(' ').map((word) =>
    out += word[0].toUpperCase()
    )
  if(item.user.avatar !== ""){
    return <img src={item.user.avatar} alt="" />
    }
  else return <p className="user_without_avatar">{out}</p>
};

const DialogsList = (props) => {

  return (
    <ul className="dialogs_list">
    {props.state.users.map(user =>
    <li className="dialogs_item" key={user.id.toString()}>
      <Avatar user={user}/>
      <NavLink to={`/messages/dialog/id${user.id}`} className="dialog_name">{user.name}</NavLink>
    </li>
    )}
  </ul>
  )
}

export default DialogsList;