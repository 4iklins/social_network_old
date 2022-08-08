
import Profile from './Profile';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import withPreloader from '../../../hoc/withPreloader';
import {addPost, getUserProfile, setUserStatus} from '../../../data/profile-reduser';


const ProfileWithPreloader = withPreloader('profile')(Profile)

class ProfileContainer extends React.Component{

  componentDidUpdate(){
    if(this.props.profile.userId !== Number(this.props.match.params.id)){
      this.props.getUserProfile(this.props.match.params.id);
    }
  }

  componentDidMount(){
    let userId = this.props.match.params.id
    this.props.getUserProfile(userId);
  }

  render(){
      return <ProfileWithPreloader {...this.props}/>
  }

}

const mapStateToProps = (state) => {
  return {
    posts:state.profilePage.posts,
    newPostText:state.profilePage.newPostText,
    profile:state.profilePage.profile,
    status:state.profilePage.status,
    authId:state.auth.id
  }
}

const mapDispatchToProps = {
    addPost:addPost,
    getUserProfile:getUserProfile,
    setUserStatus:setUserStatus
}

export default compose(
  connect(mapStateToProps,mapDispatchToProps),
  withRouter
)(ProfileContainer)