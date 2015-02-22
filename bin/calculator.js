#!/usr/bin/env node

var path = require('path');

var usageFile = require('fs').readFileSync(path.resolve(__dirname, 'usage.txt'), 'utf8');
var options = require('docopt').docopt(usageFile, { version: require('../package').version });

var grossSalary = options['<salario_bruto>'];
var dependents = options['<dependentes>'] || 0;

var result = require('../lib/netSalaryCalculator').netSalaryFor(grossSalary, dependents);

console.log('================');
console.log('Informações fornecidas:');
console.log('================');
console.log('Salário bruto: R$', grossSalary);
console.log('Dependentes:', dependents);

console.log('================');
console.log('Descontos:');
console.log('================');
console.log('INSS: R$', result.INSS);
console.log('IRRF: R$', result.IRRF);

console.log('================');
console.log('Seu salário líquido: R$', result.netSalary);
console.log('================');
