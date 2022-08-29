import HeaderContainer from './Header/HeaderContainer';
import MainContainer from './Main/MainContainer';
import Footer from './Footer/Footer';
import './App.scss';
import {BrowserRouter} from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { auth } from './data/auth-reducer';
import { getAuthProgress, getIsAuth, getAuthId } from './data/auth_selectors';

class App extends React.Component {

  componentDidMount(){
    this.props.auth()
  }

  render(){
    return (
      <BrowserRouter>
      <div className="App">
        <HeaderContainer />
        <MainContainer {...this.props}/>
        <Footer />
      </div>
      </BrowserRouter>
    );
  }

}

const mapStateToProps = (state) => ({
  authProgress:getAuthProgress(state),
  isAuth:getIsAuth(state),
  id:getAuthId(state)
})

const mapDispathToprops = {
  auth:auth
}
export default compose(
  connect(mapStateToProps, mapDispathToprops)
)(App)

