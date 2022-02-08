import './MenuItem.scss';
import {NavLink} from 'react-router-dom';
import SmallIcon from '../../../../common/SmallIcon/SmallIcon';

function MenuItem (props){
  return(
    <li className="menu_item">
    <NavLink  to={"/" + props.text}>
      <div className={"menu_item_" + props.text}>
        <SmallIcon />
      </div>
      <p>{props.text}</p>
    </NavLink>
  </li>
  )
}

export default MenuItem