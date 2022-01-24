import "./Friends.scss";
import Avatar from "../Avatar";
import * as axios from "axios";
import React from "react";



class Friends extends React.Component {

  componentDidMount(){
    axios.get("https://social-network.samuraijs.com/api/1.0/users")
    .then(responce=>{
      console.log(responce.data.items)
      this.props.setUsers(responce.data.items)
    })
  }

  render(){
    return (
      <div className="friends">
        <ul className="friends_list">
          {this.props.friendsPage.users.map((user) => (
            <li className="friends_item" key={user.id}>
              <Avatar user={user} />
              <div className="friend_name_box">
                <p className="friend_name">{user.name}</p>
                <div className ="friends_buttons">
                    {
                      user.folowed ?
                      <button className={`friend_unfollow_button`} onClick={()=>{this.props.unFollow(user.id)}}>Unfollow</button>
                      :<button className={`friend_follow_button`} onClick={()=>{this.props.follow(user.id)}}>Follow</button>
                    }
                  </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Friends;