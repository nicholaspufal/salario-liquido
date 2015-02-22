#!/usr/bin/env node

var path = require('path');

var usageFile = require('fs').readFileSync(path.resolve(__dirname, 'usage.txt'), 'utf8');
var options = require('docopt').docopt(usageFile, { version: require('../package').version });

var grossSalary = options['<salario_bruto>'];

var result = require('../lib/netSalaryCalculator').netSalaryFor(grossSalary);

console.log('================');
console.log('Descontos:');
console.log('================');
console.log('INSS: R$', result.INSS);
console.log('IRRF: R$', result.IRRF);

console.log('================');
console.log('Seu salário líquido: R$', result.netSalary);
console.log('================');
