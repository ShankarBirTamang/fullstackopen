import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Notes from './Notes';
import { jest } from '@jest/globals';

test('renders content', () => {
  const note = {
    content: 'Component testing is done with react-testing-library',
    correct: true,
  };

  const { container } = render(<Notes note={note} />);
  const div = container.querySelector('.noteItem');

  screen.debug(div);

  expect(div).toHaveTextContent(
    'Component testing is done with react-testing-library'
  );

  //   const element = screen.getByText(
  //     'Component testing is done with react-testing-library'
  //   );

  //   expect(element).toBeDefined();
});

test('clicking the button calls event handler once', async () => {
  const note = {
    content: 'Component testing is done with react-testing-library',
    correct: true,
  };

  const mockHandler = jest.fn();

  render(<Notes note={note} updateNote={mockHandler} />);

  const user = userEvent.setup();
  const button = screen.getByText('✅ Correct');
  await user.click(button);

  expect(mockHandler.mock.calls).toHaveLength(1);
});
