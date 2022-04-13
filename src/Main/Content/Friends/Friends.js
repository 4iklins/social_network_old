import "./Friends.scss";
import Avatar from "../Avatar";
import React from "react";
import Preloader from "../../../common/Preloader/Preloader";
import { NavLink } from "react-router-dom";

function Friends(props) {

  return (
    <div className="friends">
      {props.isFetching ? <Preloader /> : null}
      <ul className="friends_list">
        {props.users.map((user) => (
          <li className="friends_item" key={user.id}>
            <NavLink to={`profile/${user.id}`}>
              <Avatar user={user} />
            </NavLink>
            <div className="friend_name_box">
              <p className="friend_name">{user.name}</p>
              <div className="friends_buttons">
                {
                user.followed ? 
                <button className={`friend_unfollow_button`} disabled = {props.isFollowing.some(id =>id === user.id)} onClick={() => {props.unFollow(user.id)}}>Unfollow</button>
                 : 
                <button className={`friend_follow_button`} disabled = {props.isFollowing.some(id =>id === user.id)} onClick={() => {props.follow(user.id)}}>Follow</button>
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
