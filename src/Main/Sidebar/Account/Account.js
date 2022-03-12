import './Account.scss';
import MenuItem from '../Menu/MenuItem/MenuItem';
import settingsIcon from '../../../img/settings_icon.svg';
import analyticsIcon from '../../../img/analytics_icon.svg';

function Account() {
  return (
    <div className="account">
      <p className="account_description">Account</p>
      <ul className="account_list">
        <MenuItem text="settings" icon={settingsIcon}/>
        <MenuItem text="analytics" icon={analyticsIcon}/>
        </ul>
    </div>
  );
}

export default Account