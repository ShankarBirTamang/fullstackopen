import { useState } from 'react';
import styles from '../styles/BlogForm.module.css';

const BlogForm = ({ createBlog }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const blogObject = {
      title: title,
      author: author,
      url: url || 'https://www.google.com',
      likes: 0,
    };

    createBlog(blogObject);
    setTitle('');
    setAuthor('');
    setUrl('');
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Create New Blog Post</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="title" className={styles.label}>Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={styles.input}
            placeholder="Enter blog title..."
            required
          />
        </div>
        
        <div className={styles.inputGroup}>
          <label htmlFor="author" className={styles.label}>Author</label>
          <input
            id="author"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className={styles.input}
            placeholder="Enter author name..."
            required
          />
        </div>
        
        <div className={styles.inputGroup}>
          <label htmlFor="url" className={styles.label}>URL</label>
          <input
            id="url"
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className={styles.input}
            placeholder="Enter blog URL..."
          />
        </div>
        
        <button type="submit" id="createBlog" className={styles.submitButton}>
          Create Blog
        </button>
      </form>
    </div>
  );
};

export default BlogForm;