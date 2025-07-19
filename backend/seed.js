
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const db = require('./db');

const schemaPath = path.join(__dirname, 'models', 'schema.sql');
const dataPath = path.join(__dirname, 'models', 'data.csv');

const investorMap = new Map();

function runSeed() {
    db.serialize(() => {
        const schema = fs.readFileSync(schemaPath, 'utf8');
        db.exec(schema);

        fs.createReadStream(dataPath)
            .pipe(csv())
            .on('data', (row) => {
                const name = row['Investor Name'];
                const type = row['Investory Type'];
                const country = row['Investor Country'];
                const date_added = row['Investor Date Added'];
                const last_updated = row['Investor Last Updated'];
                const asset_class = row['Commitment Asset Class'];
                const amount = parseInt(row['Commitment Amount'], 10);
                const currency = row['Commitment Currency'];

                if (!investorMap.has(name)) {
                    db.run(
                        `INSERT INTO Investors (name, type, date_added, country, last_updated) VALUES (?, ?, ?, ?, ?)`,
                        [name, type, date_added, country, last_updated],
                        function (err) {
                            if (err) {
                                console.error('Error inserting investor:', err);
                                return;
                            }
                            // this.lastID is a unique id assigned by SQLite db
                            investorMap.set(name, this.lastID);
                            insertCommitment(this.lastID);
                        }
                    );
                } else {
                    insertCommitment(investorMap.get(name));
                }

                function insertCommitment(investor_id) {
                    db.run(
                        `INSERT INTO Commitments (investor_id, asset_class, amount, currency) VALUES (?, ?, ?, ?)`,
                        [investor_id, asset_class, amount, currency],
                        (err) => {
                            if (err) {
                                console.error('Error inserting commitment:', err);
                            }
                        }
                    );
                }
            })
            .on('end', () => {
                console.log('Database seeded successfully.');
            });
    });
}

runSeed();
