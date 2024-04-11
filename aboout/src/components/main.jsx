import React, { useState } from 'react';
import './main.css';

const LoginForm = () => {
  const [isRegister, setIsRegister] = useState(false);

  const handleToggleForm = () => {
    setIsRegister(!isRegister);
  };

  return (
    <div className="shell">
      <h2 className="title">{isRegister ? 'Register' : 'Login'}</h2>
      <input type="text" id="username" placeholder={isRegister ? 'New Username' : 'Username'} />
      <input type="password" id="password" placeholder={isRegister ? 'New Password' : 'Password'} />
      <input type="submit" value={isRegister ? 'Register' : 'Login'} id="loginBtn" />
      <div className="footer">
        {isRegister ? null : (
          <div className="Remember">
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe">Remember Me</label>
          </div>
        )}
        <button id="Password" onClick={handleToggleForm}>
          {isRegister ? 'Go to Login' : 'Go to Register'}
        </button>
      </div>
    </div>
  );
};

export default LoginForm;