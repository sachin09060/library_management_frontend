// import React from "react";
// import { Navbar, Nav, Container } from "react-bootstrap";
// import { BrowserRouter as Router, Link } from 'react-router-dom';

// const Header = () => {
//   return (
//     <header>
//       <Navbar bg="light" expand="lg">
//         <Container fluid>
//           <Navbar.Brand href="#">
//             <h1
//               style={{
//                 paddingLeft:"30px",
//                 fontFamily: "'Lobster', cursive",
//                 fontWeight: "bold",
//                 fontSize: "2.2rem",
//                 color: "#000",
//               }}
//             >
//               Book Haven
//             </h1>
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="justify-content-center" style={{ width: "80%" }}>
//               {" "}
//               {/* Adjust width as needed */}
//               <Nav.Link href="#">Home</Nav.Link>
//               <Nav.Link href="#">Store</Nav.Link>
//               <Nav.Link href="#">News & Blogs</Nav.Link>
//               <Nav.Link href="#">About Us</Nav.Link>
//             </Nav>

//             <Nav className="justify-content-end">
//               <Nav.Link href="#">UserSignIn</Nav.Link>
//               <Nav.Link href="#">Admin Login</Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </header>
//   );
// };

// export default Header;


import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
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
              {" "}
              {/* Adjust width as needed */}
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/store" className="nav-link">Store</Link>
              <Link to="/news" className="nav-link">News & Blogs</Link>
              <Link to="/about" className="nav-link">About Us</Link>
            </Nav>

            <Nav className="justify-content-end">
              <Link to="/UserSignIn" className="nav-link">UserSignIn</Link>
              <Link to="/adminSignIn" className="nav-link">Admin Login</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
