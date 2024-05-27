import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Form, Button  } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

export default function AdminSignIn() {
  const navigate = useNavigate(); 
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post("", {
            userId: userId,
            password: password
        });

        if (response.data.message === "Admin Login Success") {
            console.log("Login successful");
            alert(response.data.message);
            setError('');
            navigate('/');
        } else {
            setError(response.data.message);
            alert("Invalid email or password. Please try again");
        }
    } catch (error) {
        console.error("Login unsuccessful:", error);
        setError('Invalid email or password. Please try again.');
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
        <Form onSubmit={handleSignIn}>
          <h1 style={{ fontSize: "30px", textAlign: "center" }}>
            User Signin
          </h1>
          <Form.Group controlId="username" style={{ marginBottom: "15px" }}>
            <Form.Control
              type="text"
              placeholder="UserId"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              style={{ borderRadius: "5px" }}
            />
          </Form.Group>
          <Form.Group controlId="password" style={{ marginBottom: "15px"}}>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ borderRadius: "5px" }}
            />
          </Form.Group>
          <Button variant="primary" type="submit" block>
            SignIn
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
              Don't have an account?
              <Link
                to="/UserSignUp"
                style={{ color: "lightblue", textDecoration: "none" }}
              >
                Sign-up
              </Link>
            </p>
            <Link
                to="/Forgot"
                style={{ color: "lightblue", textDecoration: "none" }}
              >
                Forgot Password
              </Link>
          </div>
        </Form>
        {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
      </div>
    </div>
  );
}
