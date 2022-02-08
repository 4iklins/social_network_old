import "./Friends.scss";
import Avatar from "../Avatar";
import React from "react";
import Preloader from "../../../common/Preloader/Preloader";
import { NavLink } from "react-router-dom";
import {postFollow ,deleteFollow} from "../../../api/api";


function Friends(props) {

  function onFolowClick (user){
    props.isFollowingProgress(true, user)
    postFollow(user)
    .then((response) => {
      if(response.resultCode === 0)
      props.follow(user);
      props.isFollowingProgress(false, user)
    });
  }

  function onUnfolowClick (user){
    props.isFollowingProgress(true, user)
    deleteFollow(user)
    .then((response) => {
      if(response.resultCode === 0)
      props.unFollow(user);
      props.isFollowingProgress(false, user)
    });
  }

  return (
    <div className="friends">
      {props.isFetching ? <Preloader /> : null}
      <div className="current-page">{props.currentPage}</div>
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
                <button className={`friend_unfollow_button`} disabled = {props.isFollowing.some(id =>id === user.id)} onClick={() => {onUnfolowClick(user.id)}}>Unfollow</button>
                 : 
                <button className={`friend_follow_button`} disabled = {props.isFollowing.some(id =>id === user.id)} onClick={() => {onFolowClick(user.id)}}>Follow</button>
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
