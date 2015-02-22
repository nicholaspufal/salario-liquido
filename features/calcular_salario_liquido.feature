# language: pt

Funcionalidade: funcionário calcula seu salário líquido

  No papel de um funcionário
  Eu quero calcular meu salário líquido
  Para descobrir qual o valor que deve entrar na minha conta corrente

  Informações relevantes:

  Levar em conta que cada dependente legal representa R$ 179,71

  Tabela do INSS:
  | Salário até (R$) | Desconto    |
  |   1399.12        |  8%         |
  |   2331.88        |  9%         |
  |   4159.00        |  11%        |
  |   4663.75        |  R$ 513.01  |

  Tabela do IRRF (2015):
  | Renda partindo de (R$) | Renda até (R$) | Alíquota (%) | Parcela a deduzir do imposto (R$) |
  |        -               |  1787.77       |    -         |             -                     |
  |     1787.78            |  2679.29       |   7.5        |           134.08                  |
  |     2679.30            |  3572.43       |   15         |           335.03                  |
  |     3572.44            |  4463.81       |   22.5       |           602.96                  |
  |     4463.81            |     -          |   27.5       |           826.15                  |

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
    |     1200.00     |         2            |  96.00     |     744.58       |   0.00    |
    |     1600.00     |         0            |  144.00    |     1456.00      |   0.00    |
    |     2670.50     |         0            |  293.75    |     2376.75      |   44.18   |
    |     3400.00     |         0            |  374.00    |     3026.00      |   118.87  |
    |     4050.00     |         0            |  445.50    |     3604.50      |   208.05  |
    |     5960.00     |         0            |  513.01    |     5446.99      |   671.77  |
    |     5960.00     |         2            |  513.01    |     5087.57      |   572.93  |

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
    |     2670.50     |          0         |  293.75    |  44.18   |     2332.57      |
    |     3400.00     |          0         |  374.00    |  118.87  |     2907.13      |
    |     4050.00     |          0         |  445.50    |  208.05  |     3396.45      |
    |     5960.00     |          0         |  513.01    |  671.77  |     4775.22      |
    |     5960.00     |          2         |  513.01    |  572.93  |     4874.06      |

