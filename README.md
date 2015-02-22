# salario-liquido

Net salary calculator for brazilians. The idea is that this module will be used by a service soon and an iOS app will communicate with it - this is part of a pet project.

## Installation

`npm install salario-liquido -g`

## Usage

```
salario-liquido <salario_bruto> [<dependentes>]
salario-liquido -h | --help | --version
```

### Example:

```salario-liquido 7506.93```

Will return:
```
================
Informações fornecidas:
================
Salário bruto: R$ 7506.93
Dependentes: 0
================
Descontos:
================
INSS: R$ 513.01
IRRF: R$ 1097.18
================
Seu salário líquido: R$ 5896.74
================
```

## Goals with this project

* First one is, of course, to facilitate this calculation
* Practice BDD skills by trying to document the business domain using a feature file - written in pt-br. The idea here is to try to come up with concrete examples, easy to understand, as some folks from BR (me included) have a hard time to understand how this calculation works
* Practice some Node.js/Javascript
* Learn Swift - and develop my first iOS app :)
* Create a simple yet flexible architecture, so that if I need to change any calculations I won't need to make updates to the app - only to the service that is coming up next

## TODOS

* Add "other costs" support
* Refactor code - this was mostly a spike, so it's not looking that good now

## License
This is licensed under the feel-free-to-do-whatever-you-want-to-do license.