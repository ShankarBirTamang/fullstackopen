import { render, screen } from '@testing-library/react';
import NotesForm from './NotesForm';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

// Mock the noteService - this needs to be at the top level, not inside a test
jest.mock('../services/notes', () => ({
  create: jest
    .fn()
    .mockResolvedValue({ data: { id: 1, content: 'test note' } }),
}));

test('<NotesForm /> updates parent state and calls onSubmit', async () => {
  const setMyNotes = jest.fn();
  const updateNote = jest.fn();
  const user = userEvent.setup();
  const mockUser = { name: 'Test User', token: 'test-token' };
  const mockNotes = [];

  render(
    <NotesForm
      myNotes={mockNotes}
      setMyNotes={setMyNotes}
      updateNote={updateNote}
      user={mockUser}
    />
  );

  // First, click the "+" button to show the form
  const toggleButton = screen.getByText('+');
  await user.click(toggleButton);

  // Now the input and button should be visible
  const input = screen.getByRole('textbox');
  const sendButton = screen.getByText('Add Note');

  await user.type(input, 'testing a form...');
  await user.click(sendButton);

  // Verify the form was submitted and state was updated
  expect(setMyNotes).toHaveBeenCalled();
});
