import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import './App.scss';
import {BrowserRouter} from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Main state={props.state} newPost={props.newPost} updateEnteredPostText={props.updateEnteredPostText}/>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
