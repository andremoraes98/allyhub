import { render, screen } from '@testing-library/react';
import Main from '../pages/main/Main';

test('if there is first', () => {
  render(<Main />);
  const linkElement = screen.getByText(/first/i);
  expect(linkElement).toBeInTheDocument();
});
