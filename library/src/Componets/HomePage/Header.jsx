import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            <h1
              style={{
                paddingLeft:"30px",
                fontFamily: "'Lobster', cursive",
                fontWeight: "bold",
                fontSize: "2.2rem",
                color: "#000",
              }}
            >
              Book Haven
            </h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-center" style={{ width: "80%" }}>
              <NavLink to="/" className="nav-link" activeClassName="active">Home</NavLink>
              <NavLink to="/BooksGallery" className="nav-link" activeClassName="active">Store</NavLink>
              <NavLink to="/news" className="nav-link" activeClassName="active">News & Blogs</NavLink>
              <NavLink to="/about" className="nav-link" activeClassName="active">About Us</NavLink>
              <NavLink to="/contactUs" className="nav-link" activeClassName="active">Contact Us</NavLink>
            </Nav>

            <Nav className="justify-content-end">
              <NavLink to="/UserSignIn" className="nav-link" activeClassName="active">UserSignIn</NavLink>
              <NavLink to="/adminSignIn" className="nav-link" activeClassName="active">Admin Login</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;