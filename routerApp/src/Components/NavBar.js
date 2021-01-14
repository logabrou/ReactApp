import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, // we are aliasing this module for a cleaner call
  Route,
  Link
  // etc.
} from 'react-router-dom';
import Routes from './Routes';







class NavBar extends Component {
    render(){
      return(
        
        <nav class="navbar navbar-expand-lg navbar-dark bg-warning">
            <div className="nav">
            <button type="primary button" class="btn"><Link to="/">List</Link> </button>
            <button  type="success button" class="button">
              <Link to="ToDo">ToDo</Link> 
            </button>
            <Link to="about">About</Link> |
            <Link to="news">      
                <form>
                    <select name="News">
                    <option>
                        News
                    </option>
                    <option>
                        Item 1
                    </option>
                    <option>
                        <input
                        type="text"
                        // onChange={this.handleChange}
                        >
                        
                        </input>
                        
                    </option>
                    </select>        
                </form>
            </Link> | 
            <Link class = "primary button" to="news">Help</Link> | 
            <Link to="about">Entertainment</Link>
            
            </div>
        </nav>
      );
    }
}

export default NavBar;