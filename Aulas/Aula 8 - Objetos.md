# 📦 Objetos em JavaScript

## Link da aula: https://canva.link/12pvsc3wjqrxpgd
> UC — Desenvolver Algoritmos

# 1. O que são objetos?

**Objetos** são estruturas que permitem agrupar informações relacionadas de maneira organizada, representando elementos do mundo real, como pessoas, produtos, carros e usuários de um sistema.

Nas páginas 3 a 5 da aula, os objetos são comparados a uma gaveta com divisórias identificadas e a um dicionário: cada informação possui um nome pelo qual podemos encontrá-la.

```text
Variável simples → um valor
Array           → lista de valores acessados por índices
Objeto          → conjunto de propriedades acessadas por chaves
```

---

# 2. Estrutura de um objeto

Utilizamos `let` ou `const` para declarar a variável e chaves `{}` para delimitar o objeto.

```javascript
const professor = {
    nome: "Dalvana",
    idade: 30
}
```

Cada **propriedade** possui uma chave e um valor.

| Chave | Valor | Tipo |
|---|---|---|
| `nome` | `"Dalvana"` | String |
| `idade` | `30` | Number |

O esquema da página 19 destaca a estrutura:

```javascript
const objeto = {
    primeiraPropriedade: "Valor",
    segundaPropriedade: "Valor"
}
```

- `=` atribui o objeto à variável;
- `{}` delimitam o objeto;
- `:` separa a chave do valor;
- `,` separa as propriedades.

---

# 3. Tipos de valores em objetos

Um objeto pode armazenar diferentes tipos de dados simultaneamente.

```javascript
const produto = {
    nome: "Notebook",
    preco: 2500,
    disponivel: true,
    cores: ["Preto", "Cinza"]
}
```

| Propriedade | Tipo |
|---|---|
| `nome` | String |
| `preco` | Number |
| `disponivel` | Boolean |
| `cores` | Array |

Também podemos armazenar outros objetos e funções (métodos).

---

# 4. Acessando propriedades

## Notação de ponto (`.`)

```javascript
const professor = {
    nome: "Dalvana",
    idade: 30,
    email: "professor@example.com"
}

console.log(professor.nome) // Dalvana
console.log(professor.idade) // 30
```

```text
professor.idade
    ↓       ↓
  objeto   chave
```

## Notação de colchetes (`[]`)

Considerando o mesmo objeto:

```javascript
console.log(professor["nome"]) // Dalvana
console.log(professor["email"]) // professor@example.com
```

As duas notações permitem acessar o mesmo valor.

---

# 5. Alterando propriedades

Para modificar um valor, acessamos a propriedade e utilizamos o operador de atribuição `=`.

```javascript
const produto = {
    nome: "Mouse",
    preco: 80
}

produto.preco = 65
produto["nome"] = "Mouse gamer"

console.log(produto)
```

Resultado:

```javascript
{ nome: "Mouse gamer", preco: 65 }
```

> Complemento técnico: `const` impede a reatribuição da variável, mas não impede a alteração das propriedades de um objeto comum.

---

# 6. Adicionando propriedades

Podemos criar novas propriedades mesmo depois da declaração do objeto.

```javascript
const curso = {
    nome: "Frontend",
    linguagens: ["JS", "CSS", "HTML"]
}

curso.numeroEstudantes = 50
curso["turno"] = "Noite"

console.log(curso)
```

Resultado:

```javascript
{
    nome: "Frontend",
    linguagens: ["JS", "CSS", "HTML"],
    numeroEstudantes: 50,
    turno: "Noite"
}
```

> Se a chave já existe, a atribuição altera seu valor. Caso contrário, cria uma propriedade.

---

# 7. Métodos em objetos

Um **método** é uma função associada a um objeto. Enquanto as propriedades podem representar características, os métodos representam ações.

Exemplo adaptado da página 38:

```javascript
const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2021,
    acelerar: function() {
        console.log("O carro está acelerando!")
    },
    buzinar: function() {
        console.log("Biiii!")
    }
}

carro.acelerar()
carro.buzinar()
```

| Expressão | Finalidade |
|---|---|
| `carro.marca` | Acessar uma característica |
| `carro.acelerar()` | Executar uma ação |

> Os parênteses `()` executam a função.

---

# 8. Objetos dentro de objetos

Uma propriedade pode armazenar outro objeto. Chamamos essa estrutura de **objeto aninhado**.

```javascript
const donoDoPet = {
    nome: "Ana",
    pet: {
        nomeDoPet: "Wanda",
        raca: "Vira-lata",
        idade: 1
    }
}

console.log(donoDoPet.pet.nomeDoPet) // Wanda
console.log(donoDoPet.pet.idade) // 1
```

Assim como a ilustração das bonecas encaixadas da página 45, devemos seguir um caminho até a informação desejada.

