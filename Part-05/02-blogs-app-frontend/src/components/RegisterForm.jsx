import { useState } from 'react';
import styles from '../styles/RegisterForm.module.css';
import userService from '../../services/users';

const RegisterForm = ({ setUser, onSwitchToLogin }) => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (event) => {
    event.preventDefault();
    setError('');

    // Validation
    if (username.length < 3) {
      setError('Username must be at least 3 characters long');
      return;
    }

    if (password.length < 3) {
      setError('Password must be at least 3 characters long');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const newUser = await userService.register({ username, name, password });
      setUser(newUser);
      setUsername('');
      setName('');
      setPassword('');
      setConfirmPassword('');
    } catch (error) {
      console.error('Registration failed:', error);
      setError(error.response?.data?.error || 'Registration failed. Please try again.');
    }
  };

  return (
    <div className={styles.registerContainer}>
      <div className={styles.registerForm}>
        <h2 className={styles.registerTitle}>Join BlogHub</h2>
        <p className={styles.registerSubtitle}>Create your account to start blogging</p>
        
        {error && <div className={styles.errorMessage}>{error}</div>}
        
        <form onSubmit={handleRegister} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="username" className={styles.label}>Username</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={({ target }) => setUsername(target.value)}
              className={styles.input}
              placeholder="Enter username (min 3 characters)"
              required
            />
          </div>
          
          <div className={styles.inputGroup}>
            <label htmlFor="name" className={styles.label}>Full Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={({ target }) => setName(target.value)}
              className={styles.input}
              placeholder="Enter your full name"
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
              placeholder="Enter password (min 3 characters)"
              required
            />
          </div>
          
          <div className={styles.inputGroup}>
            <label htmlFor="confirmPassword" className={styles.label}>Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={({ target }) => setConfirmPassword(target.value)}
              className={styles.input}
              placeholder="Confirm your password"
              required
            />
          </div>
          
          <button type="submit" className={styles.registerButton}>
            Create Account
          </button>
        </form>
        
        <div className={styles.switchForm}>
          <p>Already have an account?</p>
          <button onClick={onSwitchToLogin} className={styles.switchButton}>
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm; 