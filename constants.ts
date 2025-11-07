import type React from 'react';
import type { Question } from './types';

export const categoryIcons: Record<string, React.FC<{ className?: string }>> = {
  'Grammatica': () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
  'Vocabolario': () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17s4.5 10.747 10 10.747c5.5 0 10-4.998 10-10.747S17.5 6.253 12 6.253z" /></svg>,
  'Punteggiatura': () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4v2m0 4v.01" /></svg>,
  'Letteratura': () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17s4.5 10.747 10 10.747c5.5 0 10-4.998 10-10.747S17.5 6.253 12 6.253z" /></svg>,
  'Analisi logica': () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.5a2 2 0 00-1 .267" /></svg>,
  'Figure Retoriche': () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
};

export const allQuestions: Question[] = [
  // Grammatica
  {
    question: "Qual è il participio passato di 'rompere'?",
    options: ["Romputo", "Rotto", "Rompato", "Rompito"],
    correct: 1,
    explanation: "Il participio passato di 'rompere' è 'rotto' (verbo irregolare della prima coniugazione).",
    category: "Grammatica"
  },
  {
    question: "Completa: 'Se ____ più tempo, verrei con te.'",
    options: ["avessi", "avrei", "ho", "avrò"],
    correct: 0,
    explanation: "Nel periodo ipotetico dell'irrealtà (3° tipo) si usa il congiuntivo imperfetto: 'avessi'.",
    category: "Grammatica"
  },
  {
    question: "Qual è il plurale di 'camicia'?",
    options: ["Camicie", "Camice", "Camicii", "Camicia"],
    correct: 0,
    explanation: "I nomi femminili in -cia con vocale prima formano il plurale in -cie: camicie.",
    category: "Grammatica"
  },
  {
    question: "Quale verbo è coniugato correttamente al presente indicativo?",
    options: ["Tu vadiamo", "Noi va", "Loro vanno", "Voi vadete"],
    correct: 2,
    explanation: "'Loro vanno' è la forma corretta della terza persona plurale del presente indicativo di 'andare'.",
    category: "Grammatica"
  },
  {
    question: "Come si trasforma 'mangiare' al passato remoto (io)?",
    options: ["Mangiavo", "Mangiai", "Ho mangiato", "Mangerò"],
    correct: 1,
    explanation: "Il passato remoto di 'io mangiare' è 'mangiai' (prima coniugazione).",
    category: "Grammatica"
  },
  {
    question: "Quale frase contiene un verbo al congiuntivo presente?",
    options: ["Penso che sei bravo.", "Penso che sei bravo.", "Penso che sia bravo.", "Penso che eri bravo."],
    correct: 2,
    explanation: "La forma corretta con 'penso' richiede il congiuntivo presente: 'che sia bravo'.",
    category: "Grammatica"
  },

  // Vocabolario
  {
    question: "Quale termine è sinonimo di 'perspicace'?",
    options: ["Confuso", "Acuto", "Lento", "Distratto"],
    correct: 1,
    explanation: "'Perspicace' significa intelligente, acuto, capace di capire velocemente le situazioni.",
    category: "Vocabolario"
  },
  {
    question: "Qual è il contrario di 'effimero'?",
    options: ["Breve", "Duraturo", "Veloce", "Antico"],
    correct: 1,
    explanation: "'Effimero' significa di breve durata. Il suo contrario è 'duraturo' (che dura a lungo).",
    category: "Vocabolario"
  },
  {
    question: "Cosa significa 'ambiguo'?",
    options: ["Chiaro e evidente", "Che ha duplice significato", "Facile da capire", "Molto complicato"],
    correct: 1,
    explanation: "'Ambiguo' significa che può avere due interpretazioni diverse; poco chiaro.",
    category: "Vocabolario"
  },
  {
    question: "Quale parola significa 'falso, contraffatto'?",
    options: ["Generico", "Spurio", "Proprio", "Autentico"],
    correct: 1,
    explanation: "'Spurio' significa falso, non legittimo, contraffatto.",
    category: "Vocabolario"
  },
  {
    question: "Cosa significa 'ostinato'?",
    options: ["Delicato e sensibile", "Testardo e caparbio", "Gentile e cordiale", "Pigro e svogliato"],
    correct: 1,
    explanation: "'Ostinato' significa caparbio, pervicace, che non vuole cedere facilmente.",
    category: "Vocabolario"
  },

  // Punteggiatura
  {
    question: "In quale frase la virgola è usata correttamente?",
    options: ["Marco, ha comprato il pane.", "Ho comprato pane, latte, uova e formaggio.", "Ieri, sono andato al cinema.", "Il cane, di Maria è grande."],
    correct: 1,
    explanation: "La virgola separa correttamente gli elementi di un elenco: 'pane, latte, uova e formaggio'.",
    category: "Punteggiatura"
  },
  {
    question: "Quale frase ha il punto e virgola usato correttamente?",
    options: ["Arriva domani; aspettami.", "Mi piace leggere; soprattutto libri di storia.", "Andiamo al cinema; poi a cena.", "Corre velocemente; e salta gli ostacoli."],
    correct: 0,
    explanation: "Il punto e virgola divide proposizioni indipendenti: 'Arriva domani; aspettami.'",
    category: "Punteggiatura"
  },
  {
    question: "Dove va correttamente il punto interrogativo?",
    options: ["Vuoi venire con me.", "Vuoi venire con me?", "Vuoi venire con me?.","Vuoi venire con me ?"],
    correct: 1,
    explanation: "Il punto interrogativo va subito dopo l'ultima parola della domanda, senza spazi.",
    category: "Punteggiatura"
  },

  // Letteratura
  {
    question: "Chi ha scritto 'I Promessi Sposi'?",
    options: ["Dante Alighieri", "Giovanni Boccaccio", "Alessandro Manzoni", "Ugo Foscolo"],
    correct: 2,
    explanation: "Alessandro Manzoni è l'autore del celebre romanzo storico 'I Promessi Sposi' (1840).",
    category: "Letteratura"
  },
  {
    question: "Quale opera ha scritto Dante Alighieri?",
    options: ["Il Decameron", "La Divina Commedia", "I Promessi Sposi", "Le Confessioni"],
    correct: 1,
    explanation: "La Divina Commedia è il capolavoro di Dante Alighieri, capostipite della letteratura italiana moderna.",
    category: "Letteratura"
  },
  {
    question: "Chi è l'autore di 'Pinocchio'?",
    options: ["Carlo Lorenzini (Collodi)", "Giuseppe Garibaldi", "Giosuè Carducci", "Gabriele D'Annunzio"],
    correct: 0,
    explanation: "'Pinocchio' è stato scritto da Carlo Lorenzini, che usava lo pseudonimo Collodi.",
    category: "Letteratura"
  },

  // Figure Retoriche
  {
    question: "Che figura retorica è: 'Sei un fulmine!'?",
    options: ["Similitudine", "Metafora", "Iperbole", "Personificazione"],
    correct: 1,
    explanation: "È una metafora perché paragona direttamente una persona a un fulmine (senza 'come').",
    category: "Figure Retoriche"
  },
  {
    question: "Quale figura è: 'Questo silenzio mi assorda'?",
    options: ["Metafora", "Ossimoro", "Sinestesia", "Antitesi"],
    correct: 2,
    explanation: "'Ossimoro' è una figura che accosta concetti opposti, qui 'silenzio' e 'assorda' (verbo relativo al rumore).",
    category: "Figure Retoriche"
  },
  {
    question: "Che tipo di figura è: 'Giallo come il sole'?",
    options: ["Metafora", "Similitudine", "Iperbolica", "Allitterazione"],
    correct: 1,
    explanation: "La similitudine paragona due elementi usando la particella 'come'.",
    category: "Figure Retoriche"
  },

  // Analisi Logica
  {
    question: "Nella frase 'Luca mangia la mela', 'la mela' è...",
    options: ["Soggetto", "Complemento di Termine", "Complemento Oggetto", "Predicato"],
    correct: 2,
    explanation: "Il complemento oggetto risponde alla domanda 'che cosa?' dopo il verbo.",
    category: "Analisi logica"
  },
  {
    question: "In 'Ho dato il libro a Marco', 'a Marco' è...",
    options: ["Complemento Oggetto", "Complemento di Termine", "Complemento di Causa", "Soggetto"],
    correct: 1,
    explanation: "Il complemento di termine risponde a 'a chi?' e indica il destinatario dell'azione.",
    category: "Analisi logica"
  },
];
