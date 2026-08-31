
# 13. Interfaces: GUI e CLI

Uma **interface** permite a comunicação entre diferentes elementos.

## GUI — Graphical User Interface

Interface gráfica baseada em elementos visuais.

Exemplos:

- janelas;
- ícones;
- menus;
- botões.

## CLI — Command Line Interface

Interface de linha de comando.

Nela, o usuário interage com o computador digitando **comandos**.

```text
GUI → interação principalmente por elementos gráficos
CLI → interação principalmente por comandos de texto
```

---

# 14. Terminal

O **terminal** é um programa que permite interagir com o computador utilizando comandos.

Exemplos apresentados:

- Bash;
- Zsh;
- CMD;
- PowerShell;
- Git Bash.

No Windows, o material utiliza o **Git Bash** para trabalhar com comandos semelhantes aos encontrados em ambientes Unix.

## Por que aprender terminal?

O terminal pode:

- permitir o uso de programas sem interface gráfica;
- automatizar tarefas;
- tornar determinadas operações mais rápidas;
- ampliar a compreensão sobre arquivos, diretórios e funcionamento do sistema.

---

# 15. Estrutura de um comando

Um comando executa determinada ação.

Ele pode possuir **opções** e **parâmetros**.

```bash
comando [opções] [parâmetros]
```

As opções frequentemente utilizam:

```text
-
--
```

como prefixo.

---

# 16. Comandos básicos

## `echo`

Exibe uma mensagem no terminal.

```bash
echo "Olá mundo"
```

---

## `whoami`

Mostra o usuário atual.

```bash
whoami
```

---

## `clear`

Limpa visualmente o terminal.

```bash
clear
```

> O comando não apaga arquivos nem comandos executados; apenas facilita a organização visual da tela.

---

## `pwd`

**Print Working Directory**

Mostra o caminho completo do diretório atual.

```bash
pwd
```

Exemplo:

```text
/c/Users/aluno/Documents
```

---

## `ls`

Lista arquivos e pastas do diretório atual.

```bash
ls
```

---

## `cd`

**Change Directory**

Permite mudar de diretório.

```bash
cd nome-da-pasta
```

Exemplo:

```bash
cd Documentos
```

---

## `mkdir`

**Make Directory**

Cria um novo diretório.

```bash
mkdir projetos
```

---

## `rm`

Remove arquivos.

```bash
rm arquivo.txt
```

> ⚠️ **Cuidado:** conforme destacado no material, a remoção pelo terminal pode ser irreversível e ocorrer sem solicitação de confirmação.

---

## `mv`

Move arquivos entre diretórios e também pode ser utilizado para renomeá-los.

### Mover

```bash
mv arquivo.txt documentos/
```

### Renomear

```bash
mv antigo.txt novo.txt
```

---

## `cp`

Copia arquivos.

```bash
cp arquivo.txt backup/
```

---

## `cat`

Exibe o conteúdo de um arquivo no terminal.

```bash
cat arquivo.txt
```

---

## `head`

Mostra as primeiras linhas de um arquivo.

```bash
head arquivo.txt
```

Por padrão, são exibidas as primeiras **10 linhas**.

Para definir uma quantidade:

```bash
head -n 5 arquivo.txt
```

---

## `tail`

Mostra as últimas linhas de um arquivo.

```bash
tail arquivo.txt
```

Por padrão, são exibidas as últimas **10 linhas**.

Exemplo:

```bash
tail -n 20 arquivo.txt
```

---

# 17. Buscando informações com `grep`

O comando `grep` permite procurar texto no conteúdo de arquivos.

```bash
grep texto arquivo.txt
```

Exemplo:

```bash
grep Pikachu pokemons.txt
```

## Mostrar linhas anteriores

A opção `-B` significa **before**.

```bash
grep -B 2 Pikachu pokemons.txt
```

Mostra a ocorrência encontrada e duas linhas anteriores.

