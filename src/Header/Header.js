import './Header.scss';
import logo from '../img/logo.svg';
import RoundBtn from '../common/RoundBtn/RoundBtn';
import Avatar from '../Main/Content/Avatar';
import {NavLink} from 'react-router-dom';
import settingsIcon from '../img/settings_icon.svg';
import userIcon from '../img/user_icon.svg';


function Header(props) {
  return (
    <header className="header">
      <div className="header_wrapper">
        <div className="header_logo">
          <NavLink to="/">
            <div className="header_logo_icon">
              <img src={logo} alt="" />
            </div>
            <div className="header_logo_name">Bor</div>
          </NavLink>
        </div>
        <div className="header_menu">
          <div className="header_settings">
            <NavLink to ="/settings">
              <RoundBtn icon={settingsIcon} type="button" />
            </NavLink>
          </div>
          <div className="header_user">
            {props.isAuth && props.profile
            ?<div onClick={props.logout}>
              <Avatar user={props.profile}/>
              <p className='heager_logout'>Logout</p>
            </div>
            :<RoundBtn icon={userIcon} type="button"/>
            }
          </div>
        </div>

      </div>
    </header>
  )
}

export default Header;