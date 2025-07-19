// underscore numbers is new in ES2021 its easier redability we can use 1000000000 as well and that will return the same result
function formatAmount(amount) {
    if (amount >= 1_000_000_000) return `£${(amount / 1_000_000_000).toFixed(1)}B`;
    if (amount >= 1_000_000) return `£${(amount / 1_000_000).toFixed(0)}M`;
    if (amount) return `£${amount}`;
    return '£0';
  }

export default formatAmount