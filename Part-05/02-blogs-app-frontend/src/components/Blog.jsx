import { useState } from 'react';
import styles from '../styles/BlogList.module.css';

const Blog = ({ blog, isLast, onLike, onDelete, user }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleLikeClick = () => {
    onLike(blog);
  };

  const handleDeleteClick = () => {
    if (window.confirm(`Remove blog "${blog.title}" by ${blog.author}?`)) {
      onDelete(blog.id);
    }
  };

    // Check if the current user is the creator of this blog

  // Extract user ID from JWT token
  const getUserIdFromToken = (token) => {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      console.log('JWT Payload:', payload); // Add this debug line
      return payload.id;
    } catch (error) {
      console.error('Error parsing JWT token:', error);
      return null;
    }
  };

  // Check if the current user is the creator of this blog
  const currentUserId = user && user.token ? getUserIdFromToken(user.token) : null;
  const isOwner = currentUserId && blog.user && blog.user === currentUserId;

  // Enhanced debug logging
  // console.log('Blog component debug:', {
  //   blogId: blog.id,
  //   blogUser: blog.user,
  //   // blogUserId: blog.user?.id,
  //   currentUser: user,
  //   currentUserId: currentUserId,
  //   isOwner: isOwner,
  //   // comparison: `${blog.user?.id} === ${currentUserId}`
  // });

  return (
    <div 
      className={`${styles.blogCard} ${isLast ? styles.new : ''} ${showDetails ? styles.expanded : ''} blog`}
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
           <span className={styles.authorIcon}>👤</span>
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
         {isOwner && (
           <button 
             onClick={handleDeleteClick}
             className={styles.deleteButton}
           >
             <span className={styles.deleteIcon}>🗑️</span>
             Delete
           </button>
         )}
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