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
        <Navbar color="dark" dark expand="md">
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
                  <Link to="/blog-with-fetch">Blog w/Fetch</Link>
                </div>
              </NavItem>
              <NavItem>
                <div className="nav-link">
                  <Link to="/blog-dynamic">Blog w/MD Files</Link>
                </div>
              </NavItem>
              <NavItem>
                <div className="nav-link">
                  <Link to="/blog-pagination">Blog w/Pagination</Link>
                </div>
              </NavItem>
              <NavItem>
                <div className="nav-link">
                  <Link to="/admin">Client App</Link>
                </div>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    );
  }
}