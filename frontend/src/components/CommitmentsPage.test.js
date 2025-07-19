import { render, screen, waitFor } from '@testing-library/react';
import CommitmentsPage from './CommitmentsPage';

beforeEach(() => {
  global.fetch = jest.fn((url) => {
    if (url.includes('asset-class-sum')) {
      return Promise.resolve({
        json: () => Promise.resolve([])
      });
    }
    return Promise.resolve({
      json: () => Promise.resolve({ data: [] })
    });
  });
});

describe('CommitmentsPage', () => {
  it('renders table headers', async () => {
    render(<CommitmentsPage />);
    await waitFor(() => expect(screen.getByText('Asset Class')).toBeInTheDocument());
    expect(screen.getByText('Currency')).toBeInTheDocument();
    expect(screen.getByText('Amount')).toBeInTheDocument();
  });
}); 