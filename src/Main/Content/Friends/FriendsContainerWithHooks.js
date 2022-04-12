import Friends from "./Friends";
import { connect } from "react-redux";
import React, {useEffect} from "react";
import { followToggle, resetUsers, setCurrentPage, isFollowingProgress, fetchUsers, follow, unFollow } from "../../../data/friends-reducer";


const FriendsContainer = (props) => {

  useEffect(()=>{
    props.fetchUsers(props.currentPage);
    document.addEventListener('scroll',onScroll);
    return ()=>{
      document.removeEventListener('scroll', onScroll);
      props.resetUsers();
      props.setCurrentPage(1);
    }
  },[]);

  function onScroll(evt) {
    let totalPages = Math.ceil(props.totalCount / props.usersCount);
    let scrollHeight = evt.target.documentElement.scrollHeight - (evt.target.documentElement.scrollTop + window.innerHeight);
    if(scrollHeight < 100 && props.currentPage <= totalPages){
      document.removeEventListener('scroll', onScroll);
      let currentPage = props.currentPage + 1;
      props.setCurrentPage(currentPage);
      props.fetchUsers(currentPage, onScroll);
    }
  }

    return (
      <Friends {...props}/>
    );
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