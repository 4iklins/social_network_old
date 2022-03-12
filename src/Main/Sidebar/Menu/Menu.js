import './Menu.scss';
import MenuItem from './MenuItem/MenuItem';
import profileIcon from '../../../img/logo.svg';
import messageIcon from '../../../img/message_icon.svg';
import friendIcon from '../../../img/friend_icon.svg';
import imageIcon from '../../../img/image_icon.svg';
import videoIcon from '../../../img/video_icon.svg';
import musicIcon from '../../../img/music_icon.svg';


function Menu(props) {
  return (
    <div className="menu">
      <div className="menu_description"></div>
      <ul className="menu_list">
        <MenuItem text="profile" myId={props.myId} icon={profileIcon}/>
        <MenuItem text="messages" icon={messageIcon}/>
        <MenuItem text="friends" icon={friendIcon}/>
        <MenuItem text="images" icon={imageIcon}/>
        <MenuItem text="music" icon={musicIcon}/>
        <MenuItem text="video" icon={videoIcon}/>
      </ul>
    </div>
  );
}

export default Menu