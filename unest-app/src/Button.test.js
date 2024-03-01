import { render, screen } from '@testing-library/react';
import PropertyListings from './components/propertyListings';

test('Button is rendered', () => {
    render(<PropertyListings />)
    const message = screen.getByTestId('message')
    expect(message).toBeInTheDocument()
});