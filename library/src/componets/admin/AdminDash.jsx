import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import Groups2Icon from "@mui/icons-material/Groups2";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import SendIcon from "@mui/icons-material/Send";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Grid1 from "../dashbord/cards/grid/Grid1";
import ContactsIcon from '@mui/icons-material/Contacts';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';


const drawerWidth = 240;

function AdminDash(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <ContactsIcon color="primary" sx={{ marginTop: "20px", fontSize: 70 }} />
      <Toolbar />
      <Divider />
      <List>
        {["Dashbord"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <DashboardCustomizeIcon /> : <Groups2Icon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />

      {["Manage Books"].map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton
            component={Link}
            to={text === "Manage Books" ? "/manageBooks" : "/adminDash"}>
            <ListItemIcon>
              {index % 2 === 0 ? <AutoStoriesIcon /> : <LibraryBooksIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}

      <Divider />
      <Divider />
      <List>
        {["Issued Books", "Message Requests"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton component={Link} to={text === "Issued Books" ? "/manageIssuedBooks" : "/manageRequestedBooks"}>
              <ListItemIcon>
                {index % 2 === 0 ? <BookmarkAddedIcon /> : <SendIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Manage Users"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton component={Link} to={text === "Manage Users" ? "/manageUsers" : "/adminDash"}>
              <ListItemIcon>
                {index % 2 === 0 ? <GroupAddIcon /> : <AttachMoneyIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );


  const container =
  window !== undefined ? () => window().document.body : undefined;


const navigate = useNavigate(); 

const handleClick = () => {
  navigate('/');
};

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography textAlign="center" fontFamily="revert-layer" variant="h6" noWrap component="div">
            Admin Pannel
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Typography paragraph color="primary" fontFamily="cursive">
          <h1>User Dashbord</h1>
        </Typography>
        <Grid1 />
        <Toolbar />
        <Button 
        onClick={handleClick}
         >Logout</Button>
      </Box>
    </Box>
  );
}

AdminDash.propTypes = {
  window: PropTypes.func,
};

export default AdminDash;

// import React from 'react';
// import { Container, Row, Col, Nav } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// const AdminDashboard = () => {
//   return (
//     <Container fluid>
//       <Row>
//         <Col sm={3} style={{ backgroundColor: '#333', height: '100vh', color: '#fff', paddingTop: '20px' }}>
//           <div style={{ paddingLeft: '20px' }}>
//             <h2 style={{ color: '#fff', marginBottom: '30px', fontSize: '24px', fontWeight: 'bold', letterSpacing: '1px' }}>Dashboard</h2>
//           </div>
//           <Nav className="flex-column">
//             <Nav.Link as={Link} to="/manageBooks" style={{ color: '#fff', fontSize: '18px', marginBottom: '10px', paddingLeft: '20px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>Manage Books</Nav.Link>
//             <Nav.Link as={Link} to="/manageUsers" style={{ color: '#fff', fontSize: '18px', marginBottom: '10px', paddingLeft: '20px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>Manage Users</Nav.Link>
//             <Nav.Link as={Link} to="/manageIssuedBooks" style={{ color: '#fff', fontSize: '18px', marginBottom: '10px', paddingLeft: '20px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>Issued Books</Nav.Link>
//             <Nav.Link as={Link} to="/manageRequestedBooks" style={{ color: '#fff', fontSize: '18px', marginBottom: '10px', paddingLeft: '20px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>Message Requests</Nav.Link>
//           </Nav>
//         </Col>
//         <Col sm={9} style={{ backgroundColor: '#f0f0f0', height: '100vh', padding: '20px' }}>
//           <h2 style={{ color: '#333', marginBottom: '20px' }}>Dashboard Content</h2>
//           <p style={{ color: '#555' }}>Welcome to the admin dashboard. Choose an option from the sidebar to manage books, users, requests, issued books, or message requests.</p>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default AdminDashboard;
