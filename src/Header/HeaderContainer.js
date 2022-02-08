import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setAuthData, setMyProfile } from "../data/auth-reducer";
import {authMe, getProfile} from "../api/api"

class HeaderContainer extends React.Component{
  constructor(props){
    super(props);
    this.getMyProfile = this.getMyProfile.bind(this);
  }

  componentDidMount(){
    authMe()
    .then(response =>{
      if(response.resultCode === 0){
        let {id, login, email} = response.data
        this.props.setAuthData(id,login,email);
        this.getMyProfile();
      }
    })
  }

  getMyProfile(){
    getProfile(this.props.id)
    .then(response =>{
      this.props.setMyProfile(response.data);
    })
  }

  render(){
    return(
      <Header {...this.props}/>
    )
  }
}

const mapStateToProps = (state)=> {
  return(
    {
      id:state.auth.id,
      login:state.auth.login,
      email:state.auth.email,
      isAuth: state.auth.isAuth,
      profile:state.auth.profile
    }
  )
}
const mapDispatchToProps = {
  setAuthData:setAuthData,
  setMyProfile:setMyProfile
}

export default connect(mapStateToProps,mapDispatchToProps)(HeaderContainer)