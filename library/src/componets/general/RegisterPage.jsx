import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

export default function RegisterPage() {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    phoneNo: "",
    email: "",
    address: "",
    password: "",
    confirmPassword: "",
    gender: ""
  });

  const [errorMessage, setErrorMessage] = useState('');

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
      
      if(!formData.username || !formData.phoneNo || !formData.email || !formData.address || !formData.password || !formData.confirmPassword || !formData.gender) {
        alert("Please fill all the fields.");
        return;
      }
      

      const phoneRegex = /^\d{10}$/;
      if (!phoneRegex.test(formData.phoneNo)) {
        alert("Please enter a valid phone number.");
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        alert("Please enter a valid email address.");
        return;
      }

      const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
      if (!passwordRegex.test(formData.password)) {
        alert("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.");
        return;
      }

     
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords don't match. Please try again.");
        return;
      }


      const response = await axios.post(
        "http://localhost:8080/api/v1/library/auser",
        formData
      );

      if (response.data.message === "Registerd Sucessfully") {
        alert("Registered successfully!");
        navigate("/UserSignIn");
      } 
      
      else if (response.data.message === "User already present") {
        setErrorMessage(response.data.message);
        alert("User already present");
      }
    } 
    
      catch (error) {
      if (error.response && error.response.status === 400) {
        alert("Please fill all the fields.");
      } else {
        console.error("Registration failed:", error);
      }
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