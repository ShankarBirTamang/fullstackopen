import { useState } from 'react';
import styles from '../styles/BlogList.module.css';

const Blog = ({ blog, isLast, onLike }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleLikeClick = () => {
    onLike(blog);
  };

  return (
    <div 
      className={`${styles.blogCard} ${isLast ? styles.new : ''} ${showDetails ? styles.expanded : ''}`}
    >
      <div className={styles.blogHeader}>
        <div className={styles.blogTitleRow}>
          <h3 className={styles.blogTitle}>{blog.title}</h3>
          <button 
            onClick={toggleDetails}
            className={styles.toggleButton}
          >
            {showDetails ? 'hide' : 'view'}
          </button>
        </div>
     
      </div>
      
  

      {showDetails && (
         <div className={styles.blogMeta}>
         <span className={styles.author}>
           <span className={styles.authorIcon}>��</span>
           {blog.author || 'Anonymous'}
         </span>
         <span className={styles.likes}>
          <button 
            onClick={handleLikeClick}
            className={styles.likeButton}
          >
           <span className={styles.likesIcon}>❤️</span>
          </button>
           {blog.likes || 0}
         </span>
       </div>
      )}


      
      {showDetails && blog.url && (
        <a 
          href={blog.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.blogLink}
        >
          <span className={styles.linkIcon}>🔗</span>
          Read Blog
        </a>
      )}
    </div>
  );
};

export default Blog;