import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import FilterButton from './FilterButton';
import formatAmount from '../common/formatAmount';
import './CommitmentsPage.css'

function CommitmentsPage() {
  const [commitments, setCommitments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totals, setTotals] = useState({});
  const [activeFilter, setActiveFilter] = useState('All');

  const fetchCommitments = (filter) => {
    setLoading(true);
    let url = '/commitments';
    if (filter && filter !== 'All') {
      url += `?assetClass=${encodeURIComponent(filter)}`;
    }
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCommitments(data.data || []);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to fetch commitments');
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchCommitments(activeFilter);
    // eslint-disable-next-line
  }, [activeFilter]);

  useEffect(() => {
    fetch('/commitments/asset-class-sum')
      .then(res => res.json())
      .then(data => {
        const totalsObj = {};
        data.forEach(item => {
          totalsObj[item.asset_class] = item.total_amount;
        });
        setTotals(totalsObj);
      });
  }, []);

  const handleSelect = (filter) => {
    setActiveFilter(filter);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="CommitmentsPage">
        <h1 className="CommitmentsHeader">Commitments</h1>
      <FilterButton totals={totals} active={activeFilter} onSelect={handleSelect} />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Asset Class</th>
            <th>Currency</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {commitments.map((inv) => (
            <tr key={inv.id}>
              <td>{inv.id}</td>
              <td>{inv.asset_class}</td>
              <td>{inv.currency}</td>
              <td>{formatAmount(inv.amount)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default CommitmentsPage;