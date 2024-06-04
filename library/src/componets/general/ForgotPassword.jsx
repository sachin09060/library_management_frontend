import React, { useState } from 'react';
import axios from 'axios';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8055/api/user/forgetpassword', {
        email: email,
        password: newPassword,
        confirmPassword: confirmPassword
      });

      setMessage(response.data.message);
      setError(response.data.error);
    } catch (error) {
      setMessage('An error occurred. Please try again.');
      setError(true);
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
        <form onSubmit={handleSubmit} style={{ margin: "0 auto", textAlign: "center" }}>
          <h1 style={{ fontSize: "30px", textAlign: "center", marginBottom: "30px" }}>Forgot Password</h1>
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "50px",
              margin: "0 auto 30px",
              textAlign: "center"
            }}
            className="input-box"
          >
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100%",
                height: "100%",
                background: "transparent",
                border: "none",
                outline: "none",
                border: "2px solid white",
                borderRadius: "40px",
                color: "#fff",
                textAlign: "center"
              }}
            />
          </div>
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "50px",
              margin: "0 auto 30px",
              textAlign: "center"
            }}
            className="input-box"
          >
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              style={{
                width: "100%",
                height: "100%",
                background: "transparent",
                border: "none",
                outline: "none",
                border: "2px solid white",
                borderRadius: "40px",
                color: "#fff",
                textAlign: "center"
              }}
            />
          </div>
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "50px",
              margin: "0 auto 30px",
              textAlign: "center"
            }}
            className="input-box"
          >
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={{
                width: "100%",
                height: "100%",
                background: "transparent",
                border: "none",
                outline: "none",
                border: "2px solid white",
                borderRadius: "40px",
                color: "#fff",
                textAlign: "center"
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "30px"
            }}
            className="button"
          >
            <button
              type='submit'
              style={{
                width: "100%",
                height: "45px",
                border: "none",
                borderRadius: "40px",
                cursor: "pointer",
                fontSize: "18px",
                background: "#FF5733"
              }}
            >
              Save
            </button>
          </div>
        </form>
        {message && <p style={{ color: error ? 'red' : 'green' }}>{message}</p>}
      </div>
    </div>
  );
}
