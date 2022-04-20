import './MenuItem.scss';
import {NavLink} from 'react-router-dom';
import classNames from 'classnames';


function MenuItem (props){
  const url = props.myId ? `/${props.text}/${props.myId}`: `/${props.text}`
  return(
    <li className= {classNames("menu-item", "menu__item", "account__item")}>
    <NavLink  to={url}>
      <img src={props.icon} alt={props.text}></img>
      <p className="menu-item-text">{props.text}</p>
    </NavLink>
  </li>
  )
}

export default MenuItem