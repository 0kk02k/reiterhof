import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Navigation from './Navigation';

describe('Navigation Component', () => {
  it('renders the logo text correctly', () => {
    render(<Navigation />);
    expect(screen.getByText('Biohof Mühlenberg')).toBeDefined();
  });

  it('contains the booking button', () => {
    render(<Navigation />);
    const buttons = screen.getAllByRole('button');
    const bookingButton = buttons.find(b => b.textContent?.includes('Buchung'));
    expect(bookingButton).toBeDefined();
  });

  it('renders all main navigation links', () => {
    render(<Navigation />);
    expect(screen.getByText('Aktuelles')).toBeDefined();
    expect(screen.getByText('Reitschule')).toBeDefined();
    expect(screen.getByText('Biohof')).toBeDefined();
  });
});
