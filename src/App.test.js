import { render, screen } from '@testing-library/react';
import userEvents from '@testing-library/user-event';
import App from './App';

test('disable button on intial render', () => {
  render(<App />);

  expect(screen.getByRole('button', { name: /sign in/i })).toBeDisabled();
  userEvents.type(screen.getByRole('textbox', { name: /username/i }), 'sadasd');
  userEvents.type(screen.getByLabelText(/password/i), 'sadasd');
  expect(screen.getByRole('button', { name: /sign in/i })).toBeEnabled();
});
