# 💻 Strings e Arrays em JavaScript


## Link da aula: https://canva.link/weet2vyeo1pn0yf
## 1. Strings

Uma **string** representa um texto. Pode ser declarada com aspas simples, duplas ou crases.

```javascript
const curso = "JavaScript";
const escola = 'Senac';
const mensagem = `Estou estudando ${curso}`;
```

A **concatenação** permite juntar textos com `+`. As **template strings** utilizam crases e `${}` para inserir valores no texto.

## 2. Propriedades e métodos de Strings

| Propriedade ou método | Função | Exemplo |
|---|---|---|
| `length` | Conta caracteres, incluindo espaços | `texto.length` |
| `toUpperCase()` | Converte para maiúsculas | `texto.toUpperCase()` |
| `toLowerCase()` | Converte para minúsculas | `texto.toLowerCase()` |
| `trim()` | Remove espaços do início e do fim | `texto.trim()` |
| `includes()` | Verifica se um trecho existe | `texto.includes("abc")` |
| `replaceAll()` | Substitui todas as ocorrências | `texto.replaceAll("a", "b")` |

> Os métodos de strings não alteram o texto original. `includes()` retorna `true` ou `false` e diferencia maiúsculas de minúsculas.

---

## 3. Arrays (vetores)

Um **array** permite armazenar vários valores em uma única estrutura, utilizando colchetes `[]`.

```javascript
const produtos = ["Notebook", "Mouse", "Teclado"];
const dados = ["Maria", 25, true];
```

Arrays são utilizados em listas de usuários, produtos, tarefas e carrinhos de compras.

## 4. Índices

Os elementos são acessados pela posição (**índice**), começando em `0`.

| Índice | 0 | 1 | 2 |
|---|---|---|---|
| Valor | Notebook | Mouse | Teclado |

```javascript
console.log(produtos[0]); // Notebook
```

> O último índice de um array não vazio é `length - 1`.

## 5. Propriedades e métodos de Arrays

| Propriedade ou método | Função | Exemplo |
|---|---|---|
| `length` | Informa a quantidade de itens de uma lista comum | `produtos.length` |
| `includes()` | Verifica se um elemento existe | `produtos.includes("Mouse")` |
| `push()` | Adiciona ao final | `produtos.push("Monitor")` |
| `unshift()` | Adiciona ao início | `produtos.unshift("Impressora")` |
| `pop()` | Remove o último elemento | `produtos.pop()` |
| `shift()` | Remove o primeiro elemento | `produtos.shift()` |
| `splice(i, n)` | Remove `n` elementos a partir do índice `i` | `produtos.splice(1, 1)` |
| `concat()` | Junta arrays, criando um novo | `produtos.concat(outros)` |
| `sort()` | Ordena os elementos | `produtos.sort()` |

### Adicionar e remover

```text
unshift() → [ A | B | C ] ← push()
shift()   ← [ A | B | C ] → pop()
```

### Atenção ao `splice()`

```javascript
const letras = ["A", "B", "C", "D"];
letras.splice(1, 2);
console.log(letras); // ["A", "D"]
```

O primeiro parâmetro indica o índice inicial e o segundo indica quantos elementos serão removidos.

> `push()`, `unshift()`, `pop()`, `shift()`, `splice()` e `sort()` modificam o array original. `concat()` cria um novo array.

> **Observação técnica:** por padrão, `sort()` compara os valores como texto. Para ordenar números em ordem crescente, utilize `numeros.sort((a, b) => a - b)`.

---

## 6. Para lembrar

- **String:** representa texto.
- **Array:** armazena uma lista de valores.
- **Propriedade:** fornece uma informação, como `length`.
- **Método:** executa uma operação, como `includes()`.
- **Índice:** representa a posição de um elemento, começando em zero.
