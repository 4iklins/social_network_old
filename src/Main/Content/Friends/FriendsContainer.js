import Friends from "./Friends";
import { connect } from "react-redux";
import { followActionCreator, setUsersActioinCreator, unFollowActionCreator } from "../../../data/friends-reducer";


const mapStateToProps = (state) => {
  return {friendsPage: state.friendsPage}
}
const mapDispatchToProps = (dispatch) => {
  return {
    follow:(id)=>{dispatch(followActionCreator(id))},
    unFollow:(id)=>{dispatch(unFollowActionCreator(id))},
    setUsers: (users)=>{dispatch(setUsersActioinCreator(users))}
  }
}
const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;