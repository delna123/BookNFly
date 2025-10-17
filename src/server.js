const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Health check route
app.get("/health", (req, res) => {
  res.json({ status: "ok", message: "BookNFly API is running!" });
});
// root route
app.get("/",(req,res) => {
  res.send("Welcome to BookNFly Api")
});

async function startServer() {
  await connectDB(); // connect to Mongo first
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
}
const users = require("./models/users")
startServer();
