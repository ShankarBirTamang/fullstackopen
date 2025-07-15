const dummy = () => {
  return 1;
};

const totalLikes = (blogs) => {
  return blogs.reduce((sum, blog) => sum + blog.likes, 0);
};

const favoriteBlog = (blogs) => {
  if (blogs.length === 0) return null;

  return blogs.reduce((fav, blog) => (blog.likes > fav.likes ? blog : fav));
};

const mostBlogs = (blogs) => {
  if (blogs.length === 0) return null;

  const authorCounts = {};

  blogs.forEach((blog) => {
    authorCounts[blog.author] = (authorCounts[blog.author] || 0) + 1;
  });

  let topAuthor = null;
  let maxBlogs = 0;

  for (const [author, count] of Object.entries(authorCounts)) {
    if (count > maxBlogs) {
      topAuthor = author;
      maxBlogs = count;
    }
  }

  return {
    author: topAuthor,
    blogs: maxBlogs,
  };
};

const mostLikes = (blogs) => {
  if (blogs.length === 0) return null;

  const likesByAuthor = {};

  blogs.forEach((blog) => {
    likesByAuthor[blog.author] = (likesByAuthor[blog.author] || 0) + blog.likes;
  });

  let topAuthor = null;
  let maxLikes = 0;

  for (const [author, likes] of Object.entries(likesByAuthor)) {
    if (likes > maxLikes) {
      topAuthor = author;
      maxLikes = likes;
    }
  }

  return {
    author: topAuthor,
    likes: maxLikes,
  };
};

module.exports = { dummy, totalLikes, favoriteBlog, mostBlogs, mostLikes };
