import Main from "./Main";
import LoginContainer from "../Login/LoginContainer";
import React, { Fragment } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

class MainContainer extends React.Component{

  render(){
    return (
      <Fragment>
        {this.props.isAuth ? <Main {...this.props}/>:<LoginContainer/>}
      </Fragment>
    );
  }
  }

const mapStateToProps = (state) => ({
  isAuth:state.auth.isAuth,
  id:state.auth.id
})

export default compose(
  connect(mapStateToProps, {})
)(MainContainer)