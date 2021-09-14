import './Header.css';
import logo from '../img/logo.svg';
import RoundBtn from '../Round_btn/Round_btn';


function Header() {
  return (
    <header className="header">
      <div className="header_wrapper">
        <div className="header_logo">
          <a href="#index.html">
            <div className="header_logo_icon">
              <img src={logo} alt="" />
            </div>
            <div className="header_logo_name">Bor</div>
          </a>
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