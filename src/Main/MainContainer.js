import Main from "./Main";
import Login from "./Content/Login/Login";
import React, { Fragment } from "react";
import { connect } from "react-redux";
import {auth} from "../data/auth-reducer";
import Preloader from "../common/Preloader/Preloader";

class MainContainer extends React.Component{
  componentDidMount(){
    this.props.auth()
  }
  render(){
    return (
      this.props.authProgress
      ? <Preloader/>
      : <Fragment>
        {this.props.isAuth ? <Main/>:<Login/>}
        </Fragment>
    );
  }
  }

const mapStateToProps = (state) => ({
  isAuth:state.auth.isAuth,
  authProgress:state.auth.authProgress
})
const mapDispathToprops = {
  auth:auth
}
export default connect(mapStateToProps, mapDispathToprops)(MainContainer)