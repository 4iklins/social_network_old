import './Header.scss';
import logo from '../img/logo.svg';
import RoundBtn from '../common/RoundBtn/RoundBtn';
import Avatar from '../Main/Content/Avatar';
import {NavLink} from 'react-router-dom';


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
              <RoundBtn />
            </NavLink>
          </div>
          <div className="header_user">
            {props.isAuth && props.profile
            ?<NavLink to="/logout">
              <Avatar user={props.profile}/>
             </NavLink>
            :<NavLink to ="/login">
              <RoundBtn />
            </NavLink>}
          </div>
        </div>

      </div>
    </header>
  )
}

export default Header;