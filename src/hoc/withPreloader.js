import React from "react";
import Preloader from "../common/Preloader/Preloader";


const withPreloader = (data) => (Component) => {
  return class componentContainer extends React.Component{
    render(){
       if(this.props[data] === null || this.props[data] === true) {
        return <Preloader/>
      }
        return <Component {...this.props}/>
    }
  }
}

export default withPreloader
