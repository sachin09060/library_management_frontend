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
              BOOK HEAVEN
            </h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-center" style={{ width: "80%" }}>
            <NavLink to="/" className="nav-link" activeClassName="active">HOME</NavLink>
              <NavLink to="/BooksGallery2" className="nav-link" activeClassName="active">BOOK STORE</NavLink>
              {/* <NavLink to="/news" className="nav-link" activeClassName="active">NEWS & BLOGS</NavLink> */}
              <NavLink to="/about" className="nav-link" activeClassName="active">ABOUT US</NavLink>
              <NavLink to="/contactUs" className="nav-link" activeClassName="active">CONTACT US</NavLink>
            </Nav>

            <Nav className="justify-content-end">
              <NavLink to="/UserSignUp" className="nav-link" activeClassName="active">Register</NavLink>
              <NavLink to="/adminSignIn" className="nav-link" activeClassName="active">Admin</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;