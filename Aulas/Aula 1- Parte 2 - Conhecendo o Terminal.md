
# 13. Interfaces: GUI e CLI

Uma **interface** permite a comunicação entre diferentes elementos.

**Link para Aula**: https://canva.link/qpmb624ue3qktf2

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

## `cd..`

**Sair da pasta**

Permite voltar para o diretório.

```bash
cd ..
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


---

# 19. Comandos para consulta rápida

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


<img width="400" height="282" alt="image" src="https://github.com/user-attachments/assets/f2448659-8d13-49e1-b123-e0114c926f9a" />

