# language: pt

Funcionalidade: funcionário calcula seu salário líquido

  No papel de um funcionário
  Eu quero calcular meu salário líquido
  Para descobrir qual o valor que deve entrar na minha conta corrente

  Informações relevantes:

  Levar em conta que cada dependente legal representa R$ 189,59 (a partir de 04/2015)

  Tabela do INSS (a partir de 1º Janeiro 2015):
  | Salário até (R$) | Desconto    |
  |   1399.12        |  8%         |
  |   2331.88        |  9%         |
  |   4663.75        |  11%        |
  Valor máximo do segurado empregado: R$ 513.01 (R$ 4.663,75 * 0.11)

  Tabela do IRRF (a partir de Abril 2015):
  | Renda partindo de (R$) | Renda até (R$) | Alíquota (%) | Parcela a deduzir do imposto (R$) |
  |        -               |  1903.98       |    -         |             -                     |
  |     1903.99            |  2826.65       |   7.5        |           142.80                  |
  |     2826.66            |  3751.05       |   15         |           354.80                  |
  |     3751.06            |  4664.68       |   22.5       |           636.13                  |
  |     4664.68            |     -          |   27.5       |           869.36                  |

  Esquema do Cenário: Cálculo do INSS
    Dado que eu recebo um salário bruto de <salário bruto>
    Quando eu calcular o meu salário líquido
    Então a minha contribuição para o INSS é de <INSS>
    E esse valor representa <percentual> de desconto

  Exemplos:
    |  salário bruto  |   INSS      |  percentual |
    |     1200.00     |   96.00     |      8%     |
    |     1600.00     |   144.00    |      9%     |
    |     4050.00     |   445.50    |     11%     |
    |     5960.00     |   513.01    |     TETO    |

  Esquema do Cenário: Cálculo do IRRF
    Dado que eu recebo um salário bruto de <salário bruto>
    E que eu tenho <numero dependentes> dependentes
    Quando eu calcular o meu salário líquido
    Então a minha contribuição para o INSS é de <INSS>
    E a base de cálculo para o meu IRRF é de <base de cálculo>
    E isso significa que meu IRRF é de <IRRF>

  Exemplos:
    |  salário bruto  |  numero dependentes  |  INSS      |  base de cálculo |   IRRF    |
    |     1200.00     |         0            |  96.00     |     1104.00      |   0.00    |
    |     1200.00     |         2            |  96.00     |     724.82       |   0.00    |
    |     1600.00     |         0            |  144.00    |     1456.00      |   0.00    |
    |     2670.50     |         0            |  293.75    |     2376.75      |   35.46   |
    |     3400.00     |         0            |  374.00    |     3026.00      |   99.10   |
    |     4050.00     |         0            |  445.50    |     3604.50      |   185.87  |
    |     5960.00     |         0            |  513.01    |     5446.99      |   628.56  |
    |     5960.00     |         2            |  513.01    |     5067.81      |   524.29  |

  Esquema do Cenário: Cálculo do salário líquido
    Dado que eu recebo um salário bruto de <salário bruto>
    E que eu tenho <numero dependentes> dependentes
    Quando eu calcular o meu salário líquido
    Então a minha contribuição para o INSS é de <INSS>
    E o meu IRRF é de <IRRF>
    E isso significa que meu salário líquido é de <salário líquido>

  Exemplos:
    |  salário bruto  | numero dependentes |  INSS      |  IRRF    |  salário líquido |
    |     1200.00     |          0         |  96.00     |  0.00    |     1104.00      |
    |     1200.00     |          2         |  96.00     |  0.00    |     1104.00      |
    |     1600.00     |          0         |  144.00    |  0.00    |     1456.00      |
    |     2670.50     |          0         |  293.75    |  35.46   |     2341.29      |
    |     3400.00     |          0         |  374.00    |  99.10   |     2926.90      |
    |     4050.00     |          0         |  445.50    |  185.87  |     3418.63      |
    |     5960.00     |          0         |  513.01    |  628.56  |     4818.43      |
    |     5960.00     |          2         |  513.01    |  524.29  |     4922.70      |

