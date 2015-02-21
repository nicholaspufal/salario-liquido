var netSalaryCalculator = require('../../lib/netSalaryCalculator');

describe('netSalaryCalculator', function() {
  describe('calculates INSS', function() {
    it('uses 8% when gross salary is below 1399.12', function() {
      var result = netSalaryCalculator.netSalaryFor(1355.00);
      expect(result.INSS).toEqual('108.40');
    });

    it('uses 9% when gross salary is below 2331.88', function() {
      var result = netSalaryCalculator.netSalaryFor(2300.00);
      expect(result.INSS).toEqual('207.00');
    });

    it('uses 11% when gross salary is below 4159', function() {
      var result = netSalaryCalculator.netSalaryFor(4000.00);
      expect(result.INSS).toEqual('440.00');
    });

    it('uses a hardcoded amount of 513.01 when gross salary is over 4663.75', function() {
      var result = netSalaryCalculator.netSalaryFor(4700);
      expect(result.INSS).toEqual('513.01');
    });
  });

  describe('calculates IR', function() {
    it('returns 0.00 when amount is below 1787.77', function() {
      var result = netSalaryCalculator.netSalaryFor(1780);
      expect(result.IR).toEqual('0.00');
    });
  });

  it('calculates net salary', function() {
    var result = netSalaryCalculator.netSalaryFor(1900);
    expect(result.netSalary).toEqual('1729.00');
  });
});