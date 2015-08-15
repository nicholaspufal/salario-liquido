var netSalaryCalculator = function(grossSalary, dependents) {
  var that = this;
  var numberOfDependents = dependents || 0;
  var DEPENDENT_VALUE = 189.59;

  var calculateAmountForDependents = function() {
    return numberOfDependents * DEPENDENT_VALUE;
  };

  var calculateINSS = function() {
    var value;
    var MAX_VALUE = 513.01;

    if (grossSalary <= 1399.12) {
      value = grossSalary * 0.08;
    }
    else if (grossSalary <= 2331.88) {
      value = grossSalary * 0.09;
    }
    else if (grossSalary <= 4663.75) {
      value = grossSalary * 0.11;
    }
    else  {
      value = MAX_VALUE;
    }

    return value.toFixed(2);
  };

  var calculateNetSalary = function() {
    return (grossSalary - that.INSS - that.IRRF).toFixed(2);
  };

  var baseAmount = function() {
    return (grossSalary - that.INSS - calculateAmountForDependents()).toFixed(2);
  };

  var calculateIRRF = function() {
    var calculationBasis = baseAmount();

    if (calculationBasis <= 1903.98) {
      value = 0.00;
    }
    else if (calculationBasis <= 2826.65) {
      value = (calculationBasis * 0.075) - 142.80;
    }
    else if (calculationBasis <= 3751.05) {
      value = (calculationBasis * 0.15) - 354.80;
    }
    else if (calculationBasis <= 4664.68) {
      value = (calculationBasis * 0.225) - 636.13;
    }
    else {
      value = (calculationBasis * 0.275) - 869.36;
    }

    return value.toFixed(2);
  };

  this.INSS = calculateINSS();
  this.IRRF = calculateIRRF();
  this.baseAmount = baseAmount();
  this.netSalary = calculateNetSalary();

  return this;
};

exports.netSalaryFor = function(grossSalary, dependents) {
  return new netSalaryCalculator(grossSalary, dependents);
};
