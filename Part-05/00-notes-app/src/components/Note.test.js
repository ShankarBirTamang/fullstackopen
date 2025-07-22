import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Notes from './Notes';

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
