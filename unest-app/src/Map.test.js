import { render, screen } from '@testing-library/react';
import MapComp from './components/Map';

test('Map is rendered ', () => {
    render(<MapComp />)
    const map = screen.getByTestId('map')
    expect(map).toBeInTheDocument()
});