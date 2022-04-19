import Main from "./Main";
import LoginContainer from "../Login/LoginContainer";
import React, { Fragment } from "react";

class MainContainer extends React.Component{

  render(){
    return (
      <Fragment>
        {this.props.isAuth ? <Main {...this.props}/>:<LoginContainer/>}
      </Fragment>
    );
  }
  }

export default MainContainer