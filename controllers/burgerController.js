const express = require("express");
var router = express.Router();

const burger = require("../models/burgerModel.js");

router.get("/", function(request, response) {
   
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        }
        console.log(hbsObject);
        response.render("index", hbsObject);
    });
});

router.post("/api/burger", function(request, response) {
    burger.create(["burger_name", "devoured"], [request.body.name, request.body.devoured], function(result){
        response.json({ id: result.insertId });
    });
});

router.put("/api/buger/:id", function(request, response) {
    var eaten = "id = " + request.params.id;

    console.log("eaaten: ", eaten);

    burger.update(
        {
            devoured: request.body.eaten
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