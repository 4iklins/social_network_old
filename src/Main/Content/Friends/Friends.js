import "./Friends.scss";
import Avatar from "../Avatar";
import * as axios from "axios";
import React from "react";



class Friends extends React.Component {
  constructor(props){
    super(props);
    this.fetchingUsers = this.fetchingUsers.bind(this);
  }
  componentDidMount(){
    this.fetchingUsers();
  }

  componentWillUnmount(){
    this.props.resetUsers();
    this.props.setCurrentPage(1)
  }

  fetchingUsers(){
    let currentPage = this.props.currentPage + 1;
    this.props.setCurrentPage(currentPage);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=7&page=${currentPage}`)
    .then(responce=>{
      this.props.setUsers(responce.data.items);
      // this.props.setTotalCount(responce.data.totalCount)
    })
  }

  render(){
    return (
      <div className="friends">
        <div className="current-page">{this.props.currentPage}</div>
        <ul className="friends_list">
          {this.props.users.map((user) => (
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
        <button className="load-more-users" onClick={this.fetchingUsers}>Load more</button>
      </div>
    );
  }
}

export default Friends;