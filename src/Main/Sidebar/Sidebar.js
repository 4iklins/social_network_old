import './Sidebar.scss';
import Menu from './Menu/Menu';
import Account from './Account/Account';


function Sidebar() {
  return (
    <div className="sidebar">
      <Menu />
      <Account/>
    </div>
  );
}

export default Sidebar