import './Menu.scss';
import MenuItem from './MenuItem/MenuItem';


function Menu() {
  return (
    <div className="menu">
      <div className="menu_description"></div>
      <ul className="menu_list">
        <MenuItem text="profile"/>
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