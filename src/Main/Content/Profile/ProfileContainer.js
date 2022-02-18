
import Profile from './Profile';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Preloader from '../../../common/Preloader/Preloader';
import {addPost, getUserProfile, updateEnteredPostText} from '../../../data/profile-reduser';

class ProfileContainer extends React.Component{

  componentDidMount(){
    let userId = this.props.match.params.id
    if(!userId){
      userId = this.props.authId
    }
    this.props.getUserProfile(userId);
  }

  render(){
    debugger
    if(this.props.profile && this.props.authId){
      return <Profile {...this.props}/>
    }
    return <Preloader/>
  }

}

const mapStateToProps = (state) => {
  return {
    posts:state.profilePage.posts,
    newPostText:state.profilePage.newPostText,
    profile:state.profilePage.profile,
    authId:state.auth.id
  }
}

const mapDispatchToProps = {
    updateEnteredPostText:updateEnteredPostText,
    addPost:addPost,
    getUserProfile:getUserProfile
}

const WithRouteProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps,mapDispatchToProps)(WithRouteProfileContainer);