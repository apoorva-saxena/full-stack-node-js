import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import './InvestorsPage.css'

function InvestorsPage() {
  const [investors, setInvestors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/investors')
      .then((res) => res.json())
      .then((data) => {
        setInvestors(data.data || []);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to fetch investors');
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className='InvestorsPage'>
        <h1 className="InvestorsHeader">Investors</h1>
        <Table striped bordered hover>
        <thead>
            <tr>
            <th>id</th>
            <th>Name</th>
            <th>Type</th>
            <th>Date Added</th>
            <th>Country</th>
            </tr>
        </thead>
        <tbody>
            {investors.map((inv) => (
            <tr key={inv.id}>
                <td>{inv.id}</td>
                <td>{inv.name}</td>
                <td>{inv.type}</td>
                <td>{inv.date_added}</td>
                <td>{inv.country}</td>
            </tr>
            ))}
        </tbody>
        </Table>
    </div>
  );
}

export default InvestorsPage;