import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="mt-5">
      <Container>
        <Row>
          <Col md={6}>
            <h5>About Our Library</h5>
            <p>
            Step into the realms of knowledge at Book Heaven, where every page holds a universe waiting to be explored.
            </p>
          </Col>

          <Col md={3}>
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>
                <i className="fas fa-map-marker-alt"></i> Hootgalli Library St,
                Mysore, Karnataka
              </li>
              <li>
                <i className="fas fa-envelope"></i> bookheaven@library.com
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-dark">
                  <FaFacebook className="mr-2" /> Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-dark">
                  <FaTwitter className="mr-2" /> Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-dark">
                  <FaInstagram className="mr-2" /> Instagram
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-4">
            <p>&copy; 2024 Book Heaven. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
