import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// '@testing-library/react'
// '@testing-library/user-event'
import { Contact } from '../Contact/Contact';

describe('Contact component', () => {
  it('should display confirmation after send', () => {
    render(<Contact />);

    const nameField = screen.getByRole('textbox', {  name: /your name/i});
    userEvent.type(nameField, 'Patryk');

    const emailField = screen.getByRole('textbox', {  name: /your email/i});
    userEvent.type(emailField, 'patryk.omiotek@gmail.com');

    const button = screen.getByRole('button', {  name: /send/i});
    userEvent.click(button);

    expect(screen.getByText('E-mail sent: Patryk, patryk.omiotek@gmail.com')).toBeInTheDocument();
  });
});