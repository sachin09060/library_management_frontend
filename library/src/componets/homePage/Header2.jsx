import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, NavLink } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';

const Header2 = () => {
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
              <NavLink to="/BooksGallery" className="nav-link" activeClassName="active">BOOK STORE</NavLink>
              {/* <NavLink to="/news" className="nav-link" activeClassName="active">NEWS & BLOGS</NavLink> */}
              <NavLink to="/about" className="nav-link" activeClassName="active">ABOUT US</NavLink>
              <NavLink to="/contactUs" className="nav-link" activeClassName="active">CONTACT US</NavLink>
            </Nav>
          </Navbar.Collapse>
          <Avatar alt="Remy Sharp" src="https://wallpapers.com/images/hd/iconic-hd-john-wick-poster-jeaidqurrfx52d3u.jpg" />
        </Container>
      </Navbar>
    </header>
  );
};

export default Header2;