# Preqin Technical Interview

Hello! If you are reading this, then we're in the process of chatting with you about a technical role at Preqin. Congratulations! To move forward, we'd like to know a bit about how you work. We'd like you to demonstrate your skills and abilities. 

Below is a user story that reflects with work you will be doing at Preqin day to day. **We would like you to deliver what you consider to be a finished product.** Most candidates spend around 3 hours on the exercise, please do not spend more than 5 hours.

You'll then showcase your work to some of our engineering team and discuss your solution. Please be prepared to share your screen, demo your app on the browser and walk us through your code.

## The User Story

The aim is to fulfill the following user story:

```
As a Preqin user,
I want to see a list of investors and the total of their commitments.
When I select an investor,
I want to see a breakdown of their commitments
And be able to filter them by Asset Class.
```

Sample data is provided in `data.csv`. Assume a sole currency of GBP, and ignore any authentication needs.

How you visualise the data is up to you, if you need guidance there are some optional wireframes in the repo.

## Technical Requirements

The solution is completely open (you are free to use any language and frameworks).
However we would like you to think and show knowledge of the following layers of a software system:

1. Data Layer: how to store the data.
2. Backend Services: how to provide data to consumers via a contractual API.
3. Web applications: how to consume and visualize data from API services on the web.
 
Ideally you should demonstrate knowledge of some of the tech stack used across our teams, which includes:

- React micro frontends (newer ones with typescript, older ones without),
- Python micro services (some using REST/FastAPI others using GQL/Strawberry), 
- C#/.NET backend APIs
- Postgres, MSSQL and Mongo databases (`SQLite` is a quick and easy way to include a database as a file with your code)

## Submitting your solution

Please submit your solution by sharing a public github or bitbucket with your code with the recruiter.
We ask you do not fork or PR against the Preqin repository.

Thank you and good luck!

---

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





