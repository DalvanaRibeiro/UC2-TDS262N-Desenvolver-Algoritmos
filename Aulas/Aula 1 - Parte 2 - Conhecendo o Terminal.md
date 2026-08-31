# UC2 — Conhecendo o Computador e o Terminal

> **Unidade Curricular:** UC2 — Desenvolver Algoritmos  
> **Material de apoio:** Conhecendo o Computador e o Terminal  
> **Objetivo:** compreender os principais conceitos de hardware, software, sistema operacional, arquivos, pastas, interfaces e comandos básicos de terminal.
> **Link para os Slides:** https://canva.link/qpmb624ue3qktf2

---

## 1. O que é um computador?

A palavra **computador** está relacionada ao verbo **computar**, isto é, **calcular**.

Apesar da evolução tecnológica, computadores de diferentes formatos seguem o mesmo princípio básico:

```text
ENTRADA → PROCESSAMENTO → SAÍDA
```

O usuário fornece **dados e instruções**, o computador realiza o **processamento** e produz dados ou informações como **saída**.

<img width="450" height="162" alt="image" src="https://github.com/user-attachments/assets/76e34da9-5a9e-409d-8f1f-d1040d04e96f" />

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
<img width="365" height="285" alt="image" src="https://github.com/user-attachments/assets/9cc800ef-746f-46f5-98c5-88f4e70675f0" />


### Notebook

Computador portátil que integra em um único equipamento:

- tela;
- teclado;
- touchpad;
- componentes internos;
- bateria.
- <img width="347" height="247" alt="image" src="https://github.com/user-attachments/assets/8a06e4b1-3b6b-4280-885d-992ed96f3839" />


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
<img width="400" height="502" alt="image" src="https://github.com/user-attachments/assets/ae616b6d-5cf2-4d4f-8879-52472c0b3497" />

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



Essa sequência simples já representa uma habilidade fundamental para quem está começando a desenvolver algoritmos e sistemas.

---

**UC2 — Desenvolver Algoritmos**  
**Material de estudo: Conhecendo o Computador e o Terminal**
