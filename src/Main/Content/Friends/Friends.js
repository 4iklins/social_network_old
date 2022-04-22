import "./Friends.scss";
import Avatar from "../../../common/Avatar/Avatar";
import React from "react";
import Preloader from "../../../common/Preloader/Preloader";
import { NavLink } from "react-router-dom";

function Friends(props) {

  return (
    <div className="friends">
      {props.isFetching ? <Preloader /> : null}
      <ul className="friends__list">
        {props.users.map((user) => (
          <li className="friends__item" key={user.id}>
            <NavLink to={`profile/${user.id}`}>
              <Avatar user={user} big={true}/>
            </NavLink>
            <div className="friend__name-box">
              <p className="friend__name">{user.name}</p>
              <div className="friends__follow-buttons">
                {
                user.followed ? 
                <button className={`friends__unfollow-button`} disabled = {props.isFollowing.some(id =>id === user.id)} onClick={() => {props.unFollow(user.id)}}>Unfollow</button>
                 : 
                <button className={`friends__follow-button`} disabled = {props.isFollowing.some(id =>id === user.id)} onClick={() => {props.follow(user.id)}}>Follow</button>
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
