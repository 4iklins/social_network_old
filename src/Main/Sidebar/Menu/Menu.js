import './Menu.scss';
import MenuItem from './MenuItem/MenuItem';


function Menu(props) {
  return (
    <div className="menu">
      <div className="menu_description"></div>
      <ul className="menu_list">
        <MenuItem text="profile" myId={props.myId}/>
        <MenuItem text="messages"/>
        <MenuItem text="friends"/>
        <MenuItem text="images"/>
        <MenuItem text="music"/>
        <MenuItem text="video"/>
      </ul>
    </div>
  );
}

export default Menu