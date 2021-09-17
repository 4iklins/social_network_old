import './Main.scss';
import Content from '../Content/Content';
import Sidebar from '../Sidebar/Sidebar';

function Main() {
  return (
    <div className="main">
      <Sidebar />
      <Content />
    </div>
  );
}

export default Main