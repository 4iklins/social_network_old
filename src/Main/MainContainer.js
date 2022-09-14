import Main from "./Main";
import LoginContainer from "../Login/LoginContainer";
import React from "react";
import { compose } from "redux";
import withPreloader from "../hoc/withPreloader";

class MainContainer extends React.Component{

  render(){
    return (
      <>
        {this.props.isAuth ? <Main {...this.props}/>:<LoginContainer/>}
      </>
    );
  }
  }

export default compose(
  withPreloader('authProgress')
)(MainContainer)