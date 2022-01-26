import Friends from "./Friends";
import { connect } from "react-redux";
import { followActionCreator, resetUsersActionCreator, setUsersActioinCreator, unFollowActionCreator, setCurrentPageActionCreator, setTotalCountActionCreator } from "../../../data/friends-reducer";


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
const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;