import React from 'react';
// import Button from 'react-bootstrap/Button';

export default function ForgotPassword() {
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
          <h1 style={{ fontSize: "30px", textAlign: "center" }}>Change Password</h1>
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
              placeholder="Old Password"
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
              placeholder="New Password"
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
              fontSize: "18px"
            }}
          >
            Save
          </button>
          </div>
        </form>
      </div>
    </div>
  );
}
