
import Profile from './Profile';
import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Preloader from '../../../common/Preloader/Preloader';
import {addPost, setUserProfile, updateEnteredPostText} from '../../../data/profile-reduser';


class ProfileContainer extends React.Component{

  componentDidMount(){
    let userId = this.props.match.params.id
    if(!userId){
      userId = this.props.authId
    }

    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
    .then(response => {
      this.props.setUserProfile(response.data);
    })
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
    profile:state.profilePage.profile,
    authId:state.auth.id
  }
}

const mapDispatchToProps = {
    updateEnteredPostText:updateEnteredPostText,
    addPost:addPost,
    setUserProfile:setUserProfile
}

const WithRouteProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps,mapDispatchToProps)(WithRouteProfileContainer);