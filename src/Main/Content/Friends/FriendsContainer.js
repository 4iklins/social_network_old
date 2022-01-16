import Friends from "./Friends";
import { connect } from "react-redux";
import { followToggleActionCreator} from "../../../data/friends-reducer";


const mapStateToProps = (state) => {
  return {friendsPage: state.friendsPage}
}
const mapDispatchToProps = (dispatch) => {
  return {
    followToggle:(id,list)=>{dispatch(followToggleActionCreator(id))}
  }
}
const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;