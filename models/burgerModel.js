const orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.all("burgers", function(response) {
            cb(response);
        });
    },
    create: function(cols, vals, cb) { // can pass the call back or creat below like 11
        orm.create("burgers", cols, vals, function(resposne) {
            cb(response);
        });
    },
    update: function(objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function(response) {
            cb(res); // these are gooda s long as you pass these values fromt he controller
                        // other wise, our have o contruct here. Readt he read me though. There ar only a couple fields thate ver need to be
                            // be updated, so you don't really needa  variable being passed from the controller. You could just set those cvalues here, sincet he state3 is 
                            // only eaten or not eated. 
        });
    }
};

module.exports = burger;