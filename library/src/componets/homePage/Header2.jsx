import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

const Header2 = () => {
  const navigate = useNavigate();
  const [showLogoutBadge, setShowLogoutBadge] = useState(false);

  const name = window.sessionStorage.getItem("name");

  const handleLogout = () => {
    window.sessionStorage.clear();
    navigate("/");
  };

  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            <h1
              style={{
                paddingLeft: "30px",
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
              <NavLink
                to="/main1"
                className="nav-link"
                activeClassName="active"
              >
                HOME
              </NavLink>
              <NavLink
                to="/BooksGallery2"
                className="nav-link"
                activeClassName="active"
              >
                BOOK STORE
              </NavLink>
              <NavLink
                to="/about2"
                className="nav-link"
                activeClassName="active"
              >
                ABOUT US
              </NavLink>
              <NavLink
                to="/contactUs2"
                className="nav-link"
                activeClassName="active"
              >
                CONTACT US
              </NavLink>
              <NavLink
                to="/cart"
                className="nav-link ms-5"
                activeClassName="active"
              >
                <BusinessCenterIcon />
                BAG
              </NavLink>
            </Nav>
          </Navbar.Collapse>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Avatar
              alt="Remy Sharp"
              src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
              onClick={() => setShowLogoutBadge(true)}
              style={{ cursor: "pointer" }}
            />
            {name}
            {showLogoutBadge && (
              <Badge
                badgeContent="LOGOUT"
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                onClick={handleLogout}
                style={{ cursor: "pointer" }}
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
