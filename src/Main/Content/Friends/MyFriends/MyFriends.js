import "./MyFriends.scss";
import Avatar from "../../Avatar";
import { NavLink} from "react-router-dom";



function MyFriends(props) {
  return (
    <div className="friends">
      <div className="friends_find">
        <NavLink to="friends/find" className="friends_find_button">
          Find friends
        </NavLink>
      </div>
      <ul className="friends_list">
        {props.friendsPage.friends.map((user) => (
          <li className="friends_item" key={user.id}>
            <Avatar user={user} />
            <div className="friend_name_box">
              <p className="friend_name">{user.name}</p>
              <div className ="friends_buttons">
                  {
                    user.folowed ?
                    <button className={`friend_unfollow_button`} onClick={()=>{props.followToggle(user.id)}}>Unfollow</button>
                    :<button className={`friend_follow_button`} onClick={()=>{props.followToggle(user.id)}}>Follow</button>
                  }
                </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyFriends;
