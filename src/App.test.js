import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header sign in link', () => {
  render(<App />);
  const linkElement = screen.getByText(/SIGN IN/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders shop link', () => {
  render(<App />);
  const linkElement = screen.getByText(/SHOP/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders contact link', () => {
  render(<App />);
  const linkElement = screen.getByText(/CONTACT/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders directory item', () => {
  render(<App />);
  const linkElement = screen.getByText(/HATS/i);
  expect(linkElement).toBeInTheDocument();
});
