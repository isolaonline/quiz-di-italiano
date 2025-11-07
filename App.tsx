import React, { useState, useEffect } from 'react';
import { allQuestions, categoryIcons } from './constants';
import type { Question } from './types';

// SVG Icons inline
const CheckmarkIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const XIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const ProgressBarIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const RefreshIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
);

const ShieldIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const App: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [gameQuestions, setGameQuestions] = useState<Question[]>([]);
  const [streak, setStreak] = useState(0);
  const [lifelineUsed, setLifelineUsed] = useState(false);
  const [hiddenOptions, setHiddenOptions] = useState<number[]>([]);

  useEffect(() => {
    startNewGame();
  }, []);

  const startNewGame = () => {
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    setGameQuestions(shuffled.slice(0, 20));
    setCurrentQuestion(0);
    setScore(0);
    setStreak(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setGameFinished(false);
    setLifelineUsed(false);
    setHiddenOptions([]);
  };

  const handleAnswerClick = (index: number) => {
    if (showResult) return;
    
    setSelectedAnswer(index);
    const isCorrect = index === gameQuestions[currentQuestion].correct;
    
    if (isCorrect) {
      setScore(score + 1);
      setStreak(streak + 1);
    } else {
      setStreak(0);
    }
    
    setShowResult(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 >= gameQuestions.length) {
      setGameFinished(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
      setHiddenOptions([]);
    }
  };

  const handleLifeline = () => {
    if (lifelineUsed) return;
    
    const correct = gameQuestions[currentQuestion].correct;
    const options = [0, 1, 2, 3];
    const wrong = options.filter(i => i !== correct && i !== selectedAnswer);
    const toHide = wrong.slice(0, 2);
    
    setHiddenOptions(toHide);
    setLifelineUsed(true);
  };

  if (gameQuestions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block p-3 bg-slate-800 rounded-lg mb-4">
            <ProgressBarIcon className="text-blue-400" />
          </div>
          <p className="text-slate-400">Caricamento...</p>
        </div>
      </div>
    );
  }

  const question = gameQuestions[currentQuestion];
  const percentage = Math.round((score / gameQuestions.length) * 100);
  const getGrade = () => {
    if (percentage >= 90) return { text: 'Eccellente', color: 'text-emerald-500' };
    if (percentage >= 75) return { text: 'Ottimo', color: 'text-blue-400' };
    if (percentage >= 60) return { text: 'Buono', color: 'text-slate-400' };
    return { text: 'Continua a praticare', color: 'text-rose-500' };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-950/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-light tracking-wide text-slate-100">Quiz di Italiano</h1>
              <p className="text-xs text-slate-500 mt-1">Sfida Grammaticale</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-light text-blue-400">{score}</div>
              <div className="text-xs text-slate-500">Punti</div>
            </div>
          </div>
        </div>
      </header>

      {gameFinished ? (
        // Results Screen
        <main className="max-w-2xl mx-auto px-4 py-12">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-800 rounded-lg">
                <ShieldIcon className="text-slate-400" />
              </div>
              <h2 className="text-3xl font-light text-slate-100">Quiz Completato</h2>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 space-y-6">
              <div className="text-center space-y-2">
                <div className="text-5xl font-light text-blue-400">{percentage}%</div>
                <p className={`text-lg font-light ${getGrade().color}`}>{getGrade().text}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-slate-900 rounded p-4 text-center">
                  <div className="text-emerald-500 text-xl font-light">{score}</div>
                  <div className="text-slate-400 text-xs mt-1">Risposte corrette</div>
                </div>
                <div className="bg-slate-900 rounded p-4 text-center">
                  <div className="text-rose-500 text-xl font-light">{gameQuestions.length - score}</div>
                  <div className="text-slate-400 text-xs mt-1">Risposte errate</div>
                </div>
              </div>

              <div className="bg-slate-900 rounded p-4 text-center">
                <div className="text-slate-200 text-sm">Miglior Streak</div>
                <div className="text-blue-400 text-2xl font-light mt-2">{streak}</div>
              </div>
            </div>

            <button
              onClick={startNewGame}
              className="w-full bg-blue-600 hover:bg-blue-700 text-slate-50 py-3 px-6 rounded transition-colors duration-200 flex items-center justify-center gap-2 font-light tracking-wide"
            >
              <RefreshIcon />
              Nuova Sfida
            </button>
          </div>
        </main>
      ) : (
        // Question Screen
        <main className="max-w-2xl mx-auto px-4 py-8">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-slate-400">Domanda {currentQuestion + 1} di {gameQuestions.length}</span>
              <span className="text-sm text-slate-400">Streak: <span className="text-blue-400">{streak}</span></span>
            </div>
            <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-600 transition-all duration-500"
                style={{ width: `${((currentQuestion + 1) / gameQuestions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question */}
          <div className="mb-8">
            <div className="text-slate-500 text-sm mb-2">{question.category}</div>
            <h2 className="text-2xl font-light text-slate-100 leading-relaxed">{question.question}</h2>
          </div>

          {/* Answers */}
          <div className="space-y-3 mb-8">
            {question.options.map((option, index) => {
              const isHidden = hiddenOptions.includes(index);
              const isSelected = selectedAnswer === index;
              const isCorrect = index === question.correct;
              const showCorrect = showResult && isCorrect;
              const showWrong = showResult && isSelected && !isCorrect;

              if (isHidden) return null;

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(index)}
                  disabled={showResult}
                  className={`w-full text-left p-4 rounded border transition-all duration-200 ${
                    showCorrect
                      ? 'border-emerald-600 bg-emerald-900/20 text-emerald-300'
                      : showWrong
                      ? 'border-rose-600 bg-rose-900/20 text-rose-300'
                      : isSelected
                      ? 'border-blue-600 bg-blue-900/20 text-blue-300'
                      : 'border-slate-700 bg-slate-800/50 text-slate-300 hover:border-slate-600'
                  } disabled:cursor-not-allowed font-light`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded border border-current"></div>
                    <span>{option}</span>
                    {showCorrect && <CheckmarkIcon className="ml-auto" />}
                    {showWrong && <XIcon className="ml-auto" />}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Explanation */}
          {showResult && (
            <div
              className={`p-4 rounded mb-8 border ${
                selectedAnswer === question.correct
                  ? 'border-emerald-700 bg-emerald-900/20'
                  : 'border-rose-700 bg-rose-900/20'
              } animate-in fade-in duration-300`}
            >
              <p className="text-sm text-slate-300 leading-relaxed">{question.explanation}</p>
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-3">
            {!showResult ? (
              <button
                onClick={handleLifeline}
                disabled={lifelineUsed}
                className="flex-1 border border-slate-700 text-slate-400 py-3 px-4 rounded hover:border-slate-600 hover:text-slate-300 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-light text-sm"
              >
                50:50 {lifelineUsed && '(usato)'}
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-slate-50 py-3 px-4 rounded transition-colors duration-200 font-light tracking-wide"
              >
                {currentQuestion + 1 === gameQuestions.length ? 'Visualizza Risultati' : 'Prossima'}
              </button>
            )}
          </div>
        </main>
      )}
    </div>
  );
};

export default App;
