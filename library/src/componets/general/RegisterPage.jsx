import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    username: "",
    phoneNo: "",
    email: "",
    address: "",
    password: "",
    confirmPassword: "",
    gender: ""
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/library/auser",
        formData
      );
      console.log(response.data); 
    } catch (error) {
      console.error("Registration failed:", error); 
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
        background:
          "url('https://wallpapersmug.com/download/1920x1080/f12332/books.jpg') no-repeat",
        backgroundSize: "cover"
      }}
    >
      <div
        style={{
          width: "420px",
          background: "transparent",
          color: "white",
          padding: "20px",
          borderRadius: "8px",
          border: "2px solid yellow",
          backdropFilter: "blur(20px)"
        }}
      >
        <Form onSubmit={handleSubmit}>
          <h1 style={{ fontSize: "30px", textAlign: "center" }}>
            Register Here
          </h1>
          <Form.Group controlId="username" style={{ marginBottom: "15px" }}>
            <Form.Control
              type="text"
              placeholder="User Name"
              value={formData.username}
              onChange={handleChange}
              style={{ borderRadius: "5px" }}
            />
          </Form.Group>
          <Form.Group controlId="phoneNo" style={{ marginBottom: "15px" }}>
            <Form.Control
              type="text"
              placeholder="Phone Num"
              value={formData.phoneNo}
              onChange={handleChange}
              style={{ borderRadius: "5px" }}
            />
          </Form.Group>
          <Form.Group controlId="email" style={{ marginBottom: "15px" }}>
            <Form.Control
              type="text"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              style={{ borderRadius: "5px" }}
            />
          </Form.Group>
          <Form.Group controlId="address" style={{ marginBottom: "15px" }}>
            <Form.Control
              type="text"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              style={{ borderRadius: "5px" }}
            />
          </Form.Group>
          <Form.Group controlId="password" style={{ marginBottom: "15px"}}>
            <Form.Control
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              style={{ borderRadius: "5px" }}
            />
          </Form.Group>
          <Form.Group
            controlId="confirmPassword"
            style={{ marginBottom: "15px" }}
          >
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              style={{ borderRadius: "5px" }}
            />
          </Form.Group>
          <Form.Group controlId="gender">
            <Form.Check
              inline
              type="radio"
              label="Male"
              name="gender"
              value="MALE"
              onChange={handleChange}
              style={{ marginRight: "15px" }}
            />
            <Form.Check
              inline
              type="radio"
              label="Female"
              name="gender"
              value="FEMALE"
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit" block>
            Create Account
          </Button>
          <div
            style={{
              fontSize: "14px",
              textAlign: "center",
              marginTop: "20px"
            }}
            className="create-acc"
          >
            <p>
              Already have an account?
              <Link
                to="/UserSignIn"
                style={{ color: "lightblue", textDecoration: "none" }}
              >
                Sign-In
              </Link>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
}
