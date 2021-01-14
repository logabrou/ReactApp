import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import React, {Component} from 'react';
import List from "./Components/List";
import NavBar from "./Components/NavBar";
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, // we are aliasing this module for a cleaner call
  Route,
  Link
  // etc.
} from 'react-router-dom';
import Routes from './Components/Routes';


class About extends Component {
  render(){
    return(
      <div>
        <h1>About Us</h1>
        <p>We here at the Triple-R love fresh URLs, especially ones tied to awesome React Components.</p>
        <p>It's even better when you can switch between those URLs with ease and share them with friends and family</p>
      </div>
    );
  }
}

// Menu component



class News extends Component {
  render(){
    return(
      <div>
        
      </div>
    );
  }
}






ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
