/* eslint-disable jsx-a11y/label-has-associated-control */
import styles from '../styles/App.module.css';
import loginService from '../services/login';
import {useState} from 'react';

const LoginForm = ({
  username,
  password,
  setUsername,
  setPassword,
  setUser,
}) => {
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    console.log('logging in with', username, password);
    try {
      const response = await loginService.login({ username, password });
      console.log('login successful', response);
      setUser(response);
      setUsername('');
      setPassword('');
      setErrorMessage('');
    } catch (error) {
      console.error('login failed', error);
      setErrorMessage('wrong credentials');
      alert('login failed');
    }
  };
  return (
    <div className={styles.loginForm}>
      <form onSubmit={handleLogin}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Username</label>
          <input
            id='username'
            className={styles.input}
            type="text"
            value={username}
            name="Username"
            placeholder="Enter your username"
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Password</label>
          <input
            id='password'
            className={styles.input}
            type="password"
            value={password}
            name="Password"
            placeholder="Enter your password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button className={styles.button} type="submit">
          Login
        </button>
        {errorMessage && (
        <div className="error" style={{ 
            color: 'red', 
            borderStyle: 'solid',
            borderColor: 'red',
            borderWidth: '1px',
            padding: '10px',
            marginTop: '10px'
          }}>
          {errorMessage}
        </div>)}
      </form>
    </div>
  );
};

export default LoginForm;
