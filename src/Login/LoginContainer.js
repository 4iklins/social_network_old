import React from "react";
import Login from "./Login";
import { connect } from "react-redux";
import { compose } from "redux";
import { login } from "../data/auth-reducer";
import { getCaptchaUrl, getIsAuth, getAuthId } from "../data/auth-selectors";
import { requestMyData, setMyProfile, setMyStatusText } from '../data/myProfile-reducer';
import { setAuthProgress} from '../data/auth-reducer';

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
      captchaUrl: getCaptchaUrl(state),
      id:getAuthId(state)
    }
}
const mapStateToProps = {
  login,
  setAuthProgress,
  requestMyData,
  setMyProfile,
  setMyStatusText
}
export default compose(
  connect(mapDispathToprops,mapStateToProps)
)(LoginContainer)