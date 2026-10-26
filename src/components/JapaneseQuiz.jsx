import { useState } from 'react';
import { HelpCircle, CheckCircle, XCircle, ArrowRight, RotateCcw, Award } from 'lucide-react';
import { quizQuestions } from '../data/websiteData';
import { siteTranslations } from '../data/translations';

export default function JapaneseQuiz({ lang, onOpenModal }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const t = siteTranslations[lang]?.quiz || siteTranslations.en.quiz;
  const question = quizQuestions[currentIdx];

  const handleSelect = (idx) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);
    if (idx === question.correct) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 < quizQuestions.length) {
      setCurrentIdx(currentIdx + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setIsFinished(false);
  };

  return (
    <section className="section section-dark" style={{ background: 'linear-gradient(180deg, #091226 0%, #0d1a38 100%)' }}>
      <div className="container" style={{ maxWidth: '840px' }}>
        <div className="section-header">
          <span className="section-badge badge-dark-red">
            <HelpCircle size={14} />
            {t.badge}
          </span>
          <h2 className="section-title">
            {t.title} <span className="text-gradient-gold">{t.titleHighlight}</span>
          </h2>
          <p className="section-subtitle">
            {t.subtitle}
          </p>
        </div>

        <div className="quiz-wrapper">
          {!isFinished ? (
            <div>
              <div className="quiz-header">
                <div>
                  <span style={{ fontSize: '0.85rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {t.questionPrefix} {currentIdx + 1} {t.of} {quizQuestions.length}
                  </span>
                  <div style={{ height: '4px', width: '120px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', marginTop: '6px' }}>
                    <div style={{
                      height: '100%',
                      width: `${((currentIdx + 1) / quizQuestions.length) * 100}%`,
                      background: 'linear-gradient(90deg, #dc2626, #fbbf24)',
                      borderRadius: '4px'
                    }}></div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.08)', padding: '0.35rem 0.85rem', borderRadius: 'var(--radius-full)', fontSize: '0.85rem' }}>
                  <Award size={16} style={{ color: '#fbbf24' }} />
                  <span>{t.score} {score}</span>
                </div>
              </div>

              <div className="quiz-question-box">
                <div className="quiz-kanji-prompt">{question.kanji}</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff' }}>
                  {question.question}
                </h3>
              </div>

              <div className="quiz-options">
                {question.options.map((opt, i) => {
                  let statusClass = "";
                  if (isAnswered) {
                    if (i === question.correct) statusClass = "correct";
                    else if (i === selectedOption) statusClass = "wrong";
                  }

                  return (
                    <button
                      key={i}
                      className={`quiz-option-btn ${statusClass}`}
                      onClick={() => handleSelect(i)}
                      disabled={isAnswered}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span>{opt}</span>
                        {isAnswered && i === question.correct && <CheckCircle size={18} style={{ color: '#10b981' }} />}
                        {isAnswered && i === selectedOption && i !== question.correct && <XCircle size={18} style={{ color: '#ef4444' }} />}
                      </div>
                    </button>
                  );
                })}
              </div>

              {isAnswered && (
                <div style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1rem 1.25rem',
                  marginBottom: '1.5rem'
                }}>
                  <div style={{ fontWeight: 700, color: selectedOption === question.correct ? '#34d399' : '#f87171', marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    {selectedOption === question.correct ? <CheckCircle size={16} /> : <XCircle size={16} />}
                    <span>{selectedOption === question.correct ? t.correctAnswer : t.wrongAnswer}</span>
                  </div>
                  <p style={{ color: '#cbd5e1', fontSize: '0.875rem' }}>{question.explanation}</p>
                </div>
              )}

              {isAnswered && (
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <button onClick={handleNext} className="btn btn-primary" style={{ padding: '0.65rem 1.5rem' }}>
                    {currentIdx + 1 === quizQuestions.length ? t.btnResults : t.btnNext}
                    <ArrowRight size={16} />
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
              <div style={{
                width: '76px',
                height: '76px',
                borderRadius: '50%',
                background: 'rgba(251, 191, 36, 0.15)',
                border: '2px solid #fbbf24',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                color: '#fbbf24'
              }}>
                <Award size={40} />
              </div>

              <h3 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }}>
                {t.completedTitle}
              </h3>
              <p style={{ fontSize: '1.2rem', color: '#fbbf24', fontWeight: 700, marginBottom: '1rem' }}>
                {t.yourScore} {score} {t.outOf} {quizQuestions.length} ({Math.round((score / quizQuestions.length) * 100)}%)
              </p>

              <p style={{ color: '#cbd5e1', maxWidth: '480px', margin: '0 auto 2rem', fontSize: '0.95rem' }}>
                {score >= 4 ? t.highScoreFeedback : t.lowScoreFeedback}
              </p>

              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button
                  onClick={() => onOpenModal('JLPT N5 Batch Registration')}
                  className="btn btn-primary"
                  style={{ padding: '0.75rem 1.75rem' }}
                >
                  {t.btnJoinBatch}
                </button>

                <button
                  onClick={handleRestart}
                  className="btn btn-secondary"
                  style={{ color: '#ffffff', background: 'rgba(255,255,255,0.08)' }}
                >
                  <RotateCcw size={16} />
                  {t.btnTryAgain}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
