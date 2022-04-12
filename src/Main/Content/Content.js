import './Content.scss';
import DialogsContainer from './Dialogs/DialogsContainer';
import Events from './Events/Events';
import {Route} from 'react-router-dom';
import ProfileContainer from './Profile/ProfileContainer';
import FriendsContainer from './Friends/FriendsContainer';
import FriendsContainerWithHooks from './Friends/FriendsContainerWithHooks';

function Content() {
  return (
    <div className="content">
      <div className="main_content">
        <Route path='/profile/:id?' render={ () => <ProfileContainer />}/>
        <Route path='/messages/:dialog?/:id?' render={ () => <DialogsContainer />}/>
        <Route path ='/friends' render= { () => <FriendsContainerWithHooks/>}/>
      </div>
      <div className="other_content">
        <Events/>
      </div>
    </div>
  );
}

export default Content