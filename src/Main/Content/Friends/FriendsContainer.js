import Friends from "./Friends";
import { connect } from "react-redux";
import React from "react";
import { followToggle, resetUsers, setCurrentPage, isFollowingProgress, fetchUsers, follow, unFollow } from "../../../data/friends-reducer";


class FriendsContainer extends React.Component {
  constructor(props){
    super(props);
    this.onScroll = this.onScroll.bind(this);
  }
  componentDidMount(){
    this.props.fetchUsers(this.props.currentPage);
    document.addEventListener('scroll',this.onScroll);
  }

  componentWillUnmount(){
    document.removeEventListener('scroll', this.onScroll);
    this.props.resetUsers();
    this.props.setCurrentPage(1);
  }

  onScroll(evt){
    let totalPages = Math.ceil(this.props.totalCount / this.props.usersCount);
    let scrollHeight = evt.target.documentElement.scrollHeight - (evt.target.documentElement.scrollTop + window.innerHeight);
    if(scrollHeight < 100 && this.props.currentPage <= totalPages){
      document.removeEventListener('scroll', this.onScroll);
      let currentPage = this.props.currentPage + 1;
      this.props.setCurrentPage(currentPage);
      this.props.fetchUsers(currentPage, this.onScroll);
    }
  }

  render(){
    return (
      <Friends {...this.props}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.friendsPage.users,
    currentPage: state.friendsPage.currentPage,
    usersCount:state.friendsPage.usersCount,
    totalCount:state.friendsPage.totalCount,
    isFetching: state.friendsPage.isFetching,
    isFollowing:state.friendsPage.isFollowing
  }

}
const mapDispatchToProps =  {

    followToggle:followToggle,
    resetUsers:resetUsers,
    setCurrentPage:setCurrentPage,
    isFollowingProgress:isFollowingProgress,
    fetchUsers:fetchUsers,
    follow:follow,
    unFollow:unFollow

}

export default connect(mapStateToProps, mapDispatchToProps)(FriendsContainer);