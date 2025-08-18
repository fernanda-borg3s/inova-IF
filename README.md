# 🎓 Inova IF (Módulo Agenda) – Sistema de Gerenciamento Educacional para Curso Inovadores

**Inova IF** é uma aplicação web desenvolvida como Trabalho de Conclusão de Curso (TCC), com o objetivo de facilitar o gerenciamento de iniciativas e inscrições em atividades acadêmicas no contexto institucional. A aplicação foi construída com base em metodologias de desenvolvimento de software, utilizando uma **arquitetura em camadas** e tecnologias modernas de front-end e back-end.


## Visão Geral

O sistema oferece funcionalidades específicas para dois tipos de usuárias: **professoras** e **alunas**, cada uma com permissões e regras de negócio distintas, como:

- Acesso e papéis:
  - Ao criar uma conta, a usuária pode escolher o tipo de perfil: Professora ou Aluna.
  - As permissões são aplicadas com base nesse papel.
- Professora: pode cadastrar atividades acadêmicas.
- Aluna: pode visualizar e se inscrever em atividades disponíveis.

## Tecnologias Utilizadas

### Front-end

- **HTML5**, **CSS3**, **JavaScript ES6+**
- **React.js**
- **Vite** (como bundler)
- **Bootstrap** (estilização)
- **Axios** (requisições HTTP)
- **FullCalendar** (visualização de calendário interativo)

### Back-end

- **Node.js** com **Express.js**

### Armazenamento 

- **PostgreSQL**

### Funcionalidades gerais

- Página de **login e cadastro** com autenticação
- Diferenciação de **papéis de usuário** (professora ou aluna)
- Cadastro e exibição de **atividades acadêmicas**
- Inscrição em atividades (aluna)
- Visualização de eventos em **calendário interativo** (FullCalendar)
- Armazenamento de dados e integração entre front e back com **API REST**

## 📸 Prévia da Interface

### Login e Registro
<img width="995" height="785" alt="image" src="https://github.com/user-attachments/assets/ca585ac9-25e1-432c-9880-6bfd58862af7" />

### Página Inicial - Professoras
<img width="963" height="499" alt="image" src="https://github.com/user-attachments/assets/2c7f9c26-a936-43e5-b02d-20b13a254baf" />

### Página Inicial - Alunas
<img width="481" height="630" alt="image" src="https://github.com/user-attachments/assets/5b63157d-ecc7-4894-b8a7-4dae5dab03b0" />

## Acesso Online
### ⚠️ O sistema online é uma versão demo.
1. Acesse o link abaixo
```bash
https://inovaif.netlify.app/
```
2. Escolha um dos perfis (aluna ou professora)
3. E fique a vontade para explorar o sistema.

## Como executar o projeto (versão completa)
1. Clone o repositório
```bash
 git clone https://github.com/fernanda-borg3s/inova-IF.git
```
2. Inicie o backend
```bash
cd backend
npm install
npm run dev
```
3. Inicie o frontend
```bash
cd frontend
npm install
npm run dev
```

## Como executar o projeto (versão online)
1. Clone o repositório
```bash
git clone https://github.com/fernanda-borg3s/inovaif_online.git
```
2. Inicie o frontend
```bash
cd frontend
npm install
npm run dev
```
