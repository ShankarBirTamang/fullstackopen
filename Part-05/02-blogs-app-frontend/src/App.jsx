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
    try {
      const newBlog = await blogService.create(blogObject,user.token);
      setBlogs(blogs.concat(newBlog));
      blogFormRef.current.toggleVisibility();
    } catch (error) {
      console.error('Error adding blog:', error);
    }
  };


const handleLike = async (blog) => {
  try {
    console.log('Liking blog:', blog); // Debug log
    
    const blogData = {
      likes: (blog.likes || 0) + 1,
      author: blog.author,
      title: blog.title,
      url: blog.url ,
    };
      // Only add user if it exists in the blog object
      if (blog.user && blog.user.id) {
        blogData.user = blog.user.id;
      }
      
    
    console.log('Sending blog data:', blogData); // Debug log
    
    const updatedBlog = await blogService.like(blog.id, blogData);
    
    console.log('Updated blog:', updatedBlog); // Debug log
    
    // Check if the response is valid
    if (updatedBlog && updatedBlog.id) {
      setBlogs(blogs.map(b => b.id === blog.id ? updatedBlog : b));
    } else {
      console.error('Invalid response from server:', updatedBlog);
      // Fallback: update the local state manually
      setBlogs(blogs.map(b => 
        b.id === blog.id 
          ? { ...b, likes: (b.likes || 0) + 1 }
          : b
      ));
    }
  } catch (error) {
    console.error('Error liking blog:', error);
    console.error('Error details:', error.response?.data || error.message);
  }
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
          <div className={styles.headerLeft}>
            <h1 className={styles.title}>
              <span className={styles.icon}>📝</span>
              BlogHub
            </h1>
            <p className={styles.subtitle}>Welcome, {user.name || user.username}!</p>
          </div>
          <div className={styles.headerRight}>
            <button onClick={handleLogout} className={styles.logoutButton}>
              <span className={styles.logoutIcon}>🚪</span>
              Logout
            </button>
          </div>
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
            <BlogList blogs={blogs} onLike={handleLike} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;