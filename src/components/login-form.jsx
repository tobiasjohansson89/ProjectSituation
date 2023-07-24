import React, { useState } from 'react';

export default function RegisterForm() {

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== repeatPassword) {
      setPasswordError('Passwords do not match');
      return;
    }

    // Your registration logic here

    setEmail('');
    setUsername('');
    setPassword('');
    setRepeatPassword('');
    setPasswordError('');
  };

  return (
    <form onSubmit={handleSubmit} id='register-form'>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Repeat Password:
        <input
          type="password"
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
          required
        />
      </label>
      {passwordError && <div style={{ color: 'red' }}>{passwordError}</div>}
      <br />
      <button type="submit">Register</button>
    </form>
  );
};
