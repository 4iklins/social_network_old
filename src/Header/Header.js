import './Header.scss';
import logo from '../img/logo.svg';
import RoundBtn from '../common/RoundBtn/RoundBtn';
import Avatar from '../common/Avatar/Avatar';
import {NavLink} from 'react-router-dom';
import userIcon from '../img/user_icon.svg';


function Header(props) {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__logo">
          <NavLink to="/">
            <div className="header__logo-icon">
              <img src={logo} alt="" />
            </div>
            <div className="header__logo-name">Bor</div>
          </NavLink>
        </div>
        <div className="header__menu">
          <div className="header__user">
            {props.isAuth && props.myProfile
            ?<div onClick={props.logout} className="header__user-icon">
              <Avatar userName={props.myProfile.fullName} photo={props.myProfile.photos.small}/>
              <p className='heager__logout'>Logout</p>
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