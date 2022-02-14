import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { auth } from "../data/auth-reducer";

class HeaderContainer extends React.Component{

  componentDidMount(){
    this.props.auth();
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
  auth:auth
}

export default connect(mapStateToProps,mapDispatchToProps)(HeaderContainer)