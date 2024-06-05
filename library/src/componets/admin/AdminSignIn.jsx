import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';

export default function AdminSignIn() {
  const navigate = useNavigate();
  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:8055/api/admin/login',
        {
          adminId: adminId,
          password: password,
        }
      );

      if (response.data.error === false) {
        console.log('Login successful');
        alert(response.data.message);
        setError('');
        navigate('/adminDash');
      } else {
        setError('Invalid adminId or password. Please try again.');
        alert('Invalid adminId or password. Please try again.');
      }
    } catch (error) {
      console.error('Login unsuccessful:', error);
      setError('Invalid adminId or password. Please try again.');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        fontFamily: "'Roboto', sans-serif",
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        background: 'linear-gradient(45deg, #FF5733, #50C9C3, #FF5733)',
      }}
    >
      <div
        style={{
          width: '420px',
          background: 'transparent',
          color: 'white',
          padding: '20px',
          borderRadius: '8px',
          border: '2px solid yellow',
          backdropFilter: 'blur(20px)',
        }}
      >
        <form
          onSubmit={handleSignIn}
          style={{ margin: '0 auto', textAlign: 'center' }}
        >
          <h1
            style={{
              fontSize: '30px',
              textAlign: 'center',
              marginBottom: '30px',
            }}
          >
            Admin Sign-In
          </h1>
          <div className="input-box" style={{ marginBottom: '30px' }}>
            <input
              type="text"
              placeholder="Enter Admin ID"
              value={adminId}
              onChange={(e) => setAdminId(e.target.value)}
              style={{
                width: '100%',
                height: '100%',
                background: 'transparent',
                border: 'none',
                outline: 'none',
                border: '2px solid white',
                borderRadius: '40px',
                color: '#fff',
                textAlign: 'center',
              }}
              required
            />
          </div>
          <div className="input-box" style={{ marginBottom: '30px' }}>
            <input
              type="password"
              placeholder="Enter Admin Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '100%',
                height: '100%',
                background: 'transparent',
                border: 'none',
                outline: 'none',
                border: '2px solid white',
                borderRadius: '40px',
                color: '#fff',
                textAlign: 'center',
              }}
              required
            />
          </div>
          <button
            type="submit"
            style={{
              width: '100%',
              height: '45px',
              border: 'none',
              borderRadius: '40px',
              cursor: 'pointer',
              fontSize: '18px',
              background: 'blue',
            }}
          >
            SignIn
          </button>
          {error && (
            <p style={{ color: 'red', textAlign: 'center', marginTop: '20px' }}>
              {error}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
