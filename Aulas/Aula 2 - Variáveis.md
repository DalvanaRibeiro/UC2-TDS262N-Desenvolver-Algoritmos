# Resumo — Variáveis em JavaScript

Link para a aula: https://canva.link/f2rugo4u1zv22lf

## 1. Linguagens de programação

Linguagens de programação permitem que pessoas deem instruções ao computador.

O computador trabalha internamente com **0 e 1**, enquanto linguagens como **JavaScript** facilitam a escrita dos programas.

---

## 2. JavaScript

JavaScript é muito utilizado para:

- sites;
- aplicações web;
- front-end;
- back-end com Node.js;
- jogos;
- APIs.

É uma linguagem muito presente na Web.

---

## 3. Variáveis

Variáveis são espaços usados para armazenar informações.

```javascript
const nome = "Maria";
const idade = 25;
```

Estrutura:

```text
const nome = "Maria"
  ↓    ↓       ↓
declaração nome valor
```

---

## 4. `let` e `const`

### `let`

Use quando o valor pode mudar.

```javascript
let nome = "Maria";
nome = "Joana";
```

### `const`

Use quando o valor não deve ser reatribuído.

```javascript
const pi = 3.14;
```

Resumo:

```text
let   → pode mudar
const → não pode ser reatribuída
```

---

## 5. camelCase

É uma forma comum de escrever nomes de variáveis em JavaScript.

```javascript
nomeCompleto
numeroDeAlunos
dataDeNascimento
mediaFinal
```

A primeira palavra começa com letra minúscula e as próximas começam com letra maiúscula.

---

## 6. Tipos de dados

### Number

Representa números.

```javascript
const idade = 23;
const altura = 1.79;
```

### String

Representa textos.

```javascript
const nome = "Maria";
const curso = "TDS";
```

### Boolean

Representa valores lógicos:

```javascript
true
false
```

Exemplo:

```javascript
const estudante = true;
const pagamentoAprovado = false;
```

---

## 7. Algoritmos

Um algoritmo é uma sequência de passos para resolver um problema.

Exemplo:

```text
1. Colocar água na chaleira
2. Aquecer
3. Colocar café no filtro
4. Despejar a água
5. Servir
```

Na programação, esses passos são escritos em código.

---

## 8. `console.log()`

Serve para mostrar informações no console.

```javascript
const nome = "Maria";

console.log(nome);
```

Saída:

```text
Maria
```

---

## 9. Concatenação

Concatenar significa juntar textos e variáveis.

```javascript
const nome = "Lucas";
const idade = 22;

console.log("Meu nome é " + nome + " e tenho " + idade + " anos.");
```

---

## 10. Template Strings

Forma mais prática de inserir variáveis dentro de textos.

```javascript
const nome = "João";
const idade = 25;

console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);
```

Usamos:

```text
` `  → crases
${}  → inserir variável
```

---

## 11. `typeof`

Permite descobrir o tipo de um valor.

```javascript
const nome = "Maria";
const idade = 25;
const estudante = true;

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof estudante);
```

Resultado:

```text
string
number
boolean
```

---

## 12. `undefined`

Acontece quando uma variável foi criada, mas ainda não recebeu valor.

```javascript
let novaVariavel;

console.log(typeof novaVariavel);
```

Resultado:

```text
undefined
```

---

# Resumo rápido

| Conceito | Função |
|---|---|
| `let` | variável que pode mudar |
| `const` | variável que não pode ser reatribuída |
| `string` | texto |
| `number` | número |
| `boolean` | `true` ou `false` |
| `undefined` | valor ainda não definido |
| `console.log()` | mostrar informação |
| `typeof` | descobrir o tipo |
| `+` | concatenar |
| `${}` | inserir variável em template string |

---

## Exemplo completo

```javascript
const nome = "Ana";
let idade = 20;
const estudante = true;

console.log(`Meu nome é ${nome}.`);
console.log(`Tenho ${idade} anos.`);
console.log(`Sou estudante? ${estudante}`);
```

---

## Para lembrar

```text
Variável → guarda informação

let   → pode mudar
const → não pode ser reatribuída

"Maria" → string
25      → number
true    → boolean
```
