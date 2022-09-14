import "./Friends.scss";
import Avatar from "../../../common/Avatar/Avatar";
import React from "react";
import Preloader from "../../../common/Preloader/Preloader";
import { NavLink } from "react-router-dom";

const Friends = React.forwardRef((props,ref) => {
  return (
    <div className="friends">
      {props.isFetching ? <Preloader /> : null}
      <ul className="friends__list">
        {props.users.map((user,i) => (
          <li className="friends__item" ref={i === props.users.length-1 ? ref : null}>
            <NavLink to={`profile/${user.id}`}>
              <Avatar userName={user.name} photo={user.photos.small} size="big"/>
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
})

export default Friends;
