import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import formatAmount from "../common/formatAmount";
import "./FilterButton.css"

const filters = [
  { label: "All", value: "All" },
  { label: "Hedge Funds", value: "Hedge Funds" },
  { label: "Private Equity", value: "Private Equity" },
  { label: "Real Estate", value: "Real Estate" },
  { label: "Infrastructure", value: "Infrastructure" },
  { label: "Natural Resources", value: "Natural Resources" },
  { label: "Private Debt", value: "Private Debt" },
];

function FilterButton({ active, onSelect, totals }) {
    
  return (
    <div className="FilterButtons">
      <ButtonGroup>
        {filters.map((filter) => (
          <Button
            key={filter.value}
            variant={
              active === filter.value ? "secondary" : "outline-secondary"
            }
            onClick={() => onSelect(filter.value)}
            style={{ minWidth: 120, marginRight: 8, textAlign: "center" }}
          >
            <div className="label">{filter.label}</div>
            <div className="amount">
              {formatAmount(totals?.[filter.value])}
            </div>
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
}

export default FilterButton;
