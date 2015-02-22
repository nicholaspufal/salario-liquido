var netSalaryCalculator = function(grossSalary, dependents) {
  var numberOfDependents = dependents || 0;
  var DEPENDENT_VALUE = 179.71;

  var calculateAmountForDependents = function() {
    return numberOfDependents * DEPENDENT_VALUE;
  };

  var calculateINSS = function() {
    var value;
    var MAX_VALUE = 513.01;

    if (grossSalary <= 1317.07) {
      value = grossSalary * 0.08;
    }
    else if (grossSalary <= 2195.12) {
      value = grossSalary * 0.09;
    }
    else if (grossSalary <= 4390.24) {
      value = grossSalary * 0.11;
    }
    else  {
      value = MAX_VALUE;
    }

    return value.toFixed(2);
  };

  var calculateNetSalary = function() {
    var INSS = calculateINSS();
    var IRRF = calculateIRRF();

    return (grossSalary - INSS - IRRF).toFixed(2);
  };

  var baseAmount = function() {
    var INSS = calculateINSS();
    return (grossSalary - INSS - calculateAmountForDependents()).toFixed(2);
  };

  var calculateIRRF = function() {
    var calculationBasis = baseAmount();

    if (calculationBasis <= 1787.77) {
      value = 0.00;
    }
    else if (calculationBasis <= 2679.29) {
      value = (calculationBasis * 0.075) - 134.08;
    }
    else if (calculationBasis <= 3572.43) {
      value = (calculationBasis * 0.15) - 335.03;
    }
    else if (calculationBasis <= 4463.81) {
      value = (calculationBasis * 0.225) - 602.96;
    }
    else {
      value = (calculationBasis * 0.275) - 826.15;
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