import React, { useState } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';


export default function ForgotPassword() {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSavePassword = async (e) => {
    e.preventDefault();
    try {
        if (!email || !newPassword || !confirmPassword) {
            alert("Fill all the fields");
            return;
        }

        if (newPassword !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
      if (!passwordRegex.test(newPassword)) {
        alert("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.");
        return;
      }

        const response = await axios.post("http://localhost:8080/api/v1/library/forgotpassword", {
            email: email,
            password: newPassword,
            confirmPassword: confirmPassword
        });

        console.log(response);

        if (response.data.message === "Password Updated") {
            setError(response.data.error);
            alert("Password Updated");
            navigate('/UserSignIn');
        } else {
            alert("Please enter a valid email address.");
        }
    } catch (error) {
        if (error.response && error.response.status === 400) {
            alert("Fill all the fields");
        } else {
            console.error("Password update unsuccessful:", error);
            setError('Password update failed. Please try again.');
        }
    }
}

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
        background: "url('https://wallpapersmug.com/download/1920x1080/f12332/books.jpg') no-repeat",
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
        <Form onSubmit={handleSavePassword}>
          <h1 style={{ fontSize: "30px", textAlign: "center" }}>
            Forgot Password
          </h1>
          <Form.Group controlId="email" style={{ marginBottom: "15px" }}>
            <Form.Control
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ borderRadius: "5px" }}
            />
          </Form.Group>
          <Form.Group controlId="newPassword" style={{ marginBottom: "15px" }}>
            <Form.Control
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              style={{ borderRadius: "5px" }}
            />
          </Form.Group>
          <Form.Group controlId="confirmPassword" style={{ marginBottom: "15px"}}>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={{ borderRadius: "5px" }}
            />
          </Form.Group>
          <Button variant="primary" type="submit" block>
            Submit
          </Button>
        </Form>
        {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
      </div>
    </div>
  );
}