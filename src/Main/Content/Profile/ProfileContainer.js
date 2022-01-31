
import Profile from './Profile';
import { connect } from 'react-redux';
import {addPost, updateEnteredPostText} from '../../../data/profile-reduser'

const mapStateToProps = (state) => {
  return {profilePage:state.profilePage}
}

const mapDispatchToProps = {
    updateEnteredPostText:updateEnteredPostText,
    addPost:addPost
}

const ProfileContainer = connect(mapStateToProps,mapDispatchToProps)(Profile);

export default ProfileContainer;