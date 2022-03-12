import './MenuItem.scss';
import {NavLink} from 'react-router-dom';


function MenuItem (props){
  const url = props.myId ? `/${props.text}/${props.myId}`: `/${props.text}`
  return(
    <li className="menu_item">
    <NavLink  to={url}>
      <img src={props.icon}></img>
      <p>{props.text}</p>
    </NavLink>
  </li>
  )
}

export default MenuItem