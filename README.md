# Portfolio Fullstack — Next.js + Vercel + Claude API

Portfolio profissional com chatbot de IA integrado, pronto para deploy na Vercel.

## ✨ Features

- Seção Hero com apresentação e código animado
- Galeria de projetos com cards responsivos
- Seção de skills por categorias
- Chat com IA usando Claude API
- Design responsivo (mobile-first)
- CSS Modular (sem conflitos de estilo)
- Deploy automático na Vercel

## 🛠️ Pré-requisitos

- Node.js 18+
- npm ou yarn
- Conta na Vercel (gratuita)
- API Key da Anthropic (Claude)

## 🚀 Setup Local

### 1. Instalar dependências

```bash
npm install
```

### 2. Configurar variáveis de ambiente

```bash
cp .env.example .env.local
```

Edite `.env.local` e adicione sua chave:
```
ANTHROPIC_API_KEY=sua_chave_aqui
```

### 3. Rodar em desenvolvimento

```bash
npm run dev
```

Acesse http://localhost:3000

## 🎨 Customização

### Trocar seu nome e descrição
Edite `components/Hero.jsx`:
- Linha com `Taino` → seu nome
- Parágrafo de descrição → sua bio

### Adicionar projetos
Edite `components/Projects.jsx`:
- Array `projects` → adicione seus projetos

### Listar suas skills
Edite `components/Skills.jsx`:
- Array `skillCategories` → suas tecnologias

### Mudar cores
Edite `styles/globals.css`:
- `--primary` → cor principal
- `--gradient-primary` → gradiente

### Customizar o chatbot
Edite `app/api/chat/route.js`:
- Variável `portfolioContext` → suas informações

## 📦 Deploy na Vercel

### Método 1: Via GitHub (Recomendado)

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/seu-usuario/portfolio.git
git push -u origin main
```

Depois em vercel.com → "New Project" → importe o repositório.

### Método 2: Via CLI

```bash
npm i -g vercel
vercel
```

### Variáveis de ambiente na Vercel

No painel da Vercel:
1. Settings → Environment Variables
2. Adicione: `ANTHROPIC_API_KEY` = sua chave

## 📁 Estrutura do Projeto

```
portfolio-template/
├── app/
│   ├── layout.jsx          # Layout raiz
│   ├── page.jsx            # Home page
│   └── api/chat/
│       └── route.js        # Chat API (Claude)
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Projects.jsx
│   ├── Skills.jsx
│   ├── ChatSection.jsx
│   └── Footer.jsx
├── styles/
│   ├── globals.css
│   └── *.module.css
└── package.json
```

## 🔐 Variáveis de Ambiente

| Variável | Descrição |
|----------|-----------|
| `ANTHROPIC_API_KEY` | Chave da API do Claude |

## 🤖 Como Funciona o Chat IA

1. Usuário digita mensagem no `ChatSection.jsx`
2. Frontend envia POST para `/api/chat`
3. `route.js` recebe e chama a Claude API
4. Claude responde baseado no `portfolioContext`
5. Resposta aparece no chat

## 📱 Responsividade

Breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px  
- Desktop: > 1024px

## 🔧 Troubleshooting

**Erro 401 no chat:** API Key inválida ou não configurada

**Build falha:** Verifique se o `ANTHROPIC_API_KEY` está nas variáveis da Vercel

**Estilos não carregam:** Verifique se `globals.css` está importado em `layout.jsx`

## 📖 Recursos Úteis

- [Next.js Docs](https://nextjs.org/docs)
- [Claude API Docs](https://docs.anthropic.com)
- [Vercel Docs](https://vercel.com/docs)
- [React Docs](https://react.dev)
