import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { logout } from "../data/auth-reducer";

class HeaderContainer extends React.Component{
  render(){
    return(
      <Header {...this.props}/>
    )
  }
}

const mapStateToProps = (state)=> {
  return {
      isAuth: state.auth.isAuth,
      profile:state.auth.profile
    }
}

const mapDispathToProps = {
  logout:logout
}


export default connect(mapStateToProps,mapDispathToProps)(HeaderContainer)