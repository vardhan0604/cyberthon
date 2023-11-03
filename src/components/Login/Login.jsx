import React, { useState } from 'react';
import './Login.css'; // Import the CSS file
import logo from '../../img/logo.png'
const LoginPage = () => {
  const [officerId, setOfficerId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Officer ID:', officerId);
    console.log('Password:', password);
  };

  return (
    <div className="Login">
        <div className='logo'>
        <img src={logo} alt="" srcset="" className='logo'/>

        </div>
      <form onSubmit={handleLogin}>
        <label className="login-label">Officer ID</label>
        <input
          type="text"
          value={officerId}
          onChange={(e) => setOfficerId(e.target.value)}
          className="loginInput"
        />
        <br />
        <label className="login-label">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="loginInput"
        />
        <br />
        <button type="submit" className="button">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
