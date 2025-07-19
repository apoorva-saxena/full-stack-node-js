const express = require("express");
const db = require("./db");
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("API is running");
});

// GET all investors
app.get("/investors", (req, res) => {
  const limit = parseInt(req.query.limit) || 100;
  const page = parseInt(req.query.page) || 1;
  const offset = (page - 1) * limit;

  db.all(
    "SELECT * FROM Investors LIMIT ? OFFSET ?",
    [limit, offset],
    (err, rows) => {
      if (err) {
        return res
          .status(500)
          .json({ error: "Database error", details: err.message });
      }
      res.json({ page, limit, data: rows });
    }
  );
});

// GET all commitments
app.get("/commitments", (req, res) => {
  const limit = parseInt(req.query.limit) || 100;
  const page = parseInt(req.query.page) || 1;
  const offset = (page - 1) * limit;
  const assetClass = req.query.assetClass;

  let sql = "SELECT * FROM Commitments";
  const params = [];

  if (assetClass) {
    sql += " WHERE asset_class = ?";
    params.push(assetClass);
  }

  sql += " LIMIT ? OFFSET ?";
  params.push(limit, offset);

  db.all(sql, params, (err, rows) => {
    if (err) {
      return res
        .status(500)
        .json({ error: "Database error", details: err.message });
    }
    res.json({ page, limit, data: rows });
  });
});

app.get("/commitments/asset-class-sum", (req, res) => {
  const sql = `
    SELECT asset_class, SUM(amount) as total_amount
    FROM Commitments
    GROUP BY asset_class
    UNION ALL
    SELECT 'All' as asset_class, SUM(amount) as total_amount FROM Commitments
  `;
  db.all(sql, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: "Database error", details: err.message });
    }
    res.json(rows);
  });
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
