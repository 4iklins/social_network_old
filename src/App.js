import HeaderContainer from './Header/HeaderContainer';
import MainContainer from './Main/MainContainer';
import Footer from './Footer/Footer';
import './App.scss';
import {BrowserRouter} from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { auth , setAuthProgress} from './data/auth-reducer';
import { requestMyData, setMyProfile, setMyStatusText } from './data/myProfile-reducer';
import { getAuthProgress, getIsAuth, getAuthId, getSomeError, getSomeErrorMessage } from './data/auth-selectors';
import SomeError from './SomeError/SomeError';

class App extends React.Component {

  componentDidMount(){
      this.props.auth()
      .then((auth)=>{
        if(auth)this.props.requestMyData(this.props.id, this.props.setAuthProgress,this.props.setMyProfile,this.props.setMyStatusText)
    })
  }

  render(){
    return (
      <BrowserRouter>
      <div className="App">
        <HeaderContainer />
        <MainContainer {...this.props}/>
        {this.props.error && <SomeError errorMessage={this.props.errorMessage}/>}
        <Footer />
      </div>
      </BrowserRouter>
    );
  }

}

const mapStateToProps = (state) => ({
  authProgress:getAuthProgress(state),
  isAuth:getIsAuth(state),
  id:getAuthId(state),
  error:getSomeError(state),
  errorMessage:getSomeErrorMessage(state)
})

const mapDispathToprops = {
  auth,
  setAuthProgress,
  requestMyData,
  setMyProfile,
  setMyStatusText

}
export default compose(
  connect(mapStateToProps, mapDispathToprops)
)(App)

