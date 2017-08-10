
var orm = require("../config/orm.js");

var burgers = {

  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create(vals, cb);
  },
  update: function(objColVals, condition, cb) {
    orm.update(objColVals, condition, cb)
  },
  delete: function(condition, cb) {
    orm.delete(condition, cb)
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burgers;
