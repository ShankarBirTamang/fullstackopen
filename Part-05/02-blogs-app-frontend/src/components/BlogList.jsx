import styles from '../styles/BlogList.module.css';
import Blog from './Blog';

const BlogList = ({ blogs, onLike, onDelete, user }) => (
  <div className={styles.container}>
    <h2 className={styles.title}>
      <span className={styles.titleIcon}>📚</span>
      Latest Blog Posts
    </h2>
    
    {blogs.length > 0 && (
      <div className={styles.blogCount}>
        {blogs.length} {blogs.length === 1 ? 'blog post' : 'blog posts'} found
      </div>
    )}
    
    {blogs.length === 0 ? (
      <div className={styles.emptyState}>
        <div className={styles.emptyIcon}>📝</div>
        <h3 className={styles.emptyTitle}>No blogs yet</h3>
        <p className={styles.emptyText}>Create your first blog post to get started!</p>
      </div>
    ) : (
      <div className={styles.blogGrid}>
         {blogs.map((blog, index) => (
          <Blog 
            key={blog.id || blog._id || index} 
            blog={blog} 
            isLast={index === blogs.length - 1}
            onLike={onLike}
            onDelete={onDelete}
            user={user}
          />
        ))}
      </div>
    )}
  </div>
);

export default BlogList;