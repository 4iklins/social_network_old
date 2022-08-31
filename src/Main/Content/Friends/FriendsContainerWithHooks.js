import Friends from "./Friends";
import { connect } from "react-redux";
import React, {useEffect, useRef} from "react";
import { resetUsers, setCurrentPage, isFollowingProgress, fetchUsers, follow, unFollow, isFetchingProgress } from "../../../data/friends-reducer";
import { getUsers, getCurrentPage, getTotalCount, getUsersCount, getIsFetching, getIsFollowing } from "../../../data/friends-selectors";


const FriendsContainer = (props) => {
  // реализация бесконечного скролла, с помощью IntersectionObserver
  const lastUser = useRef();
  const callback = ([entry],observer) => {
    let totalPages = Math.ceil(props.totalCount / props.usersCount);
    if(entry.isIntersecting){
      observer.unobserve(entry.target);
      if(props.currentPage <= totalPages) props.isFetchingProgress(true);
    }
  };

  useEffect(()=>{
    const usersObserver = new IntersectionObserver (callback);
    const lastUserCuerrent = lastUser.current;
    if(lastUserCuerrent) usersObserver.observe(lastUserCuerrent);
    
    return () => {
        if(lastUserCuerrent)usersObserver.unobserve(lastUserCuerrent);
    }
  },[props.users,props.totalCount]);

  // реализация бесконечного скролла, через обработчик событий scroll и оперделения нижнего края страницы
  // useEffect(()=>{
  //   document.addEventListener('scroll',onScroll);
  //   return ()=>{
  //     document.removeEventListener('scroll', onScroll);
  //   }
  // },[props.totalCount, props.currentPage]);
  // function onScroll(evt) {
  //   let totalPages = Math.ceil(props.totalCount / props.usersCount);
  //   let scrollHeight = evt.target.documentElement.scrollHeight - (evt.target.documentElement.scrollTop + window.innerHeight);
  //   if(scrollHeight < 100 && props.currentPage <= totalPages){
  //     props.isFetchingProgress(true);
  //   }
  // }

  useEffect(()=>{
    if(props.isFetching){
      props.fetchUsers(props.currentPage);
    }
  },[props.isFetching]);



    return (
      <Friends {...props} ref={lastUser}/>
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
  
};

const mapDispatchToProps =  {

    resetUsers,
    setCurrentPage,
    isFollowingProgress,
    fetchUsers,
    isFetchingProgress,
    follow,
    unFollow

};

export default connect(mapStateToProps, mapDispatchToProps)(FriendsContainer);