import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import { Button, Panel, Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import logo from './logo.svg';
import Maker from './modules/Maker';
import './App.scss';

class App extends Component {
    state = {

    }
  render() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <Navbar className="navbar-static-top">
                        <Navbar.Header>
                            <img src={logo} className="App-logo" alt="logo" />
                            <Navbar.Brand>
                                <a href="/">PT大师</a>
                            </Navbar.Brand>
                        </Navbar.Header>
                        <Nav>
                            <NavItem eventKey={1}>
                                <a to="/">gif图片制作</a>
                            </NavItem>
                        </Nav>
                    </Navbar>
                </header>
                <Switch>
                    <Route path="/" exact component={Maker} />
                    <Route path="/maker" component={Maker} />
                    <Route component={NoMatch} />
                </Switch>
            </div>
        </Router>
    );
  }
}

const NoMatch = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);
export default App;
