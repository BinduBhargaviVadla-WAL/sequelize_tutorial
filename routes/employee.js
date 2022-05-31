const express = require("express");
const router = express.Router();
const employeeModel = require("../models").Employee;

router.get("/", function (req, res) {
  employeeModel.findAll().then(
    function (employee) {
      res.status(200).json(employee);
    },
    function (error) {
      res.status(500).send(error);
    }
  );
});
router.post("/create", function (req, res) {
  employeeModel
    .create({
      name: req.body.name,
      designation: req.body.designation,
      salary: req.body.salary,
      companyId: req.body.companyId,
    })
    .then(function (employee) {
      res.status(200).json(employee);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});
module.exports = router;
