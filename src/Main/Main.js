import './Main.css';
import Content from '../Content/Content';
import Sidebar from '../Sidebar/Sidebar';

function Main() {
  return (
    <div className="Main">
      <Sidebar />
      <Content />
    </div>
  );
}

export default Main