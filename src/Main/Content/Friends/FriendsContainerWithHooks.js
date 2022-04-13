import Friends from "./Friends";
import { connect } from "react-redux";
import React, {useEffect} from "react";
import { followToggle, resetUsers, setCurrentPage, isFollowingProgress, fetchUsers, follow, unFollow, isFetchingProgress } from "../../../data/friends-reducer";


const FriendsContainer = (props) => {

  useEffect(()=>{
    document.addEventListener('scroll',onScroll);
    return ()=>{
      document.removeEventListener('scroll', onScroll);
    }
  },[props.totalCount, props.currentPage]);

  useEffect(()=>{
    if(props.isFetching){
      console.log('fetch')
      props.fetchUsers(props.currentPage);
    }
  },[props.isFetching])

  function onScroll(evt) {
    let totalPages = Math.ceil(props.totalCount / props.usersCount);
    let scrollHeight = evt.target.documentElement.scrollHeight - (evt.target.documentElement.scrollTop + window.innerHeight);
    if(scrollHeight < 100 && props.currentPage <= totalPages){
      props.isFetchingProgress(true);
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
    isFetchingProgress:isFetchingProgress,
    follow:follow,
    unFollow:unFollow

}

export default connect(mapStateToProps, mapDispatchToProps)(FriendsContainer);