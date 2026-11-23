# Funções em JavaScript

## Link da aula: https://canva.link/6r6immjvfi4n1pz

## 1. O que são funções?

Uma **função** é um bloco de código que executa uma tarefa específica e pode ser reutilizado sempre que necessário.

Imagine uma máquina de suco: recebe frutas, processa e entrega um resultado.

```text
Entrada → Processamento → Saída
```

As funções ajudam a evitar repetição de código, organizar sistemas e facilitar testes e manutenção.

---

## 2. Declaração e chamada de uma função

```javascript
function imprimirOlaMundo() {
    console.log("Olá Mundo!");
}

imprimirOlaMundo();
```

| Elemento | Finalidade |
|---|---|
| `function` | Declara a função |
| `imprimirOlaMundo` | Nome da função |
| `()` | Espaço para parâmetros |
| `{}` | Corpo da função |
| `imprimirOlaMundo()` | Chamada da função |

> Declarar uma função não significa executá-la. É necessário chamá-la.

---

## 3. Parâmetros, argumentos e retorno

Os **parâmetros** permitem que uma função receba informações. Os **argumentos** são os valores enviados na chamada.

```javascript
function somar(a, b) {
    return a + b;
}

let resultado = somar(5, 3);
console.log(resultado); // 8
```

- `a` e `b`: parâmetros.
- `5` e `3`: argumentos.
- `return`: devolve o resultado e encerra a execução da função.

A mesma função pode ser chamada com valores diferentes, sem reescrever sua lógica.

### `return` x `console.log()`

- `return`: devolve um valor que pode ser armazenado ou utilizado em outras operações.
- `console.log()`: exibe uma informação no console.

---

## 4. Função anônima

É uma função sem nome explícito, que pode ser armazenada em uma variável.

```javascript
const saudacao = function () {
    console.log("Oi!");
};

saudacao();
```

---

## 5. Arrow Function

É uma forma mais compacta de escrever funções, introduzida no ES6. Utiliza o operador `=>`.

```javascript
const somar = (a, b) => {
    return a + b;
};
```

Quando o corpo contém apenas uma expressão, podemos utilizar o retorno implícito:

```javascript
const somar = (a, b) => a + b;

console.log(somar(5, 3)); // 8
```

> Arrow functions não possuem seu próprio `this`.

---

## 6. Funções com prompt-sync

Podemos receber informações do usuário e enviá-las para uma função.

Instalação:

```bash
npm install prompt-sync
```

```javascript
const prompt = require('prompt-sync')({ sigint: true });

function saudacao(nome) {
    return `Olá, ${nome}!`;
}

const nomeUsuario = prompt('Digite seu nome: ');
console.log(saudacao(nomeUsuario));
```

Executar no terminal:

```bash
node arquivo.js
```

---

## 7. Escopo de variáveis

O **escopo** determina onde uma variável pode ser acessada.

### Escopo externo (global no exemplo introdutório)

Uma variável declarada no escopo externo pode ser acessada pela função abaixo.

```javascript
const nome = "João";

function cumprimentar() {
    console.log(nome);
}

cumprimentar();
```

### Escopo local

Uma variável declarada dentro de uma função não pode ser acessada diretamente de fora dela.

```javascript
function exemplo() {
    const mensagem = "Isso é secreto!";
    console.log(mensagem);
}

exemplo();
// console.log(mensagem); // Erro: variável fora do escopo
```

---

## 8. Consulta rápida

| Conceito | Finalidade |
|---|---|
| `function` | Declarar uma função tradicional |
| Parâmetros | Receber informações |
| Argumentos | Enviar valores na chamada |
| `return` | Devolver um resultado |
| `console.log()` | Exibir informações |
| `=>` | Escrever uma arrow function |
| Escopo | Definir onde uma variável pode ser acessada |

> A ideia principal é escrever a lógica uma vez e reutilizá-la sempre que necessário.

---

*Resumo baseado no material de aula Funções, especialmente nas páginas 8–19, 21, 25–26, 35, 37 e 40–43. Exemplos ilustrativos adaptados para JavaScript no console; exercícios e respectivas soluções não incluídos. Os blocos de código são exemplos independentes.*
