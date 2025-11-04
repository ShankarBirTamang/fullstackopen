-- commands.sql

-- 1️⃣ Create the blogs table
CREATE TABLE blogs (
    id SERIAL PRIMARY KEY,
    author VARCHAR(255),
    url TEXT NOT NULL,
    title TEXT NOT NULL,
    likes INTEGER DEFAULT 0
);

-- 2️⃣ Insert sample blog data
INSERT INTO
    blogs (author, url, title, likes)
VALUES (
        'Sankar Tamang',
        'https://sankartamang.com/blog1',
        'Learning PostgreSQL Basics',
        5
    ),
    (
        'Swikar Ramdam',
        'https://swikarramdam.com.np/blog2',
        'Building REST APIs with Node.js',
        8
    );