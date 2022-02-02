import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setAuthData, setUser } from "../data/auth-reducer";
import * as axios from "axios";

class HeaderContainer extends React.Component{
  constructor(props){
    super(props);
    this.fetchLoginUserData = this.fetchLoginUserData.bind(this);
  }

  componentDidMount(){
    axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", {withCredentials:true})
    .then(response =>{
      if(response.data.resultCode === 0){
        let {id, login, email} = response.data.data
        this.props.setAuthData(id,login,email)
        this.fetchLoginUserData()
      }
    })
  }

  fetchLoginUserData(){
    axios.get (`https://social-network.samuraijs.com/api/1.0/profile/${this.props.id}`)
    .then(response =>{
      this.props.setUser(response.data);
    })
  }

  render(){
    return(
      <Header {...this.props}/>
    )
  }
}

const mapStateToProps = (state)=> {
  return(
    {
      id:state.auth.id,
      login:state.auth.login,
      email:state.auth.email,
      isAuth: state.auth.isAuth,
      profile:state.auth.profile
    }
  )
}
const mapDispatchToProps = {
  setAuthData:setAuthData,
  setUser:setUser
}

export default connect(mapStateToProps,mapDispatchToProps)(HeaderContainer)