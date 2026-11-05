If/else

A composição parte do conceito de transformação, explorando a capacidade de um sistema visual se modificar em resposta à interação do utilizador. A intenção é criar um ambiente gráfico dinâmico no qual os elementos geométricos não apresentam um comportamento fixo mas reagem constantemente aos estímulos externos. O movimento do rato funciona como elemento de influência sobre a composição provocando alterações na forma, na dimensão e na cor dos elementos. Deste modo, o utilizador deixa de ser apenas um observador e passa a participar diretamente na construção da experiência visual.
 
LINGUAGEM
A composição utiliza uma grelha de elementos geométricos repetidos, constituída por quadrados e círculos. A repetição cria uma estrutura visual organizada, enquanto as alterações provocadas pela interação introduzem movimento e variação. A utilização de formas geométricas simples permite evidenciar as transformações sem acrescentar elementos visuais desnecessários. O contraste entre a organização inicial e as alterações provocadas pelo rato procura representar a passagem de um estado estável para um estado dinâmico. A construção da grelha é realizada através de dois ciclos for aninhados, que permitem distribuir os elementos horizontal e verticalmente. A função rect() é utilizada para desenhar os quadrados e a função circle() para representar os círculos. A função rectMode(CENTER) permite posicionar os elementos a partir do seu centro, mantendo uma distribuição visual consistente.

PALETA
A paleta cromática é constituída por preto, roxo, verde-lima e azul elétrico. A escolha de um fundo escuro, definido através da função background(), permite destacar os restantes elementos e reforçar uma estética associada ao universo digital e experimental. As diferentes cores são utilizadas para distinguir os estados de interação. O roxo representa o estado inicial dos elementos, o verde-lima assinala a proximidade do rato e o azul elétrico identifica a interação através do clique. Desta forma, a cor assume também uma função comunicativa, permitindo reconhecer visualmente as diferentes respostas do sistema. As cores são definidas através da função fill(), que permite alterar o preenchimento das formas consoante as condições estabelecidas no código.


INTERAÇÃO
A interação é desenvolvida através de condicionais if, else if e else, que permitem alterar o comportamento dos elementos de acordo com determinadas condições. A posição do rato determina a distância relativamente aos elementos da grelha. Para calcular essa distância é utilizada a função dist(), que compara as coordenadas do rato (mouseX e mouseY) com a posição de cada elemento. Quando o rato se aproxima de um elemento, os quadrados transformam-se em círculos e aumentam de dimensão. Esta alteração é controlada através da função map(), que relaciona a distância do rato com o tamanho dos círculos. Quando o botão do rato é pressionado, através da variável mouseIsPressed, os elementos assumem uma nova forma e passam a apresentar uma tonalidade azul, criando um estado de interação diferente. É também introduzido um movimento oscilatório contínuo, desenvolvido através das funções matemáticas sin() e cos(), que, em conjunto com a variável frameCount, permitem criar pequenas variações nas posições dos elementos ao longo do tempo. Este movimento acrescenta dinamismo à composição e reforça a ideia de transformação.



Nota sobre a utilização de inteligência artificial

Foi utilizada inteligência artificial como ferramenta de apoio ao desenvolvimento do código e à exploração de soluções visuais e técnicas. Foram discutidas diferentes possibilidades de interação, utilização de condicionais e transformação dos elementos, tendo as sugestões sido testadas e adaptadas aos objetivos da composição.

