
import React, { useState } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import ManageBooks from './ManageBooks';
import ManageUsers from './ManageUsers';
import ManageIssuedBooks from './ManageIssuedBooks';
import ManageRequestedBooks from './ManageRequestedBooks';
import { Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom'

const AdminDashboard = () => {
  const [selectedPage, setSelectedPage] = useState('');

  const renderPage = () => {
    switch (selectedPage) {
      case 'manageBooks':
        return <ManageBooks />;
      case 'manageUsers':
        return <ManageUsers />;
      case 'manageIssuedBooks':
        return <ManageIssuedBooks />;
      case 'manageRequestedBooks':
        return <ManageRequestedBooks />;
      default:
        return <ManageBooks />;
    }
  };

  const navigate = useNavigate(); 

const handleClick = () => {
  navigate('/');
};

  return (
    <Container fluid>
      <Row>
        <Col sm={3} style={{ backgroundColor: '#333', height: '100vh', color: '#fff', paddingTop: '20px' }}>
          <div style={{ paddingLeft: '20px' }}>
          <h1
              style={{
                fontFamily: "'Lobster', cursive",
                fontWeight: "bold",
                fontSize: "2rem",
                color: "#fff",
              }}
            >
              BOOK HAVEN
            </h1>
          </div>
          
          <Nav className="flex-column">
            <Nav.Link onClick={() => setSelectedPage('manageBooks')} style={{ color: '#fff', fontSize: '18px', marginBottom: '10px', paddingLeft: '20px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>Manage Books</Nav.Link>
            <Nav.Link onClick={() => setSelectedPage('manageUsers')} style={{ color: '#fff', fontSize: '18px', marginBottom: '10px', paddingLeft: '20px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>Manage Users</Nav.Link>
            <Nav.Link onClick={() => setSelectedPage('manageIssuedBooks')} style={{ color: '#fff', fontSize: '18px', marginBottom: '10px', paddingLeft: '20px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>Issued Books</Nav.Link>
            <Nav.Link onClick={() => setSelectedPage('manageRequestedBooks')} style={{ color: '#fff', fontSize: '18px', marginBottom: '10px', paddingLeft: '20px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>Message Requests</Nav.Link>
         <Button variant="outline-light" onClick={handleClick}>Logout</Button>
          </Nav>
        </Col>
        <Col sm={9} style={{ backgroundColor: '#f0f0f0', height: '100vh', padding: '20px' }}>
          <h2 style={{ color: '#333', marginBottom: '20px' }}>Dashboard Content</h2>
          {renderPage()}
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;


