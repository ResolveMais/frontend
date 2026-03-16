# Frontend - Resolve Mais

Aplicação web do projeto **Resolve Mais**, construída com `React` e `Vite`, responsável pela experiência do usuário final e pela integração com a API do backend.

## Objetivo deste repositório

Este repositório concentra a interface da plataforma, incluindo páginas públicas, fluxo de autenticação, área do usuário e funcionalidades de abertura e acompanhamento de tickets.

## Stack

- `React`
- `Vite`
- `React Router`
- `Axios`
- `Styled Components`
- `React Hook Form`
- `Yup`

## Funcionalidades disponíveis

- landing page institucional
- página “Empresa”
- página da equipe
- login e cadastro
- persistência de sessão com token em `localStorage`
- dashboard inicial do usuário
- abertura de ticket
- visualização de tickets em andamento
- visualização de tickets encerrados
- atualização de dados do usuário
- feedback visual com contexto de notificações

## Estrutura principal

```text
frontend/
├── public/
├── src/
│   ├── components/   # Componentes reutilizáveis
│   ├── contexts/     # Estado global de autenticação, tema e snack
│   ├── layout/       # Layouts das páginas
│   ├── pages/        # Páginas da aplicação
│   ├── routes/       # Definição das rotas
│   ├── services/     # Comunicação com a API
│   └── styles/       # Estilos globais e temas
├── .env.example
├── package.json
└── vite.config.js
```

## Requisitos

- `Node.js` 22 ou superior
- `npm`
- backend do projeto em execução

## Configuração do ambiente

### 1. Instalar dependências

```powershell
npm install
```

### 2. Configurar variáveis de ambiente

Crie o arquivo `.env` a partir do exemplo:

```powershell
Copy-Item .env.example .env
```

Conteúdo esperado:

```env
VITE_API_URL=http://localhost:3001/api
```

Essa URL deve apontar para a API do repositório `backend`.

## Como rodar

### Desenvolvimento

```powershell
npm run dev
```

O Vite exibirá no terminal a URL local da aplicação, normalmente `http://localhost:5173`.

### Build de produção

```powershell
npm run build
```

### Preview da build

```powershell
npm run preview
```

### Lint

```powershell
npm run lint
```

## Scripts disponíveis

- `npm run dev`: inicia o servidor de desenvolvimento do Vite
- `npm run build`: gera a build de produção
- `npm run preview`: sobe uma prévia local da build
- `npm run lint`: executa a análise estática com ESLint

## Rotas da aplicação

As rotas atualmente mapeadas incluem:

- `/` - landing page
- `/landing` - landing page
- `/empresa` - página institucional da empresa
- `/team` - apresentação da equipe
- `/login` - autenticação
- `/register` - cadastro
- `/home` - área inicial autenticada
- `/configuracoes` - dados do usuário
- `/OpenTicket` - abertura de ticket
- `/PendingTickets` - tickets em andamento
- `/ClosedTickets` - tickets encerrados

## Integração com o backend

O consumo da API é feito via `axios` em `src/services/api.js`, usando `VITE_API_URL` como `baseURL`.

O token JWT:

- é salvo em `localStorage` após login
- é enviado no header `Authorization`
- é validado na inicialização da aplicação por meio da rota `/auth/me`

## Fluxo principal do usuário

1. usuário acessa a landing page
2. realiza cadastro ou login
3. o token é salvo localmente
4. a aplicação valida a sessão ao recarregar
5. o usuário pode abrir tickets e acompanhar o histórico

## Páginas e áreas principais

### Públicas

- `Landing`
- `Empresa`
- `Team`
- `Login`
- `Register`

### Autenticadas

- `Home`
- `UserData`
- `NewTicketForm.jsx`
- `PendingTickets`
- `ClosedTickets`

## Componentes e contextos relevantes

### Componentes

- `Header`
- `LoggedHeader`
- `Button`
- `Input`
- `PendingTickets`
- `Snack`

### Contextos

- `AuthContext`: autenticação e sessão
- `SnackContext`: mensagens de feedback
- `ThemeContext`: gerenciamento de tema

## Observações técnicas

- O frontend depende do backend para autenticação e dados dos tickets.
- Se `VITE_API_URL` estiver incorreta, login, cadastro e tickets não funcionarão.
