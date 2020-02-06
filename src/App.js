import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
    NavLink,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Home from "./components/Home"
import About from "./components/About"
import Topics from "./components/Topics"
import NotFound from "./components/NotFound"
import "./App.css"
import background from './images/background.png'

// import components
import {  Menu, MenuItem } from 'react-foundation';

export default function App() {

  return (
      <Router >
        <div>
          <div className="menu-active-state-example ">
            <ul className="menu">
              <li ><a><NavLink  exact to="/"  activeClassName="nav-active">Home</NavLink></a></li>
              <li><a><NavLink activeClassName="nav-active"  to="/topics"  >Topics</NavLink></a></li>
              <li><a><NavLink activeClassName="nav-active" exact to="/about">About</NavLink></a></li>
            </ul>
            {/*<Menu>*/}
            {/*  <MenuItem  ><NavLink activeClassName="nav-active" exact to="/"   >Home</NavLink></MenuItem>*/}
            {/*  <MenuItem><NavLink to="/topics" activeClassName="nav-active">Topics</NavLink></MenuItem>*/}
            {/*  <MenuItem><NavLink to="/about" activeClassName="nav-active">About</NavLink></MenuItem>*/}
            {/*</Menu>*/}
          </div>
          <Switch >
            <Route path="/about">
              <About />
            </Route>
            <Route path="/topics">
              <Topics />
            </Route>
            <Route path="/">
              <Home />
            </Route>
            <Route Component={NotFound}/>
          </Switch>
        </div>
      </Router>
  );
}


