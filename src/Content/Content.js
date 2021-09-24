import './Content.scss';
import CreatePost from '../Create_post/Create_post';
import Messages from '../Messages/Messages';
import Events from '../Events/Events';
import {Route} from 'react-router-dom';

function Content(props) {
  return (
    <div className="content">
      <div className="main_content">
        <Route path='/newsfeed' render={ () => <CreatePost postsData={props.postsData}/>}/>
        <Route path='/messages' component={Messages}/>
      </div>
      <div className="other_content">
        <Events/>
      </div>
    </div>
  );
}

export default Content