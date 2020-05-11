const express = require("express");
var router = express.Router();

const burger = require("../models/burgerModel.js");

router.get("/", function(request, response) {
    burger.all(function(data) {
        var hbsObject = {
            cats: data
        }
        console.log(hbsOgject);
        response.render("index", hbsObject);
    });
});

router.post("/api/cats", function(request, response) {
    burger.create(["name", "sleepy"], [request.body.name, request.body.eaten], function(result){
        response.json({ id: result.insertId });
    });
});

router.put("/api/buger/:id", function(request, response) {
    var eaten = "id = " + request.params.id;

    console.log("eaaten: ", eaten);

    burger.update(
        {
            sleepy: request.body.eaten
        },
        eaten,
        function(result) {
            if (result.changedRows === 0) {
                return result.status(404).end();
            }
            result.status(200).end();
        }
    );
});

module.exports = router;