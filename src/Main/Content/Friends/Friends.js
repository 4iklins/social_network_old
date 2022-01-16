import MyFriends from "./MyFriends/MyFriends";
import FindFriends from "./FindFriends/FindFriends";
import {Route} from 'react-router-dom';


function Friends (props) {
  return(
    <div>
      <Route exact path="/friends" render={() => <MyFriends friendsPage={props.friendsPage} followToggle={props.followToggle}/>}/>
      <Route path="/friends/find" render= {() => <FindFriends friendsPage={props.friendsPage} followToggle={props.followToggle}/>}/>
    </div>
  )
}

export default Friends