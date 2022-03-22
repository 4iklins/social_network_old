import React from "react";
import Login from "./Login";
import { connect } from "react-redux";
import { compose } from "redux";
import { login } from "../data/auth-reducer";

class LoginContainer extends React.Component{
  render(){
    console.log(this.props)
    return(
      <Login {...this.props}/>
    )
  }
}
const mapDispathToprops = (state) =>{
  return{
      isAuth:state.auth.isAuth,
      captchaUrl:state.auth.captchaUrl
    }
}
const mapStateToProps = {
  login:login
}
export default compose(
  connect(mapDispathToprops,mapStateToProps)
)(LoginContainer)