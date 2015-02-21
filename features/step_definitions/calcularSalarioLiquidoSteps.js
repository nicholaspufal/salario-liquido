var netSalarySteps = function() {
  var grossSalary, result;

  this.Given(/^que o desconto do INSS é feito da seguinte forma:$/, function (table, callback) {
    callback();
  });

  this.Given(/^que a alíquota do imposto de renda segue os valores:$/, function (table, callback) {
    callback();
  });

  this.Given(/^que eu recebo um salário bruto de (\d+\.\d+)$/, function (_grossSalary_, callback) {
    grossSalary = _grossSalary_;
    callback();
  });

  this.Given(/^eu calcular o meu salário líquido$/, function (callback) {
    result = this.netSalaryCalculator.netSalaryFor(grossSalary);
    callback();
  });

  this.Given(/^eu devo ver os valores distribuídos da seguinte forma:$/, function (table, callback) {
    table.hashes().forEach(function(row) {
      expect(row.INSS).to.equal(result.INSS);
      expect(row.IR).to.equal(result.IR);
      expect(row['Salário líquido']).to.equal(result.netSalary);
    });

    callback();
  });
};

module.exports = netSalarySteps;