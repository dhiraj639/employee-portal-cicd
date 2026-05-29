const employees = require("../data/employees.json");

const getEmployees = (req, res) => {
    res.status(200).json(employees);
};

module.exports = {
    getEmployees
};