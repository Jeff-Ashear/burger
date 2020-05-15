const connection = require("./connection.js");


const orm = {
    all: function (table, callback) {
        connection.query(`select * from ${table};`, function (err, results) {
            if (err) {
                throw err;
            }
            callback(results)
        })
    },
    create: function ( table, columns, values, callback) {

        values[1] = parseInt(values[1]);

        values = values.map(el => {
            if(typeof(el) === "string") {
                return `"${el}"`;
            } else {
                return el;
            }
        })

        let query = `INSERT INTO ${table} (${columns}) values (${values})`;
        

        connection.query(query, function (err, results) {
            if (err)
                throw err;

            callback(results);
        })
    },

    update: function (condition, setDevoured, callback) {
        let query = `UPDATE burgers SET devoured = ${setDevoured}  WHERE ${condition}`; //<------- Construct your query here/ Look at line 6 for exampleo f the query
        connection.query(query, function (err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        })
    }
}

module.exports = orm;