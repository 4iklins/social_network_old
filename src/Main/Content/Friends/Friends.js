import "./Friends.scss";
import Avatar from "../Avatar";
import React from "react";


function Friends (props) {
  return (
    <div className="friends">
      <div className="current-page">{props.currentPage}</div>
      <ul className="friends_list">
        {props.users.map((user) => (
          <li className="friends_item" key={user.id}>
            <Avatar user={user} />
            <div className="friend_name_box">
              <p className="friend_name">{user.name}</p>
              <div className ="friends_buttons">
                  {
                    user.folowed ?
                    <button className={`friend_unfollow_button`} onClick={()=>{props.unFollow(user.id)}}>Unfollow</button>
                    :<button className={`friend_follow_button`} onClick={()=>{props.follow(user.id)}}>Follow</button>
                  }
                </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default Friends;