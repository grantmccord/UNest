import { render, screen } from '@testing-library/react';
import PropertyListings from './components/propertyListings';

test('Image is rendered with right src link', () => {
    render(<PropertyListings />)
    const apartment = screen.getByTestId('apartment-image')
    expect(apartment).toHaveAttribute('src', '../Assets/Apartment.png')
});