import './Main.scss';
import Content from './Content/Content';
import Sidebar from './Sidebar/Sidebar';

function Main(props) {
  return (
    <div className="main">
      <Sidebar />
      <Content state={props.state} dispatch={props.dispatch}/>
    </div>
  );
}

export default Main