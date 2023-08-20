import { render, screen, fireEvent } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import Logo from './logo';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(() => jest.fn()), // Ensure this mock returns a function.
}));

test('navigates to the root route when clicked', () => {
  const navigateMock = jest.fn(); // Create a jest function for spying.
  (useNavigate as jest.Mock).mockReturnValue(navigateMock); // Mock its return value.

  render(<Logo />);

  fireEvent.click(screen.getByAltText('logo'));
  expect(navigateMock).toHaveBeenCalledWith('/');
});
