# UC2 — Conhecendo o Computador e o Terminal

> **Unidade Curricular:** UC2 — Desenvolver Algoritmos  
> **Material de apoio:** Conhecendo o Computador e o Terminal  
> **Objetivo:** compreender os principais conceitos de hardware, software, sistema operacional, arquivos, pastas, interfaces e comandos básicos de terminal.

---

## 1. O que é um computador?

A palavra **computador** está relacionada ao verbo **computar**, isto é, **calcular**.

Apesar da evolução tecnológica, computadores de diferentes formatos seguem o mesmo princípio básico:

```text
ENTRADA → PROCESSAMENTO → SAÍDA
```

O usuário fornece **dados e instruções**, o computador realiza o **processamento** e produz dados ou informações como **saída**.

O funcionamento digital utiliza dois estados fundamentais:

- `0` → desligado
- `1` → ligado

Esses estados constituem a menor unidade de informação digital: o **bit**.

---

## 2. Tipos de computadores

### Desktop

Computador de mesa normalmente composto por:

- gabinete;
- monitor;
- teclado;
- mouse;
- outros periféricos.

É utilizado, em geral, em um local fixo.

### Notebook

Computador portátil que integra em um único equipamento:

- tela;
- teclado;
- touchpad;
- componentes internos;
- bateria.

### Tablet

Dispositivo portátil com **tela sensível ao toque** e teclado virtual.

### Smartphone

Reúne diversas funções computacionais em um dispositivo móvel, além das funcionalidades de comunicação de um celular.

---

# 3. Hardware e Software

Um sistema computacional envolve dois conceitos fundamentais:

| Conceito | Definição |
|---|---|
| **Hardware** | Parte física do computador |
| **Software** | Conjunto de instruções e programas executados pelo computador |

Uma forma simples de lembrar:

```text
Hardware = aquilo que compõe fisicamente a máquina
Software = instruções/programas executados pela máquina
```

---

# 4. Hardware

## CPU — Unidade Central de Processamento

A **CPU**, ou processador, executa cálculos, interpreta instruções e controla os demais componentes.

Ela é frequentemente chamada de **“cérebro” do computador**.

Processadores podem possuir múltiplos **núcleos** e **threads**, permitindo a execução de diferentes tarefas.

---

## Memória RAM

A **RAM (Random Access Memory)** armazena temporariamente dados utilizados enquanto o computador está funcionando.

Quando abrimos um programa, por exemplo, informações necessárias à execução são carregadas do armazenamento para a RAM.

> Quanto maior a quantidade de memória disponível, maior tende a ser a capacidade de manter programas e informações em uso simultaneamente.

A RAM é uma memória **temporária**.

---

## Placa-mãe

A **placa-mãe (motherboard)** conecta os principais componentes do computador, como:

- CPU;
- memória RAM;
- HD/SSD;
- placa de vídeo;
- outros dispositivos.

Ela funciona como a estrutura central de comunicação entre os componentes.

---

## Armazenamento — HD e SSD

São utilizados para armazenar:

- sistema operacional;
- programas;
- documentos;
- imagens;
- vídeos;
- demais arquivos.

### HD — Hard Disk

- utiliza discos magnéticos;
- geralmente possui menor custo;
- é mais lento em comparação ao SSD.

### SSD — Solid State Drive

- não possui partes móveis;
- apresenta maior velocidade de acesso aos dados.

---

## Fonte de alimentação — PSU

A **fonte de alimentação** fornece energia elétrica aos componentes do computador.

---

## GPU — Placa de vídeo

A **GPU** é responsável pelo processamento relacionado a:

- imagens;
- gráficos;
- vídeos.

É especialmente importante em atividades como jogos, edição de vídeo e design gráfico.

---

## Placa de rede

Permite conectar o computador a:

- redes locais;
- Internet.

A conexão pode ocorrer, por exemplo, por **Ethernet** ou **Wi-Fi**.

---

## Componentes de suporte

### Coolers e ventoinhas

Auxiliam no resfriamento do processador e de outros componentes.

### Gabinete

Estrutura física que abriga e protege os componentes internos.

---

# 5. Periféricos

Periféricos permitem a interação entre usuário e computador.

Podemos pensar principalmente em:

### Dispositivos de entrada

