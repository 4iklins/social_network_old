import Friends from "./Friends";
import { connect } from "react-redux";
import React from "react";
import * as axios from "axios";
import { followActionCreator, resetUsersActionCreator, setUsersActioinCreator, unFollowActionCreator, setCurrentPageActionCreator, setTotalCountActionCreator } from "../../../data/friends-reducer";


class FriendsContainer extends React.Component {
  constructor(props){
    super(props);
    this.fetchingUsers = this.fetchingUsers.bind(this);
    this.onScroll = this.onScroll.bind(this);
  }
  componentDidMount(){
    this.fetchingUsers();
    document.addEventListener('scroll',this.onScroll);
  }

  componentWillUnmount(){
    document.removeEventListener('scroll', this.onScroll);
    this.props.resetUsers();
    this.props.setCurrentPage(1);
  }

  onScroll(evt){
    let totalPages = Math.ceil(this.props.totalCount / this.props.usersCount)
    let scrollHeight = evt.target.documentElement.scrollHeight - (evt.target.documentElement.scrollTop + window.innerHeight)
    if(scrollHeight < 100 && this.props.currentPage <= totalPages){
      document.removeEventListener('scroll', this.onScroll);
      let currentPage = this.props.currentPage + 1;
      this.props.setCurrentPage(currentPage);
      this.fetchingUsers();
    }
  }

  fetchingUsers(){
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=7&page=${this.props.currentPage}`)
      .then(responce=>{
        this.props.setUsers(responce.data.items);
        this.props.setTotalCount(responce.data.totalCount);
        document.addEventListener('scroll',this.onScroll);
      })
  }

  render(){
    return (
      <Friends users={this.props.users}
               currentPage={this.props.currentPage}
               follow={this.props.follow}
               unFollow={this.props.unFollow}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.friendsPage.users,
    currentPage: state.friendsPage.currentPage,
    usersCount:state.friendsPage.usersCount,
    totalCount:state.friendsPage.totalCount
  }

}
const mapDispatchToProps = (dispatch) => {
  return {
    follow:(id)=>{dispatch(followActionCreator(id))},
    unFollow:(id)=>{dispatch(unFollowActionCreator(id))},
    setUsers: (users)=>{dispatch(setUsersActioinCreator(users))},
    resetUsers:()=>{dispatch(resetUsersActionCreator())},
    setCurrentPage:(currentPage)=>{dispatch(setCurrentPageActionCreator(currentPage))},
    setTotalCount:(totalCount)=>{dispatch(setTotalCountActionCreator(totalCount))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendsContainer);