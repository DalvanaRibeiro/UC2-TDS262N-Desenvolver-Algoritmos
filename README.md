# 🐙 Git e GitHub — Guia de Sobrevivência no Laboratório

Você chegou para a aula, abriu o computador e...

😱 **Seu projeto não está aqui.**

Ou pior:

> **“Prof, não consigo subir para o GitHub!”**

Calma. Este guia vai te acompanhar desde o momento em que você chega em um computador novo até o momento em que seu código está salvo no GitHub.

---



# 👤 1. Quem está usando o Git?

Como você está utilizando um computador compartilhado, pode existir configuração de outra pessoa.

Veja quem está configurado:

```bash
git config --global user.name
```

Depois:

```bash
git config --global user.email
```

Se precisar configurar seus dados:

```bash
git config --global user.name "Seu Nome"
```

```bash
git config --global user.email "seuemail@gmail.com"
```

Exemplo:

```bash
git config --global user.name "Maria Silva"
git config --global user.email "maria@gmail.com"
```

> ⚠️ Isso identifica quem realizou os commits. **Isso não significa que você entrou na sua conta do GitHub.**

---

# 📦 2. Seu projeto já está no GitHub?

Se você chegou em um computador diferente e seu projeto **não está nele**, não precisa criar tudo novamente.

Você vai **clonar** o seu projeto.

Entre no seu repositório no GitHub.

Clique em:

```text
Code → HTTPS
```
<img width="1443" height="784" alt="image" src="https://github.com/user-attachments/assets/eb166048-dad8-40c3-9353-a5407b7b6794" />


Copie o endereço.

Ele será parecido com:

```text
https://github.com/seu-usuario/meu-projeto.git
```

Agora, no terminal:

```bash
git clone https://github.com/seu-usuario/meu-projeto.git
```

## 🤔 O que `git clone` faz?

Ele traz uma cópia do seu repositório do GitHub para o computador.

```text
🌎 GitHub
     ↓
     ↓ git clone
     ↓
💻 Computador
```

Agora entre na pasta:

```bash
cd meu-projeto
```

E abra o projeto no VS Code:

```bash
code .
```

Pronto! 🎉

Seu projeto está nesse computador.

---

# 🔄 3. O projeto já estava no computador?

Se a pasta do projeto já existe, **não faça `git clone` novamente**.

Abra a pasta correta no VS Code.

Antes de começar a programar, execute:

```bash
git pull
```

## 🤔 O que `git pull` faz?

Ele verifica se existem alterações novas no GitHub e traz essas alterações para o computador.

```text
🌎 GitHub
     ↓
     ↓ git pull
     ↓
💻 Seu projeto
```

## ⭐ Regra de ouro

Quando chegar:

```bash
git pull
```

Quando terminar:

```bash
git push
```

Ou seja:

```text
📥 CHEGUEI → PULL

💻 PROGRAMEI

📤 TERMINEI → PUSH
```
<img width="319" height="315" alt="image" src="https://github.com/user-attachments/assets/7fecc7eb-af64-48fd-b70f-7163f64cd565" />

---

# 💻 4. Agora você pode programar!

Faça seus exercícios normalmente.

Você pode:

- criar arquivos;
- alterar arquivos;
- excluir arquivos;
- corrigir seu código;
- adicionar novas funcionalidades.

Exemplo:

```text
meu-projeto/
│
├── variaveis.js
├── operadores.js
└── condicionais.js
```

Terminou?

Agora precisamos salvar essa versão no Git.

---

# 🔍 5. Veja o que você alterou

Digite:

```bash
git status
```

O Git mostrará quais arquivos foram alterados.

O `git status` pode mostrar:

```text
modified
```

Arquivo modificado.

```text
untracked
```

Arquivo novo que ainda não está sendo acompanhado pelo Git.

Você pode executar:

```bash
git status
```

quantas vezes quiser.

Ele serve para perguntar ao Git:

> 🔎 **“Git, como está meu projeto?”**

---

# ➕ 6. Prepare os arquivos

Agora execute:

```bash
git add .
```

O ponto `.` significa:

> Adicione todas as alterações deste projeto.

Então:

```bash
git add .
```

prepara os arquivos para o próximo registro.

Você também pode adicionar somente um arquivo:

```bash
git add script.js
```

Mas normalmente utilizaremos:

```bash
git add .
```

---

# 📸 7. Registre essa versão

Agora chegou a hora do:

```bash
git commit
```

Execute:

```bash
git commit -m "Adiciona exercício de operadores"
```

## 🤔 O que é um commit?

Pense no commit como uma **fotografia daquele momento do seu projeto**.

📸 Você terminou uma parte importante?

Crie um commit.

Exemplo:

```bash
git commit -m "Adiciona exercício de média"
```

Outro exemplo:

```bash
git commit -m "Corrige cálculo da média"
```

Outro:

```bash
git commit -m "Adiciona exercícios de operadores"
```

### ❌ Evite commits assim:

```bash
git commit -m "coisa"
```

```bash
git commit -m "teste"
```

```bash
git commit -m "asdf"
```

A mensagem deve explicar **o que você fez**.

---

# 🚀 8. Envie para o GitHub

Seu código ainda está somente no computador.

Para enviar os commits para o GitHub:

```bash
git push
```

## 🤔 O que `git push` faz?

Ele envia seus commits para o repositório no GitHub.

```text
💻 COMPUTADOR
      ↓
      ↓ git push
      ↓
🌎 GITHUB
```

Depois disso:

👉 Entre no GitHub.

👉 Atualize a página.

👉 Confira se seus arquivos estão lá.

---

# 🔁 Sua rotina durante as aulas

Quando chegar:

```bash
git pull
```

Faça seus exercícios.

Depois:

```bash
git status
```

