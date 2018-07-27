var express = require("express");
var router = express.Router();
var burger = require('../models/burger.js');


//create the routes
router.get("/", function (req, res) {

    burger.viewAll(function(data) {
        var hbsObject = {
          burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
      });
});
module.exports = router;
