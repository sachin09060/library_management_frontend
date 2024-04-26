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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
              elit sit amet arcu molestie convallis. Nullam nec ligula nec
              libero molestie sollicitudin vel ac velit.
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
                <i className="fas fa-phone-alt"></i> +123-456-7890
              </li>
              <li>
                <i className="fas fa-envelope"></i> info@library.com
              </li>
            </ul>
          </Col>

          {/* Additional Content Column */}
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
            <p>&copy; 2024 Book Haven. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
