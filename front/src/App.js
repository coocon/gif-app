import React, { Component } from 'react';
import { Button, Panel, Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import logo from './logo.svg';
import Upload from './components/Upload';
import './App.scss';

class App extends Component {
    state = {

    }
    onSelect = (eventKey) => {
        if (eventKey == '3.1') {
            location.href = '/';
        }
    }
  render() {
    return (
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
                        <NavItem eventKey={1} href="/">
                            GIF图片制作
                        </NavItem>
                        <NavDropdown onSelect={this.onSelect} eventKey={3} title="菜单" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>GIF图片制作</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar>
            </header>
            <div className="content-wrap">
                <Panel bsStyle="primary">
                    <Panel.Heading>
                        <Panel.Title componentClass="h3">制作GIF动画</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        <Upload />
                    </Panel.Body>
                </Panel>
            </div>
        </div>
    );
  }
}

export default App;
