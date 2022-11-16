import './Content.scss';
import { lazy } from 'react';
import DialogsContainer from './Dialogs/DialogsContainer';
import Events from './Events/Events';
import {Redirect, Route} from 'react-router-dom';
import ProfileContainer from './Profile/ProfileContainer';
import FriendsContainer from './Friends/FriendsContainer';
import FriendsContainerWithHooks from './Friends/FriendsContainerWithHooks';

function Content(props) {
  return (
    <section className="content">
      <div className="content__main">
        <Route exact path='/' render={()=> <Redirect to={`/profile/${props.myId}`}/>}/>
        <Route path='/profile/:id' render={ () => <ProfileContainer />}/>
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