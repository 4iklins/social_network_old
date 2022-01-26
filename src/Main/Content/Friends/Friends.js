import "./Friends.scss";
import Avatar from "../Avatar";
import * as axios from "axios";
import React from "react";



class Friends extends React.Component {
  constructor(props){
    super(props);
    this.fetchingUsers = this.fetchingUsers.bind(this);
    this.onScroll = this.onScroll.bind(this);
  }
  componentDidMount(){
    this.fetchingUsers();
    document.addEventListener('scroll', this.onScroll);
    
  }

  componentWillUnmount(){
    document.removeEventListener('scroll',this.onScroll);
    this.props.resetUsers();
    this.props.startFetchig(true);
    this.props.setCurrentPage(1)
  }

  fetchingUsers(){
    if (this.props.fetching){
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=7&page=${this.props.currentPage}`)
      .then(responce=>{
        console.log('fetch');
        console.log(this.props.currentPage);
        this.props.setUsers(responce.data.items);
        let currentPage = this.props.currentPage + 1;
        this.props.setCurrentPage(currentPage);
      })
      .finally(()=> {this.props.stopFetchig(false)})
    }
  }

  onScroll(evt){
    if(evt.target.documentElement.scrollHeight-(evt.target.documentElement.scrollTop + window.innerHeight) < 100) {
      this.props.startFetchig(true);
      this.fetchingUsers();
    }
  }

  render(){
    return (
      <div className="friends">
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
      </div>
    );
  }
}

export default Friends;