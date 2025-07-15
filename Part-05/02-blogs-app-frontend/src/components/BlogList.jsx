import styles from '../styles/BlogList.module.css';

const BlogList = ({ blogs }) => (
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
          <div 
            key={blog._id || blog.id} 
            className={`${styles.blogCard} ${index === blogs.length - 1 ? styles.new : ''}`}
          >
            <div className={styles.blogHeader}>
              <h3 className={styles.blogTitle}>{blog.title}</h3>
              <div className={styles.blogMeta}>
                <span className={styles.author}>
                  <span className={styles.authorIcon}>👤</span>
                  {blog.author || 'Anonymous'}
                </span>
                <span className={styles.likes}>
                  <span className={styles.likesIcon}>❤️</span>
                  {blog.likes || 0}
                </span>
              </div>
            </div>
            
            {blog.url && (
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
        ))}
      </div>
    )}
  </div>
);

export default BlogList;