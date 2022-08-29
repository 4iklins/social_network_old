import Friends from "./Friends";
import { connect } from "react-redux";
import React, {useEffect} from "react";
import { resetUsers, setCurrentPage, isFollowingProgress, fetchUsers, follow, unFollow, isFetchingProgress } from "../../../data/friends-reducer";
import { getUsers, getCurrentPage, getTotalCount, getUsersCount, getIsFetching, getIsFollowing } from "../../../data/friends-selectors";


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
    users: getUsers(state),
    currentPage: getCurrentPage(state), 
    usersCount:getUsersCount(state),
    totalCount:getTotalCount(state),
    isFetching: getIsFetching(state),
    isFollowing:getIsFollowing(state)
  }
  
}
const mapDispatchToProps =  {

    resetUsers,
    setCurrentPage,
    isFollowingProgress,
    fetchUsers,
    isFetchingProgress,
    follow,
    unFollow

}

export default connect(mapStateToProps, mapDispatchToProps)(FriendsContainer);