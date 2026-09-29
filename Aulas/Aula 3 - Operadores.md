
# 💻 Operadores e Lógica de Programação em JavaScript

Este material apresenta conceitos fundamentais de **lógica de
programação** e mostra como utilizar **operadores aritméticos, de
comparação e lógicos em JavaScript**.

## **Link da Aula:** https://canva.link/tn8jief1o9aeere

A ideia principal é entender que programar não significa apenas escrever
código.

> 🧠 **Programar é organizar uma solução em passos que o computador
> consiga executar.**

------------------------------------------------------------------------

# 1. Lógica de Programação

O computador consegue realizar milhões de operações rapidamente, mas ele
não compreende um problema da mesma maneira que uma pessoa.

Por isso, precisamos explicar **cada passo** necessário para chegar ao
resultado esperado.

Esses passos formam um **algoritmo**.

## O que é um algoritmo?

Um algoritmo é uma **sequência de passos organizada para atingir um
objetivo**.

Exemplos do cotidiano:

-   preparar uma receita;
-   trocar um pneu;
-   calcular o valor de uma compra;
-   verificar se alguém pode acessar um sistema;
-   decidir se uma condição é verdadeira ou falsa.

``` text
PROBLEMA
   ↓
ORGANIZAR A SOLUÇÃO
   ↓
CRIAR PASSOS
   ↓
TRANSFORMAR EM CÓDIGO
```

> Antes de pensar na sintaxe do JavaScript, é importante entender **como
> resolver o problema**.

------------------------------------------------------------------------

# 2. Formas de representar um algoritmo

Antes de transformar uma solução em código, podemos organizar nosso
raciocínio de diferentes maneiras.

O material apresenta três possibilidades:

-   **descrição textual**;
-   **pseudocódigo**;
-   **fluxograma**.

------------------------------------------------------------------------

## Descrição textual

Consiste em escrever, usando linguagem comum, os passos necessários para
resolver um problema.

Exemplo: **fritar um bife**.

``` text
1. Pegar a frigideira, a carne, o tempero e o óleo.
2. Temperar a carne.
3. Acender o fogo.
4. Colocar a frigideira no fogo.
5. Colocar o óleo.
6. Esperar o óleo aquecer.
7. Colocar a carne.
8. Escolher o ponto da carne.
9. Retirar a carne.
10. Apagar o fogo.
```

A descrição textual ajuda a organizar as ideias antes de programar.

------------------------------------------------------------------------

## Pseudocódigo

O **pseudocódigo** fica entre a linguagem natural e uma linguagem de
programação.

Ele descreve a lógica de forma estruturada, sem exigir que toda a
sintaxe de uma linguagem esteja correta.

Exemplo:

``` text
ler nome
criar mensagem = "Oi, eu me chamo " + nome
imprimir mensagem
```

> O objetivo do pseudocódigo é pensar primeiro na **lógica da solução**.

------------------------------------------------------------------------

## Fluxograma

O **fluxograma** representa visualmente a ordem das etapas de uma
solução.

Exemplo:

``` text
INÍCIO
   ↓
LER NOME
   ↓
CRIAR MENSAGEM
   ↓
MOSTRAR MENSAGEM
   ↓
FIM
```

------------------------------------------------------------------------

# 3. Operadores Aritméticos

Os operadores aritméticos permitem realizar operações matemáticas em
JavaScript.

  Operador   Operação           Exemplo
  ---------- ------------------ ----------
  `+`        Soma               `10 + 5`
  `-`        Subtração          `10 - 5`
  `*`        Multiplicação      `10 * 5`
  `/`        Divisão            `10 / 5`
  `%`        Resto da divisão   `10 % 3`

------------------------------------------------------------------------

# 4. Soma --- `+`

O operador `+` pode ser utilizado para somar números.

``` javascript
const primeiroValor = 10;
const segundoValor = 20;

const resultado = primeiroValor + segundoValor + 4;

console.log(resultado);
```

Resultado:

``` text
34
```

------------------------------------------------------------------------

# 5. Subtração --- `-`

O operador `-` realiza uma subtração.

