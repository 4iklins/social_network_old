
import Profile from './Profile';
import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Preloader from '../../../common/Preloader/Preloader';
import {addPost, setUserProfile, updateEnteredPostText} from '../../../data/profile-reduser';


class ProfileContainer extends React.Component{

  componentDidMount(){
    debugger
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.match.params.id}`)
    .then(responce => {
      this.props.setUserProfile(responce.data);
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
    profile:state.profilePage.profile
  }
}

const mapDispatchToProps = {
    updateEnteredPostText:updateEnteredPostText,
    addPost:addPost,
    setUserProfile:setUserProfile
}

const WithRouteProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps,mapDispatchToProps)(WithRouteProfileContainer);