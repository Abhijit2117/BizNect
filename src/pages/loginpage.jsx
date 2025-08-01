import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Loginpage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const styles = {
    page: {
      margin: 0,
      padding: 0,
      backgroundColor: '#0B0B0C',
      fontFamily: "'Segoe UI', sans-serif",
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    },
    box: {
      background: 'linear-gradient(145deg, #1c1c1e, #111113)',
      padding: '50px 40px',
      borderRadius: '16px',
      boxShadow: '0 0 40px rgba(217, 183, 118, 0.08)',
      width: '100%',
      maxWidth: '420px',
      color: '#fff',
      border: '1px solid rgba(217, 183, 118, 0.1)',
    },
    heading: {
      textAlign: 'center',
      marginBottom: '35px',
      fontSize: '30px',
      color: '#D9B776',
      fontWeight: 600,
      letterSpacing: '1px',
    },
    label: {
      display: 'block',
      marginBottom: '8px',
      marginTop: '20px',
      color: '#D9B776',
      fontWeight: 500,
      fontSize: '14px',
    },
    input: {
      width: '100%',
      padding: '14px 16px',
      marginBottom: '10px',
      border: 'none',
      borderRadius: '8px',
      backgroundColor: '#202124',
      color: '#fff',
      fontSize: '15px',
      outline: 'none',
    },
    options: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '15px',
      marginBottom: '25px',
      fontSize: '14px',
      color: '#bbb',
    },
    link: {
      color: '#D9B776',
      textDecoration: 'none',
    },
    button: {
      width: '100%',
      padding: '14px',
      background: 'linear-gradient(90deg, #D9B776, #e8c684)',
      border: 'none',
      borderRadius: '10px',
      fontWeight: 600,
      color: '#000',
      fontSize: '16px',
      cursor: 'pointer',
      boxShadow: '0 4px 12px rgba(217, 183, 118, 0.3)',
      transition: 'all 0.3s ease',
    },
    buttonHover: {
      background: '#f0d487',
    },
  };
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/home');
  };
 
  return (
    <div style={styles.page}>
      <div style={styles.box}>
        <h2 style={styles.heading}>Login to BizNect</h2>
        <form onSubmit={handleLogin}>
          <label style={styles.label}>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            style={styles.input}
            required
          />

          <label style={styles.label}>Password</label>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter your password"
            style={styles.input}
            required
          />

          <div style={styles.options}>
            <label>
              <input
                type="checkbox"
                onClick={() => setShowPassword(!showPassword)}
              />{' '}
              Show Password
            </label>
            <a href="#" style={styles.link}>
              Forgot Password?
            </a>
          </div>
          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Loginpage;
