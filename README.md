# Quiz di Italiano

Un'applicazione web interattiva per testare e migliorare le tue conoscenze della lingua italiana. Quiz moderno, responsive e accessibile.

## 🚀 Caratteristiche

- ✅ Quiz con 20+ domande su grammatica, vocabolario, letteratura e analisi logica
- ✅ Design minimalista e professionale
- ✅ Punteggio in tempo reale e indicatore streak
- ✅ Lifeline 50:50 per ricevere aiuto
- ✅ Spiegazioni dettagliate per ogni risposta
- ✅ Feedback immediato e valutazione finale
- ✅ Completamente responsive (mobile, tablet, desktop)
- ✅ Accessibilità ARIA completa
- ✅ Dark mode elegante

## 📋 Prerequisiti

- Node.js 16+ 
- npm o yarn

## 🛠️ Setup Locale

1. **Clone il repository**
```bash
git clone https://github.com/TUO_USERNAME/quiz-italiano.git
cd quiz-italiano
```

2. **Installa le dipendenze**
```bash
npm install
```

3. **Avvia il server di sviluppo**
```bash
npm run dev
```
L'app sarà disponibile su `http://localhost:5173`

4. **Build per produzione**
```bash
npm run build
```
I file compilati saranno in `dist/`

## 🚀 Deploy su Cloudflare Pages

### Metodo 1: Automatico (Consigliato)

1. Push il codice su GitHub
2. Vai a [Cloudflare Dashboard](https://dash.cloudflare.com/)
3. Pages → Create a project → Connect to Git
4. Seleziona il repository `quiz-italiano`
5. Build settings:
   - **Framework preset**: Vite
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
6. Deploy!

### Metodo 2: Manuale via CLI

```bash
# Installa Wrangler CLI
npm install -g wrangler

# Fai login
wrangler login

# Deploy
npm run build
wrangler pages deploy dist
```

## 📁 Struttura del Progetto

```
quiz-italiano/
├── src/
│   ├── components/
│   ├── App.tsx          # Componente principale
│   ├── index.tsx        # Entry point React
│   ├── constants.ts     # Domande e dati
│   ├── types.ts         # Type definitions
│   └── index.css        # Tailwind CSS
├── public/
│   └── favicon.svg
├── index.html           # HTML principale
├── package.json         # Dipendenze
├── tsconfig.json        # Config TypeScript
├── vite.config.ts       # Config Vite
└── README.md
```

## 🎨 Tech Stack

- **React 19** - UI Framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React 19 Hooks** - State management

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## ♿ Accessibilità

L'app è costruita seguendo gli standard WCAG 2.1:
- ✅ ARIA labels su tutti gli elementi interattivi
- ✅ Navigazione completa da tastiera
- ✅ Contrasto colore sufficiente
- ✅ Focus visibile
- ✅ Semantic HTML

## 🔧 Configurazione

Nessuna configurazione richiesta. L'app funziona out-of-the-box.

## 📝 License

MIT - Libero di usare e modificare

## 👤 Author

Sviluppato con ❤️ in Italia

---

**Stai cercando di migliorare il tuo italiano?** Prova il quiz e testa le tue conoscenze! 🎓
