

## Setup Instructions

### 1. Database Setup

1. Navigate to the backend directory:
   ```sh
   cd backend
   ```
2. Seed the database with sample data:
   ```sh
   node seed.js
   ```
3. (Optional) Inspect the database using the SQLite CLI:
   ```sh
   sqlite3 preqin.db
   SELECT * FROM Investors;
   SELECT * FROM Commitments;
   .exit
   ```

### 2. Running the Server

1. Start the Express server:
   ```sh
   npm start
   ```
   The server will run at [http://localhost:3001](http://localhost:3001)

### 3. Running Tests backend

1. Run the test suite:
   ```sh
   npm test
   ```

---

## 4. Frontend Commands

1. Navigate to the frontend directory:
   ```sh
   cd frontend
   ```
2. Start the React development server:
   ```sh
   npm start
   ```
   The app will run at [http://localhost:3000](http://localhost:3000)
3. Run the frontend test suite:
   ```sh
   npm test
   ```
4. Build the frontend for production:
   ```sh
   npm run build
   ```
   The production-ready files will be in the `build` folder.

---





