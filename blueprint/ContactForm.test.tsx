import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ContactForm from './ContactForm';

// Mock fetch for API testing
global.fetch = vi.fn();

describe('ContactForm Component', () => {
  it('renders all form fields', () => {
    render(<ContactForm />);
    expect(screen.getByLabelText(/Name/i)).toBeDefined();
    expect(screen.getByLabelText(/E-Mail Adresse/i)).toBeDefined();
    expect(screen.getByLabelText(/Betreff/i)).toBeDefined();
    expect(screen.getByLabelText(/Nachricht/i)).toBeDefined();
  });

  it('shows sending state on submit', async () => {
    (fetch as any).mockResolvedValue({ ok: true });
    render(<ContactForm />);
    
    fireEvent.change(screen.getByPlaceholderText(/Ihr Name/i), { target: { value: 'Test User' } });
    fireEvent.change(screen.getByPlaceholderText(/beispiel@mail.de/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText(/Wie können wir Ihnen helfen?/i), { target: { value: 'Hello' } });
    
    fireEvent.click(screen.getByRole('button', { name: /Nachricht abschicken/i }));
    
    expect(screen.getByText(/Wird gesendet.../i)).toBeDefined();
  });

  it('shows success message after successful submission', async () => {
    (fetch as any).mockResolvedValue({ ok: true });
    render(<ContactForm />);
    
    fireEvent.change(screen.getByPlaceholderText(/Ihr Name/i), { target: { value: 'Test User' } });
    fireEvent.change(screen.getByPlaceholderText(/beispiel@mail.de/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText(/Wie können wir Ihnen helfen?/i), { target: { value: 'Hello' } });
    
    fireEvent.click(screen.getByRole('button', { name: /Nachricht abschicken/i }));
    
    await waitFor(() => {
      expect(screen.getByText(/Nachricht gesendet!/i)).toBeDefined();
    });
  });

  it('handles submission error', async () => {
    (fetch as any).mockResolvedValue({ ok: false });
    window.alert = vi.fn();
    render(<ContactForm />);
    
    fireEvent.change(screen.getByPlaceholderText(/Ihr Name/i), { target: { value: 'Test User' } });
    fireEvent.change(screen.getByPlaceholderText(/beispiel@mail.de/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText(/Wie können wir Ihnen helfen?/i), { target: { value: 'Hello' } });
    
    fireEvent.click(screen.getByRole('button', { name: /Nachricht abschicken/i }));
    
    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith(expect.stringContaining('Fehler'));
    });
  });
});
