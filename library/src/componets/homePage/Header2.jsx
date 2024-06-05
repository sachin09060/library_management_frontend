import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';

const Header2 = () => {
  const navigate = useNavigate();
  const [showLogoutBadge, setShowLogoutBadge] = useState(false);

  const handleLogout = () => {
    navigate('/');
  };

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
              <NavLink to="/main1" className="nav-link" activeClassName="active">HOME</NavLink>
              <NavLink to="/BooksGallery" className="nav-link" activeClassName="active">BOOK STORE</NavLink>
              <NavLink to="/about2" className="nav-link" activeClassName="active">ABOUT US</NavLink>
              <NavLink to="/contactUs2" className="nav-link" activeClassName="active">CONTACT US</NavLink>
            </Nav>
          </Navbar.Collapse>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Avatar
              alt="Remy Sharp"
              src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
              onClick={() => setShowLogoutBadge(true)}
              style={{ cursor: 'pointer' }}
            />
            {showLogoutBadge && (
              <Badge
                badgeContent="LOGOUT"
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                onClick={handleLogout}
                style={{ cursor: 'pointer' }}
              >
                <IconButton size="small">
                  <LogoutIcon />
                </IconButton>
              </Badge>
            )}
          </div>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header2;
