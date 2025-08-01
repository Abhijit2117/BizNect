import React, { useState } from 'react';
const Loginpage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle login logic here
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login to <span>BizNect</span></h2>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Password</label>
          <input
            type={passwordVisible ? 'text' : 'password'}
            placeholder="Enter your password"
            required
          />
          <div className="toggle-password" onClick={togglePassword}>
            {passwordVisible ? 'Hide' : 'Show'} Password
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember Me
            </label>
            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Loginpage;
