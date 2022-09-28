import React from "react";
import Login from "./Login";
import { connect } from "react-redux";
import { compose } from "redux";
import { login } from "../data/auth-reducer";
import { getCaptchaUrl, getIsAuth } from "../data/auth-selectors";

class LoginContainer extends React.Component{
  render(){
    return(
      <Login {...this.props}/>
    )
  }
}
const mapDispathToprops = (state) =>{
  return{
      isAuth:getIsAuth(state),
      captchaUrl: getCaptchaUrl(state)
    }
}
const mapStateToProps = {
  login:login
}
export default compose(
  connect(mapDispathToprops,mapStateToProps)
)(LoginContainer)