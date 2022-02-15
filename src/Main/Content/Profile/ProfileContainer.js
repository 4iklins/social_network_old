
import Profile from './Profile';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Preloader from '../../../common/Preloader/Preloader';
import {addPost, getUserProfile, updateEnteredPostText} from '../../../data/profile-reduser';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component{

  componentDidMount(){
    let userId = this.props.match.params.id
    if(!userId){
      userId = 21869
    }
    this.props.getUserProfile(userId);
  }

  render(){
    if(!this.props.profile){
      return <Preloader/>
    }
    return (
      <Profile {...this.props}/>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    posts:state.profilePage.posts,
    newPostText:state.profilePage.newPostText,
    profile:state.profilePage.profile
  }
}

const mapDispatchToProps = {
    updateEnteredPostText:updateEnteredPostText,
    addPost:addPost,
    getUserProfile:getUserProfile
}

const WithRouteProfileContainer = withRouter(withAuthRedirect(ProfileContainer));

export default connect(mapStateToProps,mapDispatchToProps)(WithRouteProfileContainer);