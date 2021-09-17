import './Account.scss';
import SmallBtn from '../Small_btn/Small_btn';

function Account() {
  return (
    <div className="account">
      <p className="account_description">Account</p>
      <ul className="account_list">
        <li className="account_item">
          <a href="">
            <div className="account_item_settings">
              <SmallBtn />
            </div>
            <p>Settings</p>
          </a>
        </li>
        <li className="account_item">
          <a href="">
            <div className="account_item_analytics">
              <SmallBtn />
            </div>
            <p>Analytics</p>
          </a>
        </li>
        </ul>
    </div>
  );
}

export default Account