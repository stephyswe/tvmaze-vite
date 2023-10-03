import { screen } from '@testing-library/react';
import renderWithRouter from '../../../test/router';
import LandingPage from './landing'; // Adjust the import path as needed

describe('LandingPage', () => {
  test('renders the LandingPage component', () => {
    renderWithRouter(<LandingPage />);

    // Check if the landing page element is present
    const landingPageElement = screen.getByTestId('landing-page');
    expect(landingPageElement).toBeInTheDocument();

    // Check if the Logo component is present
    const logoElement = screen.getByTestId('logo'); // Replace with your actual logo text
    expect(logoElement).toBeInTheDocument();

    // Check if the SearchDefault component is present
    const searchElement = screen.getByTestId('search-default');
    expect(searchElement).toBeInTheDocument();
  });
});
