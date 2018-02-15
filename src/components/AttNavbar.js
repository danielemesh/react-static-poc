import React from 'react';

import { Link } from 'react-static';
import { Navbar, NavItem, Collapse, Nav, NavbarToggler } from 'reactstrap';

import logo from '../logo.png';

export default class AttNavbar extends React.Component {
  constructor() {
    super();
    
    this.toggle = this.toggle.bind(this);
    
    this.state = {
      isOpen: false,
    };
  }
  
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  
  render() {
    return (
        <Navbar dark expand="md">
          <NavbarToggler onClick={this.toggle} className="mr-2"/>
          <div className="navbar-brand">
            <Link to="/">
              <img style={{height: '36px', width: 'auto'}} src={logo} alt="Logo"/>
            </Link>
          </div>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <div className="nav-link">
                  <Link to="/about">About</Link>
                </div>
              </NavItem>
              <NavItem>
                <div className="nav-link">
                  <Link to="/blog">Blog</Link>
                </div>
              </NavItem>
              <NavItem>
                <div className="nav-link">
                  <Link to="/photos">Photos</Link>
                </div>
              </NavItem>
              <NavItem>
                <div className="nav-link">
                  <Link to="/admin">Admin</Link>
                </div>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    );
  }
}