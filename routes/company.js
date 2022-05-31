const express = require("express");
const router = express.Router();
const companyModel = require("../models").Company;

router.get("/", function (req, res) {
  companyModel.findAll().then(
    function (company) {
      res.status(200).json(company);
    },
    function (error) {
      res.status(500).send(error);
    }
  );
});
router.post("/create", function (req, res) {
  companyModel
    .create({ name: req.body.name })
    .then(function (company) {
      res.status(200).json(company);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});
module.exports = router;
