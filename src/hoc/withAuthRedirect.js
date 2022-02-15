import { Redirect } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";

export const withAuthRedirect = (Component) => {
  class withAuthRedirectContainer extends React.Component{
    render(){
      return !this.props.isAuth 
      ? <Redirect to="/login"/>
      : <Component {...this.props}/>
    }
  }
  let mapStateToProps = (state) => ({
    isAuth:state.auth.isAuth
  })
  let connectWithAuthRedirectContainer = connect(mapStateToProps)(withAuthRedirectContainer)
  return connectWithAuthRedirectContainer
}



