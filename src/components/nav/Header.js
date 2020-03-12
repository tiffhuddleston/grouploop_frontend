import React from 'react';
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
  FormControl
} from 'react-bootstrap';

export default function Header() {
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">GroupLoop</Navbar.Brand>
      <Form inline>
        <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
        <Button type="submit">Submit</Button>
      </Form>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Account" id="collapsible-nav-dropdown">
            <NavDropdown.Item href="/login">Login</NavDropdown.Item>
            <NavDropdown.Item href="/sign-up">Sign Up</NavDropdown.Item>
            <NavDropdown.Item href="/my-account">My Account</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Circles" id="collapsible-nav-dropdown">
            <NavDropdown.Item href="/my-circles">My Circles</NavDropdown.Item>
            <NavDropdown.Item href="/manage-circle">
              Manage Circles
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Members" id="collapsible-nav-dropdown">
            <NavDropdown.Item href="/member-list">Member List</NavDropdown.Item>
            <NavDropdown.Item href="/manage-member">
              Manage Members
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