``` javascript
const primeiroValor = 10;
const segundoValor = 20;

const resultado = primeiroValor - segundoValor;

console.log(resultado);
```

Resultado:

``` text
-10
```

------------------------------------------------------------------------

# 6. Multiplicação --- `*`

Em JavaScript, utilizamos `*` para realizar uma multiplicação.

``` javascript
const primeiroValor = 10;
const segundoValor = 25;

const resultado = primeiroValor * segundoValor;

console.log(resultado);
```

Resultado:

``` text
250
```

------------------------------------------------------------------------

# 7. Divisão --- `/`

O operador `/` realiza uma divisão.

``` javascript
const primeiroValor = 345;
const segundoValor = 10;

const resultado = primeiroValor / segundoValor;

console.log(resultado);
```

Resultado:

``` text
34.5
```

------------------------------------------------------------------------

# 8. Resto da divisão --- `%`

O operador `%`, chamado de **módulo**, retorna o resto de uma divisão.

Exemplo:

``` text
11 ÷ 4
```

O `4` cabe duas vezes em `11`:

``` text
4 × 2 = 8
```

Sobram:

``` text
3
```

Em JavaScript:

``` javascript
const restoDaDivisao = 11 % 4;

console.log(restoDaDivisao);
```

Resultado:

``` text
3
```

## Para que isso pode ser útil?

Um exemplo comum é verificar se um número é par.

``` javascript
10 % 2
```

Resultado:

``` text
0
```

Se o resto da divisão por `2` for `0`, o número é divisível por 2.

------------------------------------------------------------------------

# 9. Atualizando o valor de uma variável

Podemos utilizar o valor atual de uma variável para calcular seu novo
valor.

``` javascript
let minhaIdade = 26;

minhaIdade = minhaIdade + 1;
```

Depois dessa operação:

``` text
minhaIdade = 27
```

------------------------------------------------------------------------

# 10. Operadores de atribuição simplificada

JavaScript permite escrever algumas atualizações de forma mais curta.

``` javascript
let resultado = 100;

resultado += 20;
resultado -= 10;
resultado *= 5;
resultado /= 10;
```

Essas instruções correspondem a:

``` javascript
resultado = resultado + 20;
resultado = resultado - 10;
resultado = resultado * 5;
resultado = resultado / 10;
```

  Forma completa   Forma simplificada
  ---------------- --------------------
  `x = x + 10`     `x += 10`
  `x = x - 10`     `x -= 10`
  `x = x * 10`     `x *= 10`
  `x = x / 10`     `x /= 10`

------------------------------------------------------------------------

# 11. Condições

Antes de estudar operadores lógicos, precisamos entender o que é uma
**condição**.

Uma condição é uma expressão que pode produzir dois resultados:

``` text
true  → verdadeiro
false → falso
```

Exemplo:

``` javascript
let idade = 20;

console.log(idade >= 18);
```

O JavaScript está respondendo à pergunta:

``` text
20 é maior ou igual a 18?
```

Resultado:

``` text
true
```

------------------------------------------------------------------------

# 12. Operadores de comparação

Os operadores de comparação são usados para criar condições.

  --------------------------------------------------------------------------
  Operador          Significado       Exemplo              Pergunta
  ----------------- ----------------- -------------------- -----------------
  `>`               Maior que         `20 > 18`            20 é maior que
                                                           18?

  `<`               Menor que         `20 < 18`            20 é menor que
                                                           18?

  `>=`              Maior ou igual a  `18 >= 18`           18 é maior ou
                                                           igual a 18?

  `<=`              Menor ou igual a  `nota <= 10`         A nota é menor ou
                                                           igual a 10?

  `===`             Exatamente igual  `nome === "Ana"`     O nome é
                    a                                      exatamente
                                                           `"Ana"`?

  `!==`             Diferente de      `senha !== "1234"`   A senha é
                                                           diferente de
                                                           `"1234"`?
  --------------------------------------------------------------------------

Exemplo:

