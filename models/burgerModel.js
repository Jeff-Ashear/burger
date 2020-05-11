const orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.all("burgers", function(response) {
            cb(response);
        });
    },
    create: function(cols, vals, cb) {
        orm.create("cats", cols, vals, function(resposne) {
            cb(response);
        });
    },
    update: function(objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function(response) {
            cb(res);
        });
    }
};

module.exports = burger;