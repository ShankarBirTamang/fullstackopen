/* eslint-disable jsx-a11y/label-has-associated-control */
import styles from '../styles/App.module.css';
import loginService from '../services/login';

const LoginForm = ({
  username,
  password,
  setUsername,
  setPassword,
  setUser,
}) => {
  const handleLogin = async (event) => {
    event.preventDefault();
    console.log('logging in with', username, password);
    try {
      const response = await loginService.login({ username, password });
      console.log('login successful', response);
      setUser(response);
      setUsername('');
      setPassword('');
    } catch (error) {
      console.error('login failed', error);
      alert('login failed');
    }
  };
  return (
    <div className={styles.loginForm}>
      <form onSubmit={handleLogin}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Username</label>
          <input
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
      </form>
    </div>
  );
};

export default LoginForm;
