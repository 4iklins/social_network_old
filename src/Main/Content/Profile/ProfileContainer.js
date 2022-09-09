
import Profile from './Profile';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import withPreloader from '../../../hoc/withPreloader';
import {addPost, requestUserData, setUserStatus} from '../../../data/profile-reduser';
import { getPosts, getProfile, getStatus } from '../../../data/profile-selectors';
import { getAuthId } from '../../../data/auth_selectors';



const ProfileWithPreloader = withPreloader('loadingData')(Profile)

class ProfileContainer extends React.Component{

  componentDidUpdate(){
    if(this.props.profile && this.props.profile.userId !== Number(this.props.match.params.id)){
      this.props.requestUserData(this.props.match.params.id);
    }
  }

  componentDidMount(){
    let userId = this.props.match.params.id
    this.props.requestUserData(userId);
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
    authId:getAuthId(state),
    statusError:state.profilePage.statusError,
    statusErrorMessage:state.profilePage.statusErrorMessage,
    loadingData: state.profilePage.loadingData
  }
}

const mapDispatchToProps = {
    addPost,
    requestUserData,
    setUserStatus
}

export default compose(
  connect(mapStateToProps,mapDispatchToProps),
  withRouter
)(ProfileContainer)