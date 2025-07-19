import { render, screen, waitFor } from '@testing-library/react';
import InvestorsPage from './InvestorsPage';

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ data: [] })
    })
  );
});

describe('InvestorsPage', () => {
  it('renders table headers', async () => {
    render(<InvestorsPage />);
    await waitFor(() => expect(screen.getByText('Name')).toBeInTheDocument());
    expect(screen.getByText('Type')).toBeInTheDocument();
    expect(screen.getByText('Date Added')).toBeInTheDocument();
    expect(screen.getByText('Country')).toBeInTheDocument();
  });
}); 