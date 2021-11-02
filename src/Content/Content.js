import './Content.scss';
import CreatePost from '../Create_post/Create_post';
import Dialogs from '../Dialogs/Dialogs';
import Events from '../Events/Events';
import {Route} from 'react-router-dom';

function Content(props) {
  return (
    <div className="content">
      <div className="main_content">
        <Route path='/newsfeed' render={ () => <CreatePost state={props.state} dispatch={props.dispatch}/>}/>
        <Route path='/messages' render={ () => <Dialogs state={props.state} dispatch={props.dispatch}/>}/>
      </div>
      <div className="other_content">
        <Events/>
      </div>
    </div>
  );
}

export default Content