import { useState, useEffect, useRef } from 'react';
import BlogList from './components/BlogList';
import BlogForm from './components/BlogForm';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Togglable from './components/Togglable';
import blogService from '../services/blogs';
import styles from './styles/App.module.css';

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [user, setUser] = useState(null);
  const [showRegister, setShowRegister] = useState(false);
  const blogFormRef = useRef();

  useEffect(() => {
    blogService.getAll().then(setBlogs);
  }, []);

  const addBlog = async (blogObject) => {
    const newBlog = await blogService.create(blogObject);
    setBlogs(blogs.concat(newBlog));
    blogFormRef.current.toggleVisibility();
  };

  const handleLogout = () => {
    setUser(null);
  };

  const switchToRegister = () => {
    setShowRegister(true);
  };

  const switchToLogin = () => {
    setShowRegister(false);
  };

  if (!user) {
    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <h1 className={styles.title}>
              <span className={styles.icon}>📝</span>
              BlogHub
            </h1>
            <p className={styles.subtitle}>Share your thoughts with the world</p>
          </div>
        </header>
        {showRegister ? (
          <RegisterForm setUser={setUser} onSwitchToLogin={switchToLogin} />
        ) : (
          <LoginForm setUser={setUser} onSwitchToRegister={switchToRegister} />
        )}
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.title}>
            <span className={styles.icon}>📝</span>
            BlogHub
          </h1>
          <p className={styles.subtitle}>Welcome, {user.name || user.username}!</p>
        </div>
      </header>
      
      <main className={styles.main}>
        <div className={styles.content}>
          <div className={styles.formSection}>
            <Togglable buttonLabel="✨ Create New Blog" ref={blogFormRef}>
              <BlogForm createBlog={addBlog} />
            </Togglable>
          </div>
          
          <div className={styles.blogsSection}>
            <BlogList blogs={blogs} />
          </div>
        </div>
        
        <div className={styles.logoutSection}>
          <button onClick={handleLogout} className={styles.logoutButton}>
            Logout
          </button>
        </div>
      </main>
    </div>
  );
};

export default App;