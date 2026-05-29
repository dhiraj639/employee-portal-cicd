const express = require("express");
const employeeRoutes = require("./routes/employeeRoutes");
const logger = require("./middleware/logger");

const app = express();

app.use(express.json());
app.use(logger);

app.get("/", (req, res) => {
    res.send("Employee Portal CI/CD Application");
});

app.use("/employees", employeeRoutes);

module.exports = app;