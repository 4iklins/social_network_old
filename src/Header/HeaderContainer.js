import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { logout } from "../data/auth-reducer";
import { getIsAuth, getProfile } from "../data/auth_selectors";

class HeaderContainer extends React.Component{
  render(){
    return(
      <Header {...this.props}/>
    )
  }
}

const mapStateToProps = (state)=> {
  return {
      isAuth: getIsAuth(state),
      profile: getProfile(state)
    }
}

const mapDispathToProps = {
  logout:logout
}


export default connect(mapStateToProps,mapDispathToProps)(HeaderContainer)