Enviam dados para o computador.

Exemplos:

- teclado;
- mouse.

### Dispositivos de saída

Apresentam resultados do processamento.

Exemplos:

- monitor;
- impressora;
- caixas de som.

Alguns dispositivos podem desempenhar funções de entrada e saída.

---

# 6. Fluxo de dados no computador

O funcionamento pode ser compreendido pelo seguinte fluxo:

```text
Usuário
  ↓
ENTRADA
Teclado / Mouse
  ↓
PROCESSAMENTO
CPU + RAM
  ↓
ARMAZENAMENTO
HD / SSD
  ↓
SAÍDA
Monitor / Impressora
```

### Entrada

O usuário fornece os dados.

### Processamento

A CPU processa as informações e utiliza a RAM para armazenamento temporário.

### Armazenamento

Quando necessário, os dados são salvos em HD ou SSD.

### Saída

O resultado é apresentado ao usuário.

---

# 7. Software

**Software** é o conjunto de instruções que informa ao computador o que deve ser feito.

## Sistema Operacional

O **Sistema Operacional (SO)** faz a ponte entre:

```text
USUÁRIO
   ↕
SOFTWARE
   ↕
SISTEMA OPERACIONAL
   ↕
HARDWARE
```

Entre suas funções estão:

- gerenciamento de processos;
- controle de memória;
- interface com o usuário;
- gerenciamento de arquivos;
- segurança e permissões;
- controle de dispositivos.

Exemplos apresentados no material:

- Windows;
- Linux;
- macOS;
- Android;
- iOS.

---

## Software de sistema

São programas que auxiliam o sistema operacional.

Exemplos:

- drivers;
- antivírus;
- programas de limpeza;
- ferramentas de backup.

---

## Software aplicativo

São programas utilizados pelo usuário para trabalhar, estudar ou se divertir.

Exemplos:

| Categoria | Exemplos |
|---|---|
| Escritório | Word, Excel, PowerPoint, LibreOffice |
| Navegação | Chrome, Firefox, Edge |
| Comunicação | WhatsApp, Teams, Zoom |
| Entretenimento | Spotify, Netflix, jogos |
| Desenvolvimento | IDEs, editores de código e ferramentas de banco de dados |

---

# 8. Sistema Operacional Windows

O Windows gerencia os recursos do computador.

Uma analogia apresentada no material é imaginar o sistema operacional como o **motorista de um ônibus**:

```text
Ônibus      → Hardware
Passageiros → Programas
Motorista   → Sistema Operacional
```

O sistema operacional determina, entre outras coisas:

- quais programas são executados;
- como processos são gerenciados;
- onde arquivos são armazenados;
- quais usuários possuem determinadas permissões.

---

# 9. Arquitetura do Windows

O **Kernel** é o núcleo do sistema operacional.

Ele atua no gerenciamento de:

- processos;
- memória;
- drivers;
- comunicação com o hardware.

Uma visão simplificada:

```text
APLICATIVOS
     ↓
SUBSISTEMAS
     ↓
KERNEL
     ↓
HARDWARE
```

---

# 10. Interface gráfica do Windows

Entre os principais elementos da interface estão:

### Área de trabalho

Local onde aparecem ícones, arquivos e pastas.

### Menu Iniciar

Permite acessar programas e configurações.

### Barra de tarefas

Apresenta aplicativos abertos e notificações.

---

# 11. Arquivos

Um **arquivo** é uma unidade digital que armazena informações.

Exemplos:

```text
foto.jpg
imagem.png
musica.mp3
documento.docx
texto.txt
video.mp4
```

Um nome de arquivo pode ser compreendido como:

```text
nome + extensão
```

Exemplo:

```text
relatorio.pdf
```

- `relatorio` → nome
- `.` → separador
- `pdf` → extensão

A extensão ajuda a identificar o tipo do arquivo.

---

# 12. Pastas

Uma **pasta** é utilizada para organizar arquivos.

Ela pode:

- armazenar diversos arquivos;
- organizar conteúdos por assunto;
- conter outras pastas.

Exemplo:

```text
Documentos/
├── Faculdade/
│   ├── trabalho.pdf
│   └── atividade.txt
└── Projetos/
    └── algoritmo.txt
```

---

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
