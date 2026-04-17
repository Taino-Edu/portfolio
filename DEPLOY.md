# Guia Rápido de Deploy

## Passo 1: GitHub

```bash
git init
git add .
git commit -m "feat: portfolio inicial"
git remote add origin https://github.com/SEU-USUARIO/portfolio.git
git push -u origin main
```

## Passo 2: Vercel

1. Acesse [vercel.com](https://vercel.com) e faça login
2. Clique em **"Add New Project"**
3. Importe seu repositório do GitHub
4. Clique em **"Deploy"**

## Passo 3: Variáveis de Ambiente

No painel do projeto na Vercel:
1. Vá em **Settings → Environment Variables**
2. Adicione a variável:
   - **Name:** `ANTHROPIC_API_KEY`
   - **Value:** sua chave do Claude
3. Clique em **Save**

## Passo 4: Redeploy

Após adicionar as variáveis:
1. Vá em **Deployments**
2. Clique em **Redeploy** no último deploy

## ✅ Pronto!

Seu portfolio estará em: `https://portfolio-seu-usuario.vercel.app`

---

**Dica:** Após o primeiro deploy, qualquer `git push` na branch `main` fará deploy automático!
