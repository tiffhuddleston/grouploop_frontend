import React from 'react';
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
  FormControl
} from 'react-bootstrap';
import Login from '../auth/Login';

export default function Header() {
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">GroupLoop</Navbar.Brand>
      <Login />
      <Form inline>
        <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
        <Button type="submit">Submit</Button>
      </Form>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Account" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/login">Login</NavDropdown.Item>
            <NavDropdown.Item href="/sign-up">Sign Up</NavDropdown.Item>
            <NavDropdown.Item href="/my-account">My Account</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Circles" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/my-circles">My Circles</NavDropdown.Item>
            <NavDropdown.Item href="/all-circles">
              Explore Circles
            </NavDropdown.Item>
            <NavDropdown.Item href="/add-circle">Add Circle</NavDropdown.Item>
            <NavDropdown.Item href="/edit-circle">Edit Circle</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
