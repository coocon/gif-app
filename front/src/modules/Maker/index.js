import React, { Component } from 'react';
import Upload from 'components/Upload';
import { Button, Panel, Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import './index.scss';

export default class Maker extends Component {
  state = {

  }
  render() {
      return (
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
      );
  }
}
