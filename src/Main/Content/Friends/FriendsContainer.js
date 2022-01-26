import Friends from "./Friends";
import { connect } from "react-redux";
import { followActionCreator, resetUsersActionCreator, setUsersActioinCreator, startFetchingActionCreator, stopFetchigActionCreator, unFollowActionCreator, setCurrentPageActionCreator } from "../../../data/friends-reducer";


const mapStateToProps = (state) => {
  return {
    users: state.friendsPage.users,
    currentPage: state.friendsPage.currentPage,
    fetching: state.friendsPage.fetching
  }

}
const mapDispatchToProps = (dispatch) => {
  return {
    follow:(id)=>{dispatch(followActionCreator(id))},
    unFollow:(id)=>{dispatch(unFollowActionCreator(id))},
    setUsers: (users)=>{dispatch(setUsersActioinCreator(users))},
    resetUsers:()=>{dispatch(resetUsersActionCreator())},
    startFetchig:(fetching)=>{dispatch(startFetchingActionCreator(fetching))},
    stopFetchig:(fetching)=>{dispatch(stopFetchigActionCreator(fetching))},
    setCurrentPage:(currentPage)=>{dispatch(setCurrentPageActionCreator(currentPage))}
  }
}
const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;