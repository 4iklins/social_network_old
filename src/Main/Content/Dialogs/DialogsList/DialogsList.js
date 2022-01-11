import './DialogsList.scss';
import DialogAvatar from './DialogAvatar';
import {NavLink} from 'react-router-dom';


const DialogsList = (props) => {

  return (
    <ul className="dialogs_list">
    {props.dialogsPage.users.map(user =>
    <li className="dialogs_item" key={user.id.toString()}>
      <DialogAvatar user={user}/>
      <NavLink to={`/messages/dialog/id${user.id}`} className="dialog_name">{user.name}</NavLink>
    </li>
    )}
  </ul>
  )
}

export default DialogsList;