import './Content.scss';
import DialogsContainer from './Dialogs/DialogsContainer';
import Events from './Events/Events';
import {Route} from 'react-router-dom';
import CreatePostContainer from './CreatePost/CreatePostContainer';

function Content(props) {
  return (
    <div className="content">
      <div className="main_content">
        <Route path='/newsfeed' render={ () => <CreatePostContainer store={props.store}/>}/>
        <Route path='/messages' render={ () => <DialogsContainer store={props.store}/>}/>
      </div>
      <div className="other_content">
        <Events/>
      </div>
    </div>
  );
}

export default Content