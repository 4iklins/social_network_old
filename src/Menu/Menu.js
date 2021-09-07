import './Menu.css';
import RoundBtn from '../Round_btn/Round_btn';


function Menu() {
  return (
    <div className="Menu">
      <div className="menu_description"></div>
      <ul className="menu_list">
        <li className="menu_item">
          <a href="">
            <div className="menu_item_newsfeed">
              <RoundBtn />
            </div>
            <p>Newsfeed</p>
          </a>
        </li>
        <li className="menu_item">
          <a href="">
            <div className="menu_item_message">
              <RoundBtn />
            </div>
            <p>Message</p>
          </a>
        </li>
        <li className="menu_item">
          <a href="">
            <div className="menu_item_images">
              <RoundBtn />
            </div>
            <p>Images</p>
          </a>
        </li>
        <li className="menu_item">
          <a href="">
            <div className="menu_item_music">
              <RoundBtn />
            </div>
            <p>Music</p>
          </a>
        </li>
        <li className="menu_item">
          <a href="">
            <div className="menu_item_video">
              <RoundBtn />
            </div>
            <p>Video</p>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Menu