Prepare as alterações:

```bash
git add .
```

Registre:

```bash
git commit -m "Descrição do que você fez"
```

Envie:

```bash
git push
```

## 🧠 Viva este fluxo:

```text
        📥
      PULL
        ↓
   💻 PROGRAMAR
        ↓
      STATUS
        ↓
       ADD
        ↓
     COMMIT
        ↓
      PUSH
        📤
```

---

# 🆕 E se o projeto ainda NÃO existe no GitHub?

Agora a situação é diferente.

Você criou uma pasta nova no computador e quer começar a versioná-la.

Exemplo:

```text
exercicios-javascript/
```

Abra essa pasta no VS Code.

No terminal:

```bash
git init
```

## 🤔 O que `git init` faz?

Ele transforma aquela pasta em um **repositório Git**.

Depois:

```bash
git status
```

Prepare os arquivos:

```bash
git add .
```

Crie o primeiro commit:

```bash
git commit -m "Primeiro commit"
```

---

# 🌎 Agora crie o repositório no GitHub

Entre no GitHub e escolha:

```text
New repository
```

Dê um nome.

Por exemplo:

```text
exercicios-javascript
```

Depois de criar o repositório, copie a URL HTTPS.

Exemplo:

```text
https://github.com/seu-usuario/exercicios-javascript.git
```

---

# 🔗 Conecte seu projeto ao GitHub

Agora precisamos dizer:

> 💻 “Este projeto que está no meu computador pertence àquele repositório no GitHub.”

Execute:

```bash
git remote add origin https://github.com/seu-usuario/exercicios-javascript.git
```

## 🤔 O que é `origin`?

`origin` é o nome que normalmente damos para o repositório remoto principal.

Pense assim:

```text
origin = meu repositório no GitHub
```

---

# 🌿 Configure a branch principal

Execute:

```bash
git branch -M main
```

Isso define a branch principal como:

```text
main
```

---

# 🚀 Faça o primeiro envio

Agora:

```bash
git push -u origin main
```

Pronto!

Depois dessa primeira configuração, normalmente você poderá utilizar apenas:

```bash
git push
```

---

# 🔎 Como saber se meu projeto está conectado ao GitHub?

Execute:

```bash
git remote -v
```

Se aparecer algo parecido com:

```text
origin  https://github.com/seu-usuario/meu-projeto.git (fetch)
origin  https://github.com/seu-usuario/meu-projeto.git (push)
```

✅ Seu projeto está conectado a um repositório remoto.

---

# 🚨 O projeto tem Git, mas não está conectado ao GitHub

Primeiro:

```bash
git remote -v
```

Não apareceu nada?

Adicione o repositório:

```bash
git remote add origin https://github.com/seu-usuario/meu-projeto.git
```

Depois:

```bash
git branch -M main
```

E:

```bash
git push -u origin main
```

---

# 📦 Cuidado com o `node_modules`

Se você está trabalhando com JavaScript/Node.js e executou:

```bash
npm install
```

provavelmente apareceu a pasta:

```text
node_modules/
```

🚨 **Não envie `node_modules` para o GitHub!**

Crie um arquivo chamado:

```text
.gitignore
```

Dentro dele coloque:

```gitignore
node_modules/
.env
```

Agora o Git ignorará esses arquivos.

---

# 🤔 Então como o `node_modules` aparece em outro computador?

Quando você chegar em outro computador:

```bash
git clone URL_DO_REPOSITORIO
```

Entre na pasta:

```bash
cd nome-do-projeto
```

Depois:

```bash
npm install
```

O `npm install` lê as dependências do seu projeto e instala novamente o que for necessário.

Por isso normalmente enviamos:

```text
package.json
package-lock.json
```

mas não:

```text
node_modules/
```

---

# 🆘 SOCORRO, PROF! — Cola rápida

## 😱 Cheguei e meu projeto não está neste computador!

```bash
git clone URL_DO_REPOSITORIO
```

Depois:

```bash
cd nome-do-projeto
```

E:

```bash
code .
```

---

## 😎 Cheguei e meu projeto já está aqui!

Antes de começar:

```bash
git pull
```

---

## 💻 Terminei meus exercícios!

```bash
git status
git add .
git commit -m "Descrição do que foi realizado"
git push
```

---

## 🆕 Criei um projeto completamente novo!

```bash
git init
git add .
git commit -m "Primeiro commit"
git branch -M main
git remote add origin URL_DO_REPOSITORIO
git push -u origin main
```

---

# 🧠 Os comandos que você precisa lembrar

| Comando | Para que serve? |
|---|---|
| `git --version` | Verifica se o Git está instalado |
| `git clone URL` | Baixa um projeto do GitHub |
| `git pull` | Traz as alterações do GitHub |
| `git status` | Mostra o estado do projeto |
| `git add .` | Prepara as alterações |
| `git commit -m "mensagem"` | Registra uma versão |
| `git push` | Envia os commits para o GitHub |
| `git init` | Inicia um repositório Git |
| `git remote -v` | Mostra o repositório remoto |
| `git remote add origin URL` | Conecta o projeto ao GitHub |
| `git branch -M main` | Define a branch principal como `main` |

---

# 🏆 Fluxo que você precisa dominar

```text
CHEGUEI
   ↓
git pull
   ↓
PROGRAMEI
   ↓
git status
   ↓
git add .
   ↓
git commit -m "o que eu fiz"
   ↓
git push
   ↓
GITHUB ✅
```

> 💡 **Lembre-se:** o Git registra o seu trabalho. O GitHub mantém esse trabalho disponível remotamente. Se você terminou uma atividade importante, faça o commit e envie com `git push`.

**Antes de ir embora, confira o GitHub.** Se os arquivos estiverem lá, seu trabalho está salvo no repositório. 🚀
