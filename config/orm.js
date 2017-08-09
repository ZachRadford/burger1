
var connection = require("../config/connection.js");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function for SQL syntax.
function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }

  return arr.toString();
}


var orm = {

    all: function(tableInput, cb) {
    var queryString = "SELECT * FROM burgers;"
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
   },
  create: function(vals, cb) {
    var queryString = "INSERT INTO burgers (burger_name) VALUES (?);", [vals.length]
    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  // An example of objColVals would be {name: panther, sleepy: true}
  update: function(objColVals, condition, cb) {
    var queryString = "UPDATE burgers SET burger_name = ? WHERE id = ?;", [objColVals, condition]

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  delete: function(condition, cb) {
    var queryString = "DELETE FROM burgers WHERE id = ?;", [condition]

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

module.exports = orm;
