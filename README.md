This is the Node.js + Express backend for my E-Diary app. It's a RESTful API that supports creating, reading, updating, and deleting diary entries. 
The backend, hosted on the render free tier, is designed to connect to a MySQL database (which is not yet webhosted) 

TECH STACK:
Node.js
Express.js
MySQL (via mysql2/promise)
dotenv for environment configuration
CORS for cross-origin access from a frontend (e.g., GitHub Pages)

Since the database is not webhosted yet, this is how you can demo the backend:

1) Clone the repo
2) create a .env file that looks like this:
  DB_HOST=localhost
  DB_USER= YourDBName
  DB_PASS=YourDBPass
  DB_NAME=diarydb
  DB_PORT=3306

3) If you have mySQL open it and run this command:
   CREATE DATABASE diarydb;
    USE diarydb;
    CREATE TABLE entries (
      id VARCHAR(36) PRIMARY KEY,
      date DATE NOT NULL UNIQUE,
      text TEXT NOT NULL
    );

4) install the following dependencies in terminal pointed at the backend folder: npm install (for installing node), npm install mysql2 (for mysql2)
5)  start the server by doing "> npm start" which by then you should see "> Server running on port 3000"
6)  Go to my frontend page on github, there should be a link to the frontend in my README File, click it and test it out.

Future plans:
- Add features for mulitiple users to use the diary for their own entries 
 
