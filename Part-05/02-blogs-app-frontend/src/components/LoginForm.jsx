import { useState } from 'react';
import styles from '../styles/LoginForm.module.css';
import loginService from '../../services/login';

const LoginForm = ({ setUser, onSwitchToRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    setError('');
    
    try {
      const user = await loginService.login({ username, password });
      setUser(user);
      setUsername('');
      setPassword('');
    } catch (error) {
      console.error('Login failed:', error);
      setError(error.response?.data?.error || 'Login failed. Please check your credentials.');
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginForm}>
        <h2 className={styles.loginTitle}>Welcome to BlogHub</h2>
        <p className={styles.loginSubtitle}>Sign in to create and manage your blogs</p>
        
        {error && <div className={styles.errorMessage}>{error}</div>}
        
        <form onSubmit={handleLogin} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="username" className={styles.label}>Username</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={({ target }) => setUsername(target.value)}
              className={styles.input}
              placeholder="Enter your username"
              required
            />
          </div>
          
          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.label}>Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              className={styles.input}
              placeholder="Enter your password"
              required
            />
          </div>
          
          <button type="submit" className={styles.loginButton}>
            Sign In
          </button>
        </form>
        
        <div className={styles.switchForm}>
          <p>Don't have an account?</p>
          <button onClick={onSwitchToRegister} className={styles.switchButton}>
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;