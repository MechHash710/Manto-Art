# 🧶 Manto Art — Site Oficial

Crochê artesanal premium em Florianópolis, SC.

## 🚀 Como publicar gratuitamente

### Passo 1 — Criar conta no GitHub (se não tiver)

1. Acesse [github.com](https://github.com) e clique em **Sign up**
2. Crie sua conta com email e senha
3. Confirme o email

### Passo 2 — Subir o código no GitHub

**Opção A — Pelo site (mais fácil):**

1. No GitHub, clique no **+** no canto superior direito → **New repository**
2. Nome: `manto-art-site`
3. Marque **Public**
4. Clique **Create repository**
5. Clique em **uploading an existing file**
6. Arraste TODOS os arquivos desta pasta para lá
7. Clique **Commit changes**

**Opção B — Pelo terminal (se tiver Git instalado):**

```bash
cd manto-art-site
git init
git add .
git commit -m "Manto Art - site inicial"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/manto-art-site.git
git push -u origin main
```

### Passo 3 — Publicar no Vercel (GRÁTIS)

1. Acesse [vercel.com](https://vercel.com) e clique em **Sign Up**
2. Escolha **Continue with GitHub** (conecta com sua conta do GitHub)
3. Clique em **Add New...** → **Project**
4. Encontre o repositório `manto-art-site` e clique **Import**
5. O Vercel detecta automaticamente que é Vite + React
6. Clique **Deploy**
7. Em ~1 minuto, seu site estará no ar em: `manto-art-site.vercel.app`

### Passo 4 — Domínio personalizado (opcional, R$ 40/ano)

Quando quiser usar `www.mantoart.com.br`:

1. Registre o domínio em [registro.br](https://registro.br) — R$ 40/ano
2. No painel do Vercel, vá em **Settings** → **Domains**
3. Adicione `mantoart.com.br` e `www.mantoart.com.br`
4. O Vercel vai mostrar os DNS para configurar
5. No Registro.br, altere os DNS para os que o Vercel indicou
6. Aguarde 24-48h para propagação
7. SSL (https) é automático e gratuito no Vercel

## ✏️ O que você precisa personalizar

### 1. Número do WhatsApp
No arquivo `src/App.jsx`, procure esta linha:

```javascript
const WHATSAPP = "5548999999999"; // ← TROCAR pelo número real
```

Troque `5548999999999` pelo seu número real com DDD, sem espaços.
Exemplo: `"5548991234567"`

### 2. Fotos dos produtos
Substitua os placeholders coloridos por fotos reais das peças:

1. Crie uma pasta `public/fotos/`
2. Coloque as fotos lá (ex: `top-sereia.jpg`, `saia-mare.jpg`)
3. No arquivo `src/App.jsx`, no array `products`, adicione o campo `image`:

```javascript
{ id: 1, name: "Top Sereia", price: 89, cat: "tops", image: "/fotos/top-sereia.jpg", ... }
```

4. E no componente `ProductImage`, use `<img src={product.image} />` em vez do placeholder

### 3. Instagram
Troque `@mantoart` pelo seu @ real do Instagram e adicione o link correto.

### 4. Preços
Ajuste os preços no array `products` conforme suas peças reais.

## 💰 Custo total

| Item | Custo |
|------|-------|
| Hospedagem (Vercel) | **Grátis** |
| SSL (https) | **Grátis** |
| GitHub | **Grátis** |
| Domínio .com.br (opcional) | R$ 40/ano |

## 🛠️ Desenvolvimento local (opcional)

Se quiser editar o site localmente antes de subir:

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173` no navegador.

---

Feito com ♡ pela skill ecommerce-full-stack
