DROP TABLE IF EXISTS investors;
DROP TABLE IF EXISTS commitments;

CREATE TABLE investors (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    type TEXT,
    date_added DATE,
    country TEXT,
    last_updated DATE
);

CREATE TABLE commitments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    investor_id INTEGER NOT NULL,
    asset_class TEXT,
    amount INT,
    currency TEXT,
    FOREIGN KEY (investor_id) REFERENCES Investors(id)
);
