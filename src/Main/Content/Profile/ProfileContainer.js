
import Profile from './Profile';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import withPreloader from '../../../hoc/withPreloader';
import {addPost, requestUserData, loadData, setUserProfile, setUserStatusText} from '../../../data/profile-reducer';
import {editPhoto, setMyStatus, saveProfileInfo} from '../../../data/myProfile-reducer';
import { getPosts, getProfile, getStatus, getLoadingData } from '../../../data/profile-selectors';
import { getAuthId } from '../../../data/auth-selectors';
import { getMyProfile, getMyStatus, getStatusError, getStatusErrorMessage } from '../../../data/myProfile-selectors';



const ProfileWithPreloader = withPreloader('loadingData')(Profile)

class ProfileContainer extends React.Component{

  componentDidMount(){
    let userId = Number(this.props.match.params.id);
    if(userId !== this.props.authId) {
      this.props.requestUserData(userId,this.props.loadData,this.props.setUserProfile,this.props.setUserStatusText);
    }
  }

  render(){

    let profile;
    let status;
    let loadingData;
      if(Number(this.props.match.params.id) === this.props.authId) {
        profile = this.props.myProfile;
        status = this.props.myStatus
        loadingData = false;
      }
      else {
        profile = this.props.profile;
        status = this.props.status;
        loadingData = this.props.loadingData;
      }

      return <ProfileWithPreloader loadingData = {loadingData} profile={profile} status={status} setMyStatus={this.props.setMyStatus}
                                   statusError={this.props.statusError} statusErrorMessage={this.props.statusErrorMessage}
                                   authId = {this.props.authId} editPhoto = {this.props.editPhoto}
                                   posts = {this.props.posts} addPost = {this.props.addPost} saveProfileInfo={this.props.saveProfileInfo}
      />
  }

}

const mapStateToProps = (state) => {
  return {
    posts:getPosts(state),
    profile:getProfile(state),
    status:getStatus(state),
    authId:getAuthId(state),
    myProfile:getMyProfile(state),
    myStatus:getMyStatus(state),
    statusError:getStatusError(state),
    statusErrorMessage:getStatusErrorMessage(state),
    loadingData: getLoadingData(state)
  }
}

const mapDispatchToProps = {
    addPost,
    requestUserData,
    setMyStatus,
    editPhoto,
    loadData,
    setUserProfile,
    setUserStatusText,
    saveProfileInfo
}

export default compose(
  connect(mapStateToProps,mapDispatchToProps),
  withRouter
)(ProfileContainer)