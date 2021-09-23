import './Header.scss';
import logo from '../img/logo.svg';
import RoundBtn from '../RoundBtn/RoundBtn';
import {NavLink} from 'react-router-dom';


function Header() {
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
            <RoundBtn />
          </div>
          <div className="header_user">
            <RoundBtn />
          </div>
        </div>

      </div>
    </header>
  )
}

export default Header;