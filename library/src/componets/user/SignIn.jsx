import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function UserSignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      const response = await axios.post(
        "http://localhost:8055/api/user/login",
        {
          email: email,
          password: password,
        }
      );

      if (response.data.message === "User Login Successfully!") {
        console.log("Login successful");
        window.sessionStorage.setItem("name", response.data.data.name);
        window.sessionStorage.setItem("email", response.data.data.email);
        alert(response.data.message);
        setError("");
        navigate("/main1");
      } else {
        setError(response.data.message);
        alert("Invalid email or password. Please try again");
      }
    } catch (error) {
      console.error("Login unsuccessful:", error);
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        fontFamily: "'Roboto', sans-serif",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
        background: "linear-gradient(45deg, #FF5733, #50C9C3, #FF5733)",
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <div
              style={{
                background: "rgba(0,0,0,0.5)",
                color: "white",
                padding: "20px",
                borderRadius: "8px",
                border: "2px solid yellow",
                backdropFilter: "blur(20px)",
              }}
            >
              <h1 style={{ fontSize: "30px", textAlign: "center" }}>
                User Signin
              </h1>
              <Form onSubmit={handleSignIn}>
                <Form.Group controlId="Email" style={{ marginBottom: "15px" }}>
                  <Form.Control
                    type="text"
                    placeholder="Enter User Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ textAlign: "center", borderRadius: "5px" }}
                  />
                </Form.Group>
                <Form.Group
                  controlId="password"
                  style={{ marginBottom: "15px" }}
                >
                  <Form.Control
                    type="password"
                    placeholder="Enter User Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ textAlign: "center", borderRadius: "5px" }}
                  />
                </Form.Group>
                <Button variant="primary" type="submit" block>
                  SignIn
                </Button>
                <div
                  style={{
                    fontSize: "14px",
                    textAlign: "center",
                    marginTop: "20px",
                  }}
                  className="create-acc"
                >
                  <p>
                    Don't have an account?
                    <Link
                      to="/UserSignUp"
                      style={{
                        color: "lightblue",
                        textDecoration: "none",
                        marginLeft: "5px",
                      }}
                    >
                      Sign-up
                    </Link>
                  </p>
                  <Link
                    to="/Forgot"
                    style={{
                      color: "lightblue",
                      textDecoration: "none",
                      marginLeft: "5px",
                    }}
                  >
                    Forgot Password
                  </Link>
                </div>
              </Form>
              {error && (
                <p style={{ color: "red", textAlign: "center" }}>{error}</p>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}