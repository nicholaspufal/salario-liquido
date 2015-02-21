# language: pt

Funcionalidade: funcionário calcula seu salário líquido

Como um funcionário
Eu quero calcular meu salário líquido
Para descobrir qual o valor que deve entrar na minha conta corrente

  Contexto:
    Dado que o desconto do INSS é feito da seguinte forma:
      | Salário até | Desconto    |
      |   1399.12   |  8%         |
      |   2331.88   |  9%         |
      |   4159.00   |  11%        |
      |   4663.75   |  R$ 513.01  |
    E que a alíquota do imposto de renda segue os valores:
      | Renda partindo de | Renda até | Alíquota |
      |        -          |  1787.77  |    -     |
      |     1787.78       |  2679.29  |   7.5    |
      |     2679.30       |  3572.43  |   15     |
      |     3572.44       |  4463.81  |   22.5   |
      |     4463.81       |     -     |   27.5   |

  Cenário: Salário isento de imposto de renda
    Dado que eu recebo um salário bruto de 1900.00
    Quando eu calcular o meu salário líquido
    Então eu devo ver os valores distribuídos da seguinte forma:
    | INSS   |   IR   |  Salário líquido |
    | 171.00 |  0.00  |     1729.00      |