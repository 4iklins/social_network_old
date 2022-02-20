import './MenuItem.scss';
import {NavLink} from 'react-router-dom';
import SmallIcon from '../../../../common/SmallIcon/SmallIcon';

function MenuItem (props){
  const url = props.myId ? `/${props.text}/${props.myId}`: `/${props.text}`
  return(
    <li className="menu_item">
    <NavLink  to={url}>
      <div className={"menu_item_" + props.text}>
        <SmallIcon />
      </div>
      <p>{props.text}</p>
    </NavLink>
  </li>
  )
}

export default MenuItem