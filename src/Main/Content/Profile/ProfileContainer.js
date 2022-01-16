
import Profile from './Profile';
import { connect } from 'react-redux';
import {addPostActionCreator, updateEnteredPostTextActionCreator} from '../../../data/profile-reduser'

const mapStateToProps = (state) => {
  return {profilePage:state.profilePage}
}

const mapDispatchToProps = (dispatch) => {
  return {
    enteredTextChange:(text) => {dispatch(updateEnteredPostTextActionCreator(text))},
    addPost:() => {dispatch(addPostActionCreator())}
  }
}

const ProfileContainer = connect(mapStateToProps,mapDispatchToProps)(Profile);

export default ProfileContainer;