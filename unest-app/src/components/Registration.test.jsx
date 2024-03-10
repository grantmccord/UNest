import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SignupPage from './SignUpPage';
import RegistrationInput from "./RegistrationInput";

test('Sign Up!', () => {
    render(<SignupPage />);
    const linkElement = screen.getByText(/Sign Up/i);
    expect(linkElement).toBeInTheDocument()
});
