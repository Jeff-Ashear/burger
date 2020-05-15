const express = require("express");
var router = express.Router();

const burger = require("../models/burgerModel.js");

router.get("/", function (request, response) {

    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        }
        console.log(hbsObject);
        response.render("index", hbsObject);
    });
});

router.post("/api/burger", function (request, response) {
    burger.create(["burger_name", "devoured"], [request.body.name, request.body.devoured], function (result) {
        response.json({ id: result.insertId });
    });
});

router.put("/api/burger/where/:id/set/devoured/:devouredNumBool", function (request, response) {
    var condition = "id = " + request.params.id;
    var setDevoured = request.params.devouredNumBool;

    console.log("condition: ", condition);

    burger.update(
        condition,
        setDevoured,
        function (result) {
            if (result.changedRows === 0) {
                return response.status(404).send({
                    message: "nothing was updated"
                });
            } else {
               return response.status(200).json(result);
            }
        }
    );
});

module.exports = router;