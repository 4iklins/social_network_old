import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { logout } from "../data/auth-reducer";
import { getIsAuth } from "../data/auth-selectors";
import { getMyProfile} from '../data/myProfile-selectors';

class HeaderContainer extends React.Component{

  render(){
    return(
      <Header {...this.props}/>
    )
  }
}

const mapStateToProps = (state)=> {
  return {
      isAuth: getIsAuth(state),
      myProfile: getMyProfile(state)
    }
}

const mapDispathToProps = {
  logout:logout
}


export default connect(mapStateToProps,mapDispathToProps)(HeaderContainer)