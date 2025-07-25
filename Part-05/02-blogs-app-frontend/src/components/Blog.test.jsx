import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { jest } from '@jest/globals';
import Blog from './Blog';

describe('Blog', () => {
  const mockBlog = {
    title: 'Test Blog Title',
    author: 'Test Author',
    url: 'https://testblog.com',
    likes: 5,
    id: '123'
  };

  const mockOnLike = jest.fn();

  beforeEach(() => {
    mockOnLike.mockClear();
  });

  test('renders blog title and author but not URL or likes by default', () => {
    render(<Blog blog={mockBlog} onLike={mockOnLike} />);

    // Check that title is rendered
    const titleElement = screen.getByText('Test Blog Title');
    expect(titleElement).toBeInTheDocument();

    // Check that author is NOT rendered by default (since showDetails is false)
    const authorElement = screen.queryByText('Test Author');
    expect(authorElement).not.toBeInTheDocument();

    // Check that URL is NOT rendered by default
    const urlElement = screen.queryByText('Read Blog');
    expect(urlElement).not.toBeInTheDocument();

    // Check that likes are NOT rendered by default
    const likesElement = screen.queryByText('5');
    expect(likesElement).not.toBeInTheDocument();
  });

  test('shows URL and likes when view button is clicked', async () => {
    const user = userEvent.setup();
    render(<Blog blog={mockBlog} onLike={mockOnLike} />);

    // Click the view button
    const viewButton = screen.getByText('view');
    await user.click(viewButton);

    // Now check that author, URL, and likes are rendered
    expect(screen.getByText('Test Author')).toBeInTheDocument();
    expect(screen.getByText('Read Blog')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
  });
});