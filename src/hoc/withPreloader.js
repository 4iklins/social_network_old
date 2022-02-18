import React from "react";
import Preloader from "../common/Preloader/Preloader";


const withPreloader = (Component,requirement) => {
  return class componentContainer extends React.Component{
    render(){
       if(requirement) {
        return <Preloader/>
      }
        return <Component {...this.props}/>
    }
  }
}

export default withPreloader