``` javascript
let idade = 20;
let nota = 8;
let nome = "Ana";
let senha = "abcd";

console.log(idade > 18);       // true
console.log(idade < 18);       // false
console.log(idade >= 18);      // true
console.log(nota <= 10);       // true
console.log(nome === "Ana");   // true
console.log(senha !== "1234"); // true
```

------------------------------------------------------------------------

# 13. Por que precisamos de operadores lógicos?

Com operadores de comparação conseguimos verificar uma condição.

Por exemplo:

``` javascript
idade >= 18
```

Mas muitos problemas exigem verificar **duas ou mais condições ao mesmo
tempo**.

Exemplo:

``` text
A pessoa tem 18 anos ou mais?
E
está inscrita?
```

É nesse momento que utilizamos os **operadores lógicos**.

------------------------------------------------------------------------

# 14. Operadores Lógicos

Os operadores lógicos trabalham com condições que resultam em:

``` text
true
false
```

Eles permitem **combinar ou inverter condições**.

Os três principais apresentados no material são:

  Operador   Nome        Ideia
  ---------- ----------- ------------------------------------------------
  `&&`       AND / E     Todas as condições precisam ser verdadeiras
  `||`       OR / OU     Pelo menos uma condição precisa ser verdadeira
  `!`        NOT / NÃO   Inverte o resultado lógico

------------------------------------------------------------------------

# 15. Operador `&&` --- E

O operador:

``` javascript
&&
```

significa **E**.

Ele é utilizado quando **todas as condições precisam ser verdadeiras**.

Exemplo:

> Para entrar em uma competição, uma pessoa precisa ter **18 anos ou
> mais E estar inscrita**.

Temos:

``` javascript
idade >= 18
```

e:

``` javascript
inscrito === true
```

Juntando as duas condições:

``` javascript
let idade = 20;
let inscrito = true;

console.log(idade >= 18 && inscrito === true);
```

Resultado:

``` text
true
```

Isso acontece porque:

``` text
idade >= 18       → true
inscrito === true → true

true && true → true
```

## Regra do `&&`

> No `&&`, **TODAS as condições precisam ser verdadeiras**.

------------------------------------------------------------------------

# 16. Tabela verdade do `&&`

  Condição 1   Condição 2   Resultado
  ------------ ------------ ------------
  `true`       `true`       `true` ✅
  `true`       `false`      `false` ❌
  `false`      `true`       `false` ❌
  `false`      `false`      `false` ❌

Podemos lembrar assim:

``` text
true  && true  → true
true  && false → false
false && true  → false
false && false → false
```

------------------------------------------------------------------------

# 17. Operador `||` --- OU

O operador:

``` javascript
||
```

significa **OU**.

Nesse caso, **pelo menos uma condição precisa ser verdadeira**.

Exemplo:

> Uma pessoa pode receber desconto se for **estudante OU tiver 60 anos
> ou mais**.

``` javascript
let estudante = true;
let idade = 25;

console.log(estudante === true || idade >= 60);
```

Temos:

``` text
estudante === true → true
idade >= 60        → false
```

Portanto:

``` text
true || false → true
```

Mesmo tendo 25 anos, a pessoa atende à primeira condição.

## Regra do `||`

> No `||`, basta **UMA condição ser verdadeira**.

------------------------------------------------------------------------

# 18. Tabela verdade do `||`

  Condição 1   Condição 2   Resultado
  ------------ ------------ ------------
  `true`       `true`       `true` ✅
  `true`       `false`      `true` ✅
  `false`      `true`       `true` ✅
  `false`      `false`      `false` ❌

Podemos lembrar assim:

``` text
true  || true  → true
true  || false → true
false || true  → true
false || false → false
```

------------------------------------------------------------------------

# 19. Operador `!` --- NÃO

O operador:

``` javascript
!
```

significa **NÃO**.

Ele serve para **inverter um valor lógico**.

``` text
!true  → false
!false → true
```

Exemplo:

``` javascript
let chovendo = true;

console.log(chovendo);
console.log(!chovendo);
```

Resultado:

``` text
true
false
```

Podemos pensar no `!` como:

> 🔄 **"Transforme no contrário."**

------------------------------------------------------------------------

