# 📋 Guida Completa: GitHub + Cloudflare Pages

## ✅ Pronto per il Deploy

Hai tutto il codice della web app. Ecco come caricare su GitHub e collegare a Cloudflare.

---

## 📍 STEP 1: Preparare i file localmente

### 1.1 Organizza la cartella del progetto

Crea una cartella `quiz-italiano/` con questa struttura:

```
quiz-italiano/
├── src/
│   ├── App.tsx
│   ├── index.tsx
│   ├── constants.ts
│   ├── types.ts
│   └── index.css
├── public/
│   └── favicon.svg (crea un SVG semplice o scaricane uno)
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── .gitignore
└── README.md
```

### 1.2 Inizializza Git localmente

```bash
cd quiz-italiano
git init
git add .
git commit -m "Initial commit: Quiz di Italiano"
git branch -M main
```

---

## 🐙 STEP 2: Caricare su GitHub

### 2.1 Crea un repository vuoto su GitHub

1. Vai su https://github.com/new
2. Repository name: `quiz-italiano`
3. Description: "Quiz interattivo di italiano"
4. Seleziona **Public** (così Cloudflare può accedervi)
5. **Non** inizializzare con README, .gitignore, o license
6. Click **Create repository**

### 2.2 Collega e pusha il codice

Dopo aver creato il repo, GitHub ti mostra i comandi. Usa questi:

```bash
git remote add origin https://github.com/TUO_USERNAME/quiz-italiano.git
git push -u origin main
```

Sostituisci `TUO_USERNAME` con il tuo username GitHub.

### 2.3 Verifica

Vai su https://github.com/TUO_USERNAME/quiz-italiano
Dovresti vedere tutti i file caricati! ✅

---

## ☁️ STEP 3: Connettere Cloudflare Pages

### 3.1 Accedi a Cloudflare

1. Vai su https://dash.cloudflare.com/
2. Accedi con il tuo account (crea uno se non lo hai)

### 3.2 Crea il progetto Pages

1. Nel menu a sinistra, seleziona **Pages**
2. Click **Create a project**
3. Click **Connect to Git**

### 3.3 Autorizza GitHub

1. Seleziona **GitHub** come provider Git
2. Click **Authorize Cloudflare Pages**
3. Accedi a GitHub
4. Autorizza Cloudflare a accedere ai tuoi repository

### 3.4 Seleziona il repository

1. Cerca e seleziona `quiz-italiano`
2. Click **Begin setup**

### 3.5 Configura il build

**Project name**: `quiz-italiano` (o un nome a tua scelta)

**Branch**: `main`

**Build settings**:
- **Framework preset**: Seleziona **Vite** dal dropdown
- **Build command**: `npm run build`
- **Build output directory**: `dist`

Se sono già compilati, clicca **Save and Deploy** ✅

### 3.6 Attendi il primo deploy

Cloudflare inizia a buildare automaticamente. Vai su **Deployments** per vedere il progresso.

Una volta finito (~2 minuti), vedrai un URL tipo:
```
https://quiz-italiano.pages.dev
```

Clicca e testa se l'app funziona! 🎉

---

## 🌐 STEP 4: Connettere il tuo dominio (opzionale)

Se hai un dominio su Cloudflare:

### 4.1 Configura il dominio

1. In Pages, vai su **Settings** del tuo progetto
2. Scroll fino a **Domains**
3. Click **Add domain**
4. Seleziona il tuo dominio dalla lista
5. Conferma

### 4.2 Verifica DNS

Cloudflare configura automaticamente i DNS record. Dopo 5-10 minuti, il tuo dominio punterà all'app.

Testa con: `https://il-tuo-dominio.it`

---

## 🔄 STEP 5: Deploy automatico

**Bellissima notizia**: Da ora in poi, ogni volta che pushı codice su GitHub:

```bash
git add .
git commit -m "Aggiunto nuove domande"
git push origin main
```

Cloudflare **automaticamente**:
1. Scarica il nuovo codice da GitHub
2. Builda il progetto (`npm run build`)
3. Deploya i nuovi file su Pages
4. L'app si aggiorna in 1-2 minuti ✅

---

## 🆘 Troubleshooting

### Build fallisce su Cloudflare

**Errore**: "Build failed"

**Soluzione**:
1. Verifica che localmente `npm run build` funzioni perfettamente
2. Controlla che `node_modules/` sia in `.gitignore` (non deve essere committato)
3. Verifica che `vite.config.ts` sia corretto
4. Torna in Pages → Settings → Rebuild deployment

### App non aggiorna

**Soluzione**:
1. Svuota cache browser: `Ctrl+Shift+Canc` (o Cmd+Shift+Canc su Mac)
2. Ricarica: `Ctrl+R` (o Cmd+R su Mac)
3. Se ancora non funziona, force refresh: `Ctrl+Shift+R` (o Cmd+Shift+R su Mac)

### Dominio non funziona

**Soluzione**:
1. Verifica che il dominio sia configurato in Cloudflare Dashboard
2. Attendi 24-48 ore per propagazione DNS globale
3. Controlla che SSL certificate sia valido: vai su https://il-tuo-dominio.it (non http)

### Pagina bianca/errore

**Soluzione**:
1. Apri Console Browser: F12 → Console
2. Cerca errori rossi
3. Se vedi errori TypeScript, correggi e pusha un nuovo commit
4. Rebuilda manualmente in Cloudflare

---

## 📈 Prossimi passi

### Aggiungere più domande

Modifica `src/constants.ts` e aggiungi elementi all'array `allQuestions`:

```typescript
export const allQuestions: Question[] = [
  {
    question: "Nuova domanda?",
    options: ["Opzione 1", "Opzione 2", "Opzione 3", "Opzione 4"],
    correct: 0,
    explanation: "Spiegazione della risposta corretta.",
    category: "Grammatica"
  },
  // ... altre domande
];
```

Pusha con `git push` e Cloudflare deployerà automaticamente!

### Personalizzare il design

Tutti i colori e lo stile sono in `src/App.tsx` usando Tailwind CSS. Modifica le classi e testa!

### Analytics

Aggiungi Cloudflare Analytics:
1. Pages → Impostazioni
2. Scroll fino a Analytics
3. Attiva Analytics Engine

---

## ✨ Fatto!

Complimenti! 🎉

La tua web app è ora:
- ✅ Caricata su GitHub
- ✅ Deployed su Cloudflare Pages
- ✅ Accessibile da internet
- ✅ Con deploy automatico ad ogni push
- ✅ Con dominio custom (opzionale)

**La prossima volta che modifichi il codice, basta:**
```bash
git add .
git commit -m "Descrizione dei cambiamenti"
git push
```

**E l'app si aggiorna automaticamente online!** 🚀

---

## 📞 Domande frequenti

**D: Come modifico una domanda?**
R: Edita `src/constants.ts`, modifica il testo, fai commit e push.

**D: Posso usare un dominio esterno (non Cloudflare)?**
R: Sì, ma devi configurare manualmente i nameserver. Cloudflare ha guide dettagliate per ogni registrar.

**D: L'app è gratis?**
R: Sì! GitHub è gratis e Cloudflare Pages è gratis per progetti statici.

**D: Quanti visitatori/mese posso avere?**
R: Cloudflare Pages non ha limiti di traffico. Usa tutto quello che vuoi!

**D: Posso aggiungere un backend/database?**
R: Sì, usando Cloudflare Workers, ma al momento l'app è 100% frontend (no server needed).

---

**Hai successo! 🌟 La tua web app è online!**
