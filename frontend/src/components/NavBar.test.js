import { render, screen } from '@testing-library/react';
import NavBar from './NavBar';

describe('NavBar', () => {
  it('renders the brand and tabs', () => {
    render(<NavBar activeTab="investors" setActiveTab={() => {}} />);
    expect(screen.getByText(/Black Rock\(Preqin\)/i)).toBeInTheDocument();
    expect(screen.getByText(/Investors/i)).toBeInTheDocument();
    expect(screen.getByText(/Commitment/i)).toBeInTheDocument();
  });
}); 