```text
donoDoPet
├── nome: Ana
└── pet
    ├── nomeDoPet: Wanda
    ├── raca: Vira-lata
    └── idade: 1
```

---

# 9. Arrays dentro de objetos

Uma propriedade também pode armazenar uma lista.

```javascript
const curso = {
    nome: "Noturno Frontend",
    linguagens: ["JS", "CSS", "HTML"]
}

console.log(curso.linguagens) // Array completo
console.log(curso.linguagens[0]) // JS
console.log(curso.linguagens[1]) // CSS
console.log(curso.linguagens[2]) // HTML
```

```text
curso → linguagens → [0] → JS
```

> Lembre-se: os índices dos arrays começam em zero.

---

# 10. Arrays de objetos

Um **array de objetos** permite armazenar vários registros em uma única lista.

```javascript
const professores = [
    { nome: "Andrei", modulo: 1 },
    { nome: "Vitor", modulo: 2 },
    { nome: "Dalvana", modulo: 3 }
]

console.log(professores[1]) // Segundo objeto
console.log(professores[1].nome) // Vitor
console.log(professores[2].modulo) // 3
```

| Índice | nome | modulo |
|---|---|---|
| 0 | Andrei | 1 |
| 1 | Vitor | 2 |
| 2 | Dalvana | 3 |

Primeiro acessamos a posição do array; depois, a propriedade do objeto.

---

# 11. Espalhamento — Spread (`...`)

O **spread** permite copiar propriedades de objetos ou elementos de arrays para uma nova estrutura.

## Copiando objetos

```javascript
const usuario = {
    nome: "Ana",
    idade: 25,
    cidade: "São Paulo"
}

const novoUsuario = { ...usuario }
```

## Copiando e alterando propriedades

```javascript
const usuarioAtualizado = {
    ...usuario,
    nome: "João",
    idade: 28
}

console.log(usuarioAtualizado)
// { nome: "João", idade: 28, cidade: "São Paulo" }
```

As propriedades repetidas que aparecem por último sobrescrevem as anteriores. Nesse exemplo, o objeto original mantém seu nome e idade.

## Copiando arrays

```javascript
const listaDeNomes = ["Dalvana", "Paula", "Vitor"]
const copiaListaDeNomes = [...listaDeNomes]

copiaListaDeNomes[0] = "Lucas"

console.log(listaDeNomes) // ["Dalvana", "Paula", "Vitor"]
console.log(copiaListaDeNomes) // ["Lucas", "Paula", "Vitor"]
```

> Complemento técnico: o spread realiza uma **cópia superficial**. Objetos e arrays internos continuam compartilhando referências, a menos que também sejam copiados.

---

# 12. Mesclando objetos com spread

Na página 71, o material demonstra como reunir dados de cadastro e endereço em um único objeto.

```javascript
const usuarioBase = {
    nome: "Ana",
    idade: 25,
    email: "ana@example.com"
}

const endereco = {
    cidade: "São Paulo",
    estado: "SP",
    cep: "01000-000"
}

const usuarioCompleto = {
    ...usuarioBase,
    ...endereco,
    telefone: "11999999999"
}

console.log(usuarioCompleto)
```

O novo objeto reúne as propriedades dos dois objetos e acrescenta o telefone.

---

# 13. Onde utilizamos objetos nos sistemas?

Exemplos complementares de aplicação prática:

| Sistema | O que pode ser representado por objetos? |
|---|---|
| E-commerce | Produtos, clientes e pedidos |
| Jogos | Personagens, habilidades e pontuações |
| Redes sociais | Perfis e publicações |
| Streaming | Filmes, séries e usuários |
| Sistema escolar | Alunos, professores e turmas |

---

# 14. Consulta rápida

| Sintaxe | Finalidade |
|---|---|
| `const objeto = {}` | Criar um objeto vazio |
| `{ nome: "Ana" }` | Definir uma propriedade |
| `objeto.nome` | Acessar por ponto |
| `objeto["nome"]` | Acessar por colchetes |
| `objeto.nome = "Ana"` | Alterar ou adicionar propriedade |
| `objeto.metodo()` | Executar um método |
| `objeto.endereco.cidade` | Acessar objeto aninhado |
| `objeto.lista[0]` | Acessar item de array interno |
| `lista[0].nome` | Acessar propriedade de objeto em array |
| `{ ...objeto }` | Copiar superficialmente um objeto |
| `[...lista]` | Copiar superficialmente um array |
| `{ ...a, ...b }` | Mesclar objetos |

---

> 🧠 **Para lembrar:** objetos organizam informações por chaves; arrays organizam elementos por posições; métodos representam ações.

Material de revisão baseado na aula **Objetos** (72 páginas). Exemplos adaptados para fins didáticos; exercícios e desafios não foram resolvidos neste resumo.
