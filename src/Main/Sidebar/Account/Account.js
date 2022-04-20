import './Account.scss';
import MenuItem from '../Menu/MenuItem/MenuItem';
import settingsIcon from '../../../img/settings_icon.svg';
import analyticsIcon from '../../../img/analytics_icon.svg';

function Account() {
  return (
    <nav className="account">
      <p className="account__description">Account</p>
      <ul className="account__list">
        <MenuItem text="settings" icon={settingsIcon}/>
        <MenuItem text="analytics" icon={analyticsIcon}/>
        </ul>
    </nav>
  );
}

export default Account