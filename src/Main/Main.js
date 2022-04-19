import './Main.scss';
import Content from './Content/Content';
import Sidebar from './Sidebar/Sidebar';

function Main(props) {
  return (
    <main className="main">
      <Sidebar myId={props.id}/>
      <Content />
    </main>
  );
}

export default Main