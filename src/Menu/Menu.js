import './Menu.scss';
import SmallBtn from '../Small_btn/Small_btn';
import {NavLink} from 'react-router-dom';


function Menu() {
  return (
    <div className="menu">
      <div className="menu_description"></div>
      <ul className="menu_list">
        <li className="menu_item">
          <NavLink  to="/newsfeed">
            <div className="menu_item_newsfeed">
              <SmallBtn />
            </div>
            <p>Newsfeed</p>
          </NavLink>
        </li>
        <li className="menu_item">
          <a href="/messages">
            <div className="menu_item_message">
              <SmallBtn />
            </div>
            <p>Messages</p>
          </a>
        </li>
        <li className="menu_item">
          <a href="">
            <div className="menu_item_friends">
              <SmallBtn />
            </div>
            <p>Friends</p>
          </a>
        </li>
        <li className="menu_item">
          <a href="">
            <div className="menu_item_images">
              <SmallBtn />
            </div>
            <p>Images</p>
          </a>
        </li>
        <li className="menu_item">
          <a href="">
            <div className="menu_item_music">
              <SmallBtn />
            </div>
            <p>Music</p>
          </a>
        </li>
        <li className="menu_item">
          <a href="">
            <div className="menu_item_video">
              <SmallBtn />
            </div>
            <p>Video</p>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Menu