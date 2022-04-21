import Main from "./Main";
import LoginContainer from "../Login/LoginContainer";
import React, { Fragment } from "react";
import { compose } from "redux";
import withPreloader from "../hoc/withPreloader";

class MainContainer extends React.Component{

  render(){
    return (
      <Fragment>
        {this.props.isAuth ? <Main {...this.props}/>:<LoginContainer/>}
      </Fragment>
    );
  }
  }

export default compose(
  withPreloader('authProgress')
)(MainContainer)