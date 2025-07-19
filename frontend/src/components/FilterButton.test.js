import { render, screen } from '@testing-library/react';
import FilterButton from './FilterButton';

describe('FilterButton', () => {
  const totals = {
    All: 2400000000,
    'Hedge Funds': 1100000000,
    'Private Equity': 1000000000,
    'Real Estate': 200000000,
    Infrastructure: 75000000,
    'Natural Resources': 25000000,
    'Private Debt': 50000000,
  };

  it('renders all filter buttons with totals', () => {
    render(<FilterButton active="All" onSelect={() => {}} totals={totals} />);
    expect(screen.getByText('All')).toBeInTheDocument();
    expect(screen.getByText('Hedge Funds')).toBeInTheDocument();
    expect(screen.getByText('Private Equity')).toBeInTheDocument();
    expect(screen.getByText('Real Estate')).toBeInTheDocument();
    expect(screen.getByText('Infrastructure')).toBeInTheDocument();
    expect(screen.getByText('Natural Resources')).toBeInTheDocument();
    expect(screen.getByText('Private Debt')).toBeInTheDocument();
    expect(screen.getAllByText(/£/).length).toBeGreaterThanOrEqual(7);
  });
}); 