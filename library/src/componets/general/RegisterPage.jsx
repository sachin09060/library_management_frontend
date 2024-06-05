import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    gender: "MALE",
    phone: "",
    email: "",
    address: "",
    password: "",
    confirmPassword: "",
    createdAt: new Date().toISOString('en-US', { timeZone: 'Asia/Kolkata' }),
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:8055/api/user/add",
        formData
      );
      if (!response.data.error) {
        alert("User added successfully!");
        navigate("/UserSignIn");
      } else {
        alert("User already present");
      }
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  const validateForm = (formData) => {
    let errors = {};
    if (!formData.name) {
      errors.name = "Name is required";
    }
    if (!formData.phone) {
      errors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = "Invalid phone number";
    }
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email address";
    }
    if (!formData.address) {
      errors.address = "Address is required";
    }
    if (!formData.password) {
      errors.password = "Password is required";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }
    if (!formData.confirmPassword) {
      errors.confirmPassword = "Confirm Password is required";
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    return errors;
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div
      className="bg-image"
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(45deg, #FF5733, #50C9C3, #FF5733)",
      }}
    >
      <Container className="register-form">
        <Row className="justify-content-md-center">
          <Col xs={12} md={6}>
            <Form onSubmit={handleSubmit}>
              <h1 className="text-center mb-4" style={{color:"#fff"}}>Register Here</h1>
              <Form.Group controlId="name">
                <Form.Control
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <Form.Text className="text-danger">{errors.name}</Form.Text>
              </Form.Group>
              <Form.Group controlId="phone">
                <Form.Control
                  type="text"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <Form.Text className="text-danger">{errors.phone}</Form.Text>
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <Form.Text className="text-danger">{errors.email}</Form.Text>
              </Form.Group>
              <Form.Group controlId="address">
                <Form.Control
                  type="text"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                />
                <Form.Text className="text-danger">{errors.address}</Form.Text>
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <Form.Text className="text-danger">{errors.password}</Form.Text>
              </Form.Group>
              <Form.Group controlId="confirmPassword">
                <div className="position-relative">
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                  <span
                    style={{
                      position: "absolute",
                      top: "50%",
                      right: "10px",
                      transform: "translateY(-50%)",
                      cursor: "pointer",
                    }}
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
                <Form.Text className="text-danger">
                  {errors.confirmPassword}
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="gender" style={{color:"#fff"}}>
                <Form.Check
                  inline
                  type="radio"
                  label="Male"
                  value="MALE"
                  checked={formData.gender === "MALE"}
                  onChange={handleChange}
                />
                <Form.Check
                  inline
                  type="radio"
                  label="Female"
                  value="FEMALE"
                  checked={formData.gender === "FEMALE"}
                  onChange={handleChange}
                />
                <Form.Check
                  inline
                  type="radio"
                  label="Other"
                  value="OTHER"
                  checked={formData.gender === "OTHER"}
                  onChange={handleChange}
                />
              </Form.Group>
              <Button variant="primary" type="submit" block>
                Create Account
              </Button>
              <div className="text-center mt-3" style={{color:"#fff"}}>
                Already have an account? <Link to="/UserSignIn" style={{color:"#fff"}}>Sign-In</Link>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
