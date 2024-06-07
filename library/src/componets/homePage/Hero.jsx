import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const Hero = () => {
  const name = window.sessionStorage.getItem("name");
  return (
    <section
      className="hero d-flex align-items-center justify-content-left"
      style={{
        backgroundColor: "#f5f5f5",
        minHeight: "65vh",
        margin: 0,
        padding: 0,
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <h1
              style={{
                fontFamily: "Lobster",
                fontSize: "3.4rem",
                fontWeight: "bold",
                color: "#333",
                marginBottom: "20px",
                textAlign: "left",
              }}
            >
              Hi {name}! Start your reading journey today
            </h1>
            <p style={{ color: "#666", lineHeight: "1.5", textAlign: "left" }}>
              Where every page is a new adventure.
            </p>
            <p style={{ color: "#666", lineHeight: "1.5", textAlign: "left" }}>
              From classics to contemporary, our bookstore offers a wide
              selection of books to suit every taste and interest. Start
              exploring our shelves today and uncover your next literary gem.
            </p>

            <h2
              style={{
                fontFamily: "Open Sans",
                fontSize: "1.9rem",
                color: "#999",
                marginTop: "30px",
                textAlign: "left",
              }}
            >
              Find inspiration for your next adventure.
            </h2>
            <p
              style={{
                fontFamily: "Raleway",
                fontSize: "1rem",
                color: "#aaa",
                textAlign: "left",
              }}
            >
              Lose yourself in a captivating story or learn something new.
            </p>
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-center">
            <Image
              src="https://libromaniacs.com/wp-content/uploads/2023/06/books-like-all-the-light-we-cannot-see-1024x768.jpg"
              alt="Bookstore Hero Image"
              fluid
              style={{
                borderRadius: "5px",
                marginTop: "20px",
                maxWidth: "100%",
              }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
