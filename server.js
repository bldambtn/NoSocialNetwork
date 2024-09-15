// Import essential modules and configurations
const express = require("express");
const db = require("./config/connection");
const routes = require("./routes/apiRoutes");

// Initialize express and port
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes for API
app.use("/api", routes);

// Start the server once the DB connection is established
db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
