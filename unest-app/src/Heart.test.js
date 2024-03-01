import React from 'react';
import { render, screen } from '@testing-library/react';
import Heart from 'react-heart';
import PropertyListings from './components/propertyListings';

test('Heart button is rendered', () => {
    const { getByTestId } = render(<PropertyListings />)
    const heart = getByTestId('heart')
    expect(heart).toBeInTheDocument()
});