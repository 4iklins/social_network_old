import './Content.scss';
import DialogsContainer from './Dialogs/DialogsContainer';
import Events from './Events/Events';
import {Route} from 'react-router-dom';
import ProfileContainer from './Profile/ProfileContainer';
import FriendsContainer from './Friends/FriendsContainer';

function Content() {
  return (
    <div className="content">
      <div className="main_content">
        <Route path='/profile' render={ () => <ProfileContainer />}/>
        <Route path='/messages' render={ () => <DialogsContainer />}/>
        <Route path ='/friends' render= { () => <FriendsContainer/>}/>
      </div>
      <div className="other_content">
        <Events/>
      </div>
    </div>
  );
}

export default Content