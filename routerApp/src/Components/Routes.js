// import './index.css';
import React, {Component} from 'react';
import List from "./List.js";
import ToDo from "./ToDo.js";
import NoteToDo from "./NoteToDo.js";
import NavBar from "./NavBar";
// import { News, About } from "../public/index.js";
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, // we are aliasing this module for a cleaner call
  Route,
  Link
  // etc.
} from 'react-router-dom';



class Routes extends Component {
    render(){
      return(
        <Router>
          <div>
            <NavBar />
            <hr />
            <Route name="List" exact path="/" component={List}/>
            <Route name="ToDo" path="/ToDo" component={ToDo}/>
            <Route name="NoteToDo" path="/about" component={NoteToDo} />
            {/* <Route name="news" path="/News" component={News}/>
            <Route name="about" path="/About" component={About}/> */}
          </div>
        </Router>
      );
    }
  }

  export default Routes;