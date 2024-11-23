const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// POST API
app.post("/api/data", (req, res) => {
    console.log("Data received:", req.body);
    res.status(200).send({ message: "Data received successfully!" });
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
