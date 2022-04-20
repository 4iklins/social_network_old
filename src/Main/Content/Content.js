import './Content.scss';
import DialogsContainer from './Dialogs/DialogsContainer';
import Events from './Events/Events';
import {Route} from 'react-router-dom';
import ProfileContainer from './Profile/ProfileContainer';
import FriendsContainer from './Friends/FriendsContainer';
import FriendsContainerWithHooks from './Friends/FriendsContainerWithHooks';

function Content() {
  return (
    <section className="content">
      <div className="content__main">
        <Route path='/profile/:id?' render={ () => <ProfileContainer />}/>
        <Route path='/messages/:dialog?/:id?' render={ () => <DialogsContainer />}/>
        <Route path ='/friends' render= { () => <FriendsContainerWithHooks/>}/>
      </div>
      <aside className="content__other">
        <Events/>
      </aside>
    </section>
  );
}

export default Content