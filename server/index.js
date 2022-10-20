const express = require("express");
const app = express();
const cors = require("cors");

// Middleware
app.use(cors());
app.use(express.json());

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server has started at the port ${PORT}`);
});