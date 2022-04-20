import './Sidebar.scss';
import Menu from './Menu/Menu';
import Account from './Account/Account';


function Sidebar(props) {
  return (
    <aside className="sidebar">
      <Menu myId={props.myId}/>
      <Account/>
    </aside>
  );
}

export default Sidebar