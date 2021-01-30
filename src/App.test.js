import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureMockStore();
const store = mockStore({});

test('renders header sign in link', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  const linkElement = screen.getByText(/SIGN IN/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders shop link', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  const linkElement = screen.getByText(/SHOP/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders contact link', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  const linkElement = screen.getByText(/CONTACT/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders directory item', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  const linkElement = screen.getByText(/HATS/i);
  expect(linkElement).toBeInTheDocument();
});
