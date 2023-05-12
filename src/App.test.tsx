import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders payment methods', () => {
    render(<App />);
    const element = screen.getByText(/Payment/i);
    expect(element).toBeInTheDocument();
});