# 20. Comparando `&&`, `||` e `!`

``` text
&& → E   → todas precisam ser verdadeiras

|| → OU  → pelo menos uma precisa ser verdadeira

!  → NÃO → inverte true e false
```

Exemplos:

``` javascript
true && true
// true
```

``` javascript
true && false
// false
```

``` javascript
true || false
// true
```

``` javascript
false || false
// false
```

``` javascript
!true
// false
```

------------------------------------------------------------------------

# 21. Usando `prompt-sync`

Para receber informações digitadas pelo usuário no terminal, o material
utiliza a biblioteca `prompt-sync`.

Dentro da pasta do projeto:

``` bash
npm init -y
```

Depois:

``` bash
npm install prompt-sync
```

No arquivo JavaScript:

``` javascript
const prompt = require("prompt-sync")();
```

Agora podemos perguntar algo ao usuário:

``` javascript
const prompt = require("prompt-sync")();

let idade = Number(prompt("Digite sua idade: "));

console.log("Você possui 18 anos ou mais?");
console.log(idade >= 18);
```

> `prompt()` recebe o que foi digitado e `Number()` transforma a entrada
> em número quando necessário.

------------------------------------------------------------------------

# 22. Estrutura sugerida da pasta

O material propõe trabalhar com uma pasta específica para os exercícios.

``` text
operadores/
│
├── operadoresAritmeticos/
│
└── operadoresLogicos/
    │
    ├── node_modules/
    ├── package.json
    ├── package-lock.json
    └── 01-operador-e.js
```

Fluxo básico:

``` bash
mkdir operadoresLogicos
cd operadoresLogicos
npm init -y
npm install prompt-sync
```

Depois, crie os arquivos `.js` dos exercícios.

------------------------------------------------------------------------

# 23. Aplicando operadores em situações reais

Os operadores ficam mais fáceis de entender quando transformamos frases
em condições.

## Área exclusiva

Regra:

> Ter pelo menos 18 anos **E** possuir assinatura paga.

``` javascript
idade >= 18 && assinaturaPaga === true
```

------------------------------------------------------------------------

## Cupom de desconto

Regra:

> Compra superior a R\$ 100 **OU** cliente VIP.

``` javascript
valorCompra > 100 || clienteVip === true
```

------------------------------------------------------------------------

## Vaga especial

Regra:

> Pessoa idosa **OU** pessoa com deficiência.

``` javascript
idoso === true || pessoaComDeficiencia === true
```

------------------------------------------------------------------------

## Área administrativa

Regra:

> Usuário precisa estar logado **E** ter permissão de administrador.

``` javascript
logado === true && administrador === true
```

------------------------------------------------------------------------

## Rede Wi-Fi

Regra:

> A pessoa precisa ter a senha **E** estar dentro do alcance da rede.

``` javascript
temSenha === true && dentroDoAlcance === true
```

------------------------------------------------------------------------

## Empréstimo

Regra apresentada:

> Ter renda superior a R\$ 2.000 **E** estar com o nome limpo.

``` javascript
renda > 2000 && nomeLimpo === true
```

------------------------------------------------------------------------

## Participação em evento

Regra:

> Ser maior de 18 anos **OU** possuir autorização dos pais.

``` javascript
idade > 18 || autorizacaoDosPais === true
```

------------------------------------------------------------------------

## Retirada de produto

Regra:

> Ter pago o valor completo **E** apresentar comprovante.

``` javascript
pagamentoCompleto === true && temComprovante === true
```

------------------------------------------------------------------------

## Transporte público

Regra:

> Ter cartão de transporte **OU** dinheiro suficiente para a passagem.

``` javascript
temCartao === true || dinheiroSuficiente === true
```

------------------------------------------------------------------------

# 24. Condições mais complexas

Também podemos combinar vários operadores.

O material apresenta um desafio de avaliação envolvendo:

-   nota final;
-   recuperação;
-   três trabalhos;
-   diferentes regras de aprovação.

Isso mostra que problemas reais podem exigir **várias condições
trabalhando juntas**.

Exemplo de ideia:

