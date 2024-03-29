import './DialogsList.scss';
import Avatar from '../../../../common/Avatar/Avatar';
import {NavLink} from 'react-router-dom';


const DialogsList = (props) => {
  return (
    <ul className="dialogs_list">
    {props.dialogsPage.users.map(user =>
    <li className="dialogs_item" key={user.id.toString()}>
      <Avatar userName={user.name} photo={user.photos.small}/>
      <NavLink to={`/messages/dialog/${user.id}`} className="dialog_name">{user.name}</NavLink>
    </li>
    )}
  </ul>
  )
}

export default DialogsList;