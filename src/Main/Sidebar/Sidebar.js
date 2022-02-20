import './Sidebar.scss';
import Menu from './Menu/Menu';
import Account from './Account/Account';


function Sidebar(props) {
  return (
    <div className="sidebar">
      <Menu myId={props.myId}/>
      <Account/>
    </div>
  );
}

export default Sidebar