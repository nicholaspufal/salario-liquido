var netSalaryCalculator = function(grossSalary) {
  var calculateINSS = function() {
    var value;
    var MAX_VALUE = 513.01;

    if (grossSalary <= 1399.12) {
      value = (grossSalary * 0.08).toFixed(2);
    }
    else if (grossSalary <= 2331.88) {
      value = (grossSalary * 0.09).toFixed(2);
    }
    else if (grossSalary <= 4159) {
      value = (grossSalary * 0.11).toFixed(2);
    }
    else  {
      value = (MAX_VALUE).toFixed(2);
    }

    return value;
  };


  var calculateNetSalary = function() {
    return (grossSalary - calculateINSS()).toFixed(2);
  };

  var calculateIR = function() {
    var value = 0.00;
    return value.toFixed(2);
  };

  this.INSS = calculateINSS();
  this.netSalary = calculateNetSalary();
  this.IR = calculateIR();

  return this;
};

exports.netSalaryFor = function(grossSalary) {
  return new netSalaryCalculator(grossSalary);
};