## Mostrar linhas posteriores

A opção `-A` significa **after**.

```bash
grep -A 3 Pikachu pokemons.txt
```

Mostra a ocorrência e três linhas posteriores.

---

# 18. Atividade prática — Pokémon

Utilizando o arquivo `pokemons.txt`, pratique os comandos estudados.

### 1. Ler o arquivo

```bash
cat pokemons.txt
```

### 2. Localizar Pikachu

```bash
grep Pikachu pokemons.txt
```

### 3. Mostrar os dois Pokémon anteriores

```bash
grep -B 2 Pikachu pokemons.txt
```

### 4. Mostrar os três Pokémon posteriores

```bash
grep -A 3 Pikachu pokemons.txt
```

### 5. Mostrar os primeiros 151 Pokémon

```bash
head -n 151 pokemons.txt
```

### 6. Mostrar os últimos 100 Pokémon

```bash
tail -n 100 pokemons.txt
```

---

# 19. Mapa mental

```text
COMPUTADOR
│
├── Hardware
│   ├── CPU
│   ├── RAM
│   ├── Placa-mãe
│   ├── HD / SSD
│   ├── GPU
│   ├── Fonte
│   └── Rede
│
├── Software
│   ├── Sistema Operacional
│   ├── Software de Sistema
│   └── Aplicativos
│
├── Entrada
│   ├── Teclado
│   └── Mouse
│
├── Processamento
│   ├── CPU
│   └── RAM
│
├── Armazenamento
│   ├── HD
│   └── SSD
│
├── Saída
│   ├── Monitor
│   └── Impressora
│
└── Interfaces
    ├── GUI
    └── CLI
        └── Terminal
            ├── pwd
            ├── ls
            ├── cd
            ├── mkdir
            ├── rm
            ├── mv
            ├── cp
            ├── cat
            ├── head
            ├── tail
            └── grep
```

---

# 20. Comandos para consulta rápida

| Comando | Função |
|---|---|
| `echo` | Exibir texto |
| `whoami` | Mostrar o usuário atual |
| `clear` | Limpar a tela do terminal |
| `pwd` | Mostrar o diretório atual |
| `ls` | Listar arquivos e pastas |
| `cd` | Mudar de diretório |
| `mkdir` | Criar diretório |
| `rm` | Remover arquivo |
| `mv` | Mover ou renomear |
| `cp` | Copiar arquivo |
| `cat` | Exibir conteúdo de arquivo |
| `head` | Mostrar primeiras linhas |
| `tail` | Mostrar últimas linhas |
| `grep` | Pesquisar texto em arquivo |

---

# 21. O que você deve saber ao final

Ao concluir este conteúdo, você deve conseguir:

- diferenciar **hardware** e **software**;
- identificar os principais componentes de um computador;
- compreender o fluxo **entrada → processamento → armazenamento → saída**;
- explicar a função de um **sistema operacional**;
- diferenciar **arquivos** e **pastas**;
- diferenciar **GUI** e **CLI**;
- compreender o papel do **terminal**;
- navegar entre diretórios;
- criar diretórios;
- listar, copiar, mover e remover arquivos;
- visualizar arquivos pelo terminal;
- localizar informações utilizando `grep`;
- utilizar `head` e `tail` para selecionar partes de arquivos.

---

## Dica final

> **Não tente apenas decorar os comandos. Use-os.**

O terminal se torna mais simples à medida que você pratica. Antes de executar um comando, procure compreender três coisas:

1. **Onde estou?** → `pwd`
2. **O que existe aqui?** → `ls`
3. **O que quero fazer?** → escolher o comando adequado.

```bash
pwd
ls
cd projeto
ls
```

Essa sequência simples já representa uma habilidade fundamental para quem está começando a desenvolver algoritmos e sistemas.

---

**UC2 — Desenvolver Algoritmos**  
**Material de estudo: Conhecendo o Computador e o Terminal**
