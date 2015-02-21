module.exports = function() {
  var netSalaryCalculator = require('../../lib/netSalaryCalculator');
  global.expect = require('chai').expect;

  this.World = function World(callback) {
    this.netSalaryCalculator = netSalaryCalculator;
    callback();
  };
};