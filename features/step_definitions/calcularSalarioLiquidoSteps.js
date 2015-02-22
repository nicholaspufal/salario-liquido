var netSalarySteps = function() {
  var grossSalary, result, dependents;

  this.Given(/^que eu recebo um salário bruto de (.*)$/, function (_grossSalary_, callback) {
    grossSalary = _grossSalary_;
    callback();
  });

  this.Given(/^que eu tenho (.*) dependentes$/, function (_dependents_, callback) {
    dependents = _dependents_;
    callback();
  });

  this.Given(/^eu calcular o meu salário líquido$/, function (callback) {
    result = this.netSalaryCalculator.netSalaryFor(grossSalary, dependents);
    callback();
  });

  this.Given(/^a minha contribuição para o INSS é de (.*)$/, function (expectedINSS, callback) {
    expect(result.INSS).to.equal(expectedINSS);
    callback();
  });

  this.Given(/^esse valor representa (.*) de desconto$/, function (percentage, callback) {
    if (percentage.match(/\d+%/)) {
      var expectedPercentage = removePercentageSymbol(percentage);
      var amountBasedOnExpectedPercentage = (grossSalary * expectedPercentage * 0.01).toFixed(2);
      expect(result.INSS).to.equal(amountBasedOnExpectedPercentage);
    }

    callback();
  });

  this.Given(/^a base de cálculo para o meu IRRF é de (.*)$/, function (expectedCalcBasis, callback) {
    expect(result.baseAmount).to.equal(expectedCalcBasis);

    callback();
  });

  this.Given(/^isso significa que meu IRRF é de (.*)$/, function (expectedIRRF, callback) {
    expect(result.IRRF).to.equal(expectedIRRF);
    callback();
  });

  this.Given(/^o meu IRRF é de (.*)$/, function (expectedIRRF, callback) {
    expect(result.IRRF).to.equal(expectedIRRF);
    callback();
  });

  this.Given(/^isso significa que meu salário líquido é de (.*)$/, function (expectedNetSalary, callback) {
    expect(result.netSalary).to.equal(expectedNetSalary);
    callback();
  });
};

var removePercentageSymbol = function(input) {
  return input.split('%')[0];
};

module.exports = netSalarySteps;