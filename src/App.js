import HeaderContainer from './Header/HeaderContainer';
import MainContainer from './Main/MainContainer';
import Footer from './Footer/Footer';
import './App.scss';
import {BrowserRouter} from 'react-router-dom';
import React from 'react';

class App extends React.Component {
  render(){
    return (
      <BrowserRouter>
      <div className="App">
        <HeaderContainer />
        <MainContainer />
        <Footer />
      </div>
      </BrowserRouter>
    );
  }

}

export default App;
