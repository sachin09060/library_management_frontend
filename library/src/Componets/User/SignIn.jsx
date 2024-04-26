import React from 'react';
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function UserSignIn() {
  const navigate = useNavigate(); 
  const handleClick = () => {
    navigate('/UserSignIn');
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
        <form action="">
          <h1 style={{ fontSize: "30px", textAlign: "center" }}>Sign-In</h1>
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "50px",
              margin: "30px 0"
            }}
            className="input-box"
          >
            <input
              type="text"
              placeholder="User"
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
              required
            />
            <FaUser
              style={{
                position: "absolute",
                right: "20px",
                top: "50%",
                transform: "translateY(-50%)",
                fontSize: "18px"
              }}
              className="icon"
            />
          </div>
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "50px",
              margin: "30px 0"
            }}
            className="input-box"
          >
            <input
              type="password"
              placeholder="Password"
              style={{
                width: "100%",
                height: "100%",
                background: "transparent",
                border: "none",
                outline: "none",
                border: "2px solid white",
                borderRadius: "40px",
                color: "#fff"
              }}
              required
            />
            <RiLockPasswordFill
              style={{
                position: "absolute",
                right: "20px",
                top: "50%",
                transform: "translateY(-50%)",
                fontSize: "18px"
              }}
              className="icon"
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "16px",
              margin: "-15px 0 15px"
            }}
            className="remember-forgot"
          >
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <Link to="/Forgot"
              style={{ color: "white", textDecoration: "none" }}
            >
              Forgot password?
              </Link>
          </div>
          <button
          onClick={handleClick}
            type='submit'
            style={{
              width: "100%",
              height: "45px",
              border: "none",
              borderRadius: "40px",
              cursor: "pointer",
              fontSize: "18px"
            }}
          >
            SignIn
          </button>
          <div
            style={{
              fontSize: "14px",
              textAlign: "center",
              marginTop: "20px"
            }}
            className="register-link"
          >
            <p>
              Don't have an account?{" "}
              <Link to="/UserSignUp" style={{ color: "#fff", textDecoration: "none" }}>
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
