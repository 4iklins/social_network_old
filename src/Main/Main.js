import './Main.scss';
import Content from './Content/Content';
import Sidebar from './Sidebar/Sidebar';

function Main(props) {
  return (
    <main className="main">
      <Sidebar myId={props.id}/>
      <Content myId={props.id}/>
    </main>
  );
}

export default Main