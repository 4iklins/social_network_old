import Main from "./Main";
import Login from "../Login/Login";
import React, { Fragment } from "react";
import { connect } from "react-redux";
import {auth} from "../data/auth-reducer";
import { compose } from "redux";
import withPreloader from "../hoc/withPreloader";


const MainWithPreloader = withPreloader('authProgress')(Main)

class MainContainer extends React.Component{
  componentDidMount(){
    this.props.auth()
  }
  render(){
    return (
      <Fragment>
        {this.props.isAuth ? <MainWithPreloader {...this.props}/>:<Login/>}
      </Fragment>
    );
  }
  }

const mapStateToProps = (state) => ({
  isAuth:state.auth.isAuth,
  authProgress:state.auth.authProgress,
  id:state.auth.id
})
const mapDispathToprops = {
  auth:auth
}
export default compose(
  connect(mapStateToProps, mapDispathToprops)
)(MainContainer)