``` javascript
let trabalhosAprovados =
    (t1 > 6 ? 1 : 0) +
    (t2 > 6 ? 1 : 0) +
    (t3 > 6 ? 1 : 0);

let aprovado =
    nf > 7 ||
    (nf <= 7 && nr >= 8 && trabalhosAprovados >= 2);
```

O importante é primeiro transformar o enunciado em pequenas perguntas:

``` text
NF é maior que 7?

OU

NF é menor ou igual a 7?
E NR é maior ou igual a 8?
E pelo menos dois trabalhos possuem nota maior que 6?
```

------------------------------------------------------------------------

# 25. Como interpretar um problema

Quando receber um exercício, não comece escrevendo código imediatamente.

Siga esta sequência:

``` text
1. Leia o problema.
        ↓
2. Descubra quais informações existem.
        ↓
3. Identifique o que precisa ser calculado ou verificado.
        ↓
4. Separe as condições.
        ↓
5. Escolha os operadores.
        ↓
6. Transforme a solução em JavaScript.
```

Exemplo:

``` text
"A pessoa pode entrar se tiver 18 anos ou mais
e possuir ingresso."
```

### Informação 1

``` javascript
idade >= 18
```

### Informação 2

``` javascript
possuiIngresso === true
```

### Palavra importante do enunciado

``` text
E
```

Portanto:

``` javascript
idade >= 18 && possuiIngresso === true
```

------------------------------------------------------------------------

# 26. Palavras que ajudam a escolher o operador

Preste atenção nas palavras utilizadas no problema.

  Quando o enunciado disser...   Pense em...
  ------------------------------ -------------
  **e**                          `&&`
  **ou**                         `||`
  **não**                        `!`
  **maior que**                  `>`
  **menor que**                  `<`
  **maior ou igual**             `>=`
  **menor ou igual**             `<=`
  **igual**                      `===`
  **diferente**                  `!==`

------------------------------------------------------------------------

# 27. Resumo geral

## Operadores aritméticos

``` text
+ → soma
- → subtração
* → multiplicação
/ → divisão
% → resto da divisão
```

## Operadores de comparação

``` text
>   → maior que
<   → menor que
>=  → maior ou igual
<=  → menor ou igual
=== → exatamente igual
!== → diferente
```

## Operadores lógicos

``` text
&& → E
|| → OU
!  → NÃO
```

------------------------------------------------------------------------

# 28. Mapa mental

``` text
                    OPERADORES
                        │
        ┌───────────────┼────────────────┐
        │               │                │
   ARITMÉTICOS      COMPARAÇÃO         LÓGICOS
        │               │                │
  + - * / %       > < >= <=         &&  ||  !
                    === !==           │   │   │
                                      E   OU NÃO
```

------------------------------------------------------------------------

# 29. Regra de ouro 🧠

``` text
&& → TODO MUNDO precisa passar.

|| → BASTA UM passar.

!  → TROCA o resultado.
```

Ou:

> **`&&` exige todos, `||` aceita pelo menos um e `!` inverte.**

------------------------------------------------------------------------

# 30. O que você precisa saber ao final

Ao finalizar este conteúdo, você deve conseguir:

-   entender o que é lógica de programação;
-   explicar o que é um algoritmo;
-   organizar uma solução antes de programar;
-   utilizar operadores aritméticos;
-   criar condições com operadores de comparação;
-   compreender os valores `true` e `false`;
-   utilizar `&&`, `||` e `!`;
-   interpretar tabelas verdade;
-   transformar regras escritas em condições JavaScript;
-   utilizar `prompt-sync` para receber dados pelo terminal;
-   combinar condições para resolver problemas do cotidiano.

------------------------------------------------------------------------

# 🚀 Para lembrar

Programar não é decorar operadores.

É aprender a transformar uma regra escrita em uma sequência lógica que o
computador consiga avaliar.

``` text
PROBLEMA
   ↓
LÓGICA
   ↓
CONDIÇÕES
   ↓
OPERADORES
   ↓
CÓDIGO
```

> 💡 **Primeiro entenda a regra. Depois escolha o operador. Só então
> escreva o código.**
