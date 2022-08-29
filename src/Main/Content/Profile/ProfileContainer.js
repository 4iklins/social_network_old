
import Profile from './Profile';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import withPreloader from '../../../hoc/withPreloader';
import {addPost, requestUserProfile, setUserStatus} from '../../../data/profile-reduser';
import { getPosts, getProfile, getStatus } from '../../../data/profile-selectors';
import { getAuthId } from '../../../data/auth_selectors';



const ProfileWithPreloader = withPreloader('profile')(Profile)

class ProfileContainer extends React.Component{

  componentDidUpdate(){
    if(this.props.profile.userId !== Number(this.props.match.params.id)){
      this.props.requestUserProfile(this.props.match.params.id);
    }
  }

  componentDidMount(){
    let userId = this.props.match.params.id
    this.props.requestUserProfile(userId);
  }

  render(){
      return <ProfileWithPreloader {...this.props}/>
  }

}

const mapStateToProps = (state) => {
  return {
    posts:getPosts(state),
    profile:getProfile(state),
    status:getStatus(state),
    authId:getAuthId(state)
  }
}

const mapDispatchToProps = {
    addPost,
    requestUserProfile,
    setUserStatus
}

export default compose(
  connect(mapStateToProps,mapDispatchToProps),
  withRouter
)(ProfileContainer)