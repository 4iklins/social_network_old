import './Main.scss';
import Content from '../Content/Content';
import Sidebar from '../Sidebar/Sidebar';

function Main(props) {
  return (
    <div className="main">
      <Sidebar />
      <Content state={props.state} newPost={props.newPost} updateEnteredPostText={props.updateEnteredPostText}/>
    </div>
  );
}

export default Main