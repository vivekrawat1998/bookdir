// index.js
const app = require('./app');
const dotenv = require("dotenv");
const cors = require('cors');
const connectDatabase = require("../backend/database/Database");

console.log("Environment variables loaded successfully.");

// Apply CORS middleware
app.use(cors());

console.log("Connecting to the database...");

// Connect to the database
connectDatabase()
  .then(() => {
    console.log("Database connected successfully.");
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error.message);
    process.exit(1);
  });

const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
