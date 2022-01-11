import './Main.scss';
import Content from './Content/Content';
import Sidebar from './Sidebar/Sidebar';

function Main(props) {
  return (
    <div className="main">
      <Sidebar />
      <Content store={props.store}/>
    </div>
  );
}

export default Main