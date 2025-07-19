import formatAmount from './formatAmount';

describe('formatAmount', () => {
  it('formats billions correctly', () => {
    expect(formatAmount(2400000000)).toBe('£2.4B');
    expect(formatAmount(1000000000)).toBe('£1.0B');
  });

  it('formats millions correctly', () => {
    expect(formatAmount(1100000000)).toBe('£1.1B');
    expect(formatAmount(200000000)).toBe('£200M');
    expect(formatAmount(75000000)).toBe('£75M');
  });

  it('formats small numbers correctly', () => {
    expect(formatAmount(25000)).toBe('£25000');
    expect(formatAmount(0)).toBe('£0');
    expect(formatAmount(undefined)).toBe('£0');
    expect(formatAmount(null)).toBe('£0');
  });
}); 