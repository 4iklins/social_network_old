import './Sidebar.css';
import SidebarMenu from '../Menu/Menu';
import Account from '../Account/Account';


function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarMenu />
      <Account/>
    </div>
  );
}

export default Sidebar