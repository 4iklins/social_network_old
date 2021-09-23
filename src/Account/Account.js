import './Account.scss';
import MenuItem from '../Menu/MenuItem/MenuItem';

function Account() {
  return (
    <div className="account">
      <p className="account_description">Account</p>
      <ul className="account_list">
        <MenuItem text="settings"/>
        <MenuItem text="analytics"/>
        </ul>
    </div>
  );
}

export default Account