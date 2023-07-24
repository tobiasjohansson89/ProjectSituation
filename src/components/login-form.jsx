import React, { useState } from 'react';

export default function LoginForm() {

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  //const [repeatPassword, setRepeatPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  async function login() {
    const user = {
      username,
      email,
      password
    }
    const postOptions = {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
          'Content-Type': 'application/json'    
      }
    }
    // const response = await fetch("http://10.0.0.68:5000/login/", postOptions);
    // const json = await response.json();
    console.log(user)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    login();

    setEmail('');
    setUsername('');
    setPassword('');
    //setRepeatPassword('');
    setPasswordError('');
  };
  function close() {
    const formContainer = document.querySelector(".form-container");
    const form = document.getElementById("login-form");
    form.style.display = "none";
    formContainer.style.display = "none";
  }

  return (
    <form onSubmit={handleSubmit} id='login-form'>
      <p onClick={close} className='close-btn'>Close X</p>
      <label className="form-field">
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <br />
      <label className="form-field">
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>
      <br />
      <label className="form-field">
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <br />
      {/* <label>
        Repeat Password:
        <input
          type="password"
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
          required
        />
      </label> */}
      {passwordError && <div style={{ color: 'red' }}>{passwordError}</div>}
      <br />
      <div className='form-field'>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};
