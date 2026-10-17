import { useState } from 'react';
import confetti from 'canvas-confetti';
import { CheckCircle, ArrowRight, ArrowLeft, RefreshCw, Send, Sparkles, AlertCircle } from 'lucide-react';
import { siteTranslations } from '../data/translations';

export default function EligibilityChecker({ lang, onOpenModal }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    age: '',
    qualification: '',
    goal: '',
    japaneseLevel: ''
  });
  const [result, setResult] = useState(null);

  const t = siteTranslations[lang]?.calculator || siteTranslations.en.calculator;
  const stepsTotal = 4;

  const handleSelect = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step < stepsTotal) {
      setStep(step + 1);
    } else {
      calculateResult();
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const calculateResult = () => {
    let pathway = "";
    let jpName = "";
    let timeline = "";
    let earning = "";
    let advice = "";
    let visaType = "";

    const { goal, qualification } = formData;

    if (lang === 'si') {
      if (goal === 'student') {
        pathway = "ශිෂ්‍ය වීසා (Ryugaku) - ජපන් භාෂා පාසල සහ විශ්වවිද්‍යාල උසස් අධ්‍යාපනය";
        jpName = "留学ビザ - 日本語学校・大学進学コース";
        timeline = "මාස 6 - 8 (මීළඟ අප්‍රේල් / ඔක්තෝබර් කණ්ඩායම්)";
        earning = "මසකට රු. 320,000 - 450,000 (පැය 28 නීත්‍යානුකූල රැකියාව)";
        advice = "ජපානයේ ටෝකියෝ හෝ ඔසාකා පිළිගත් භාෂා පාසලකට ඇතුළත් වීමට අත්සුකෝ හි JLPT N5 කණ්ඩායමට වහාම ලියාපදිංචි වන්න.";
        visaType = "ශිෂ්‍ය වීසා (Student Visa)";
      } else if (goal === 'caregiver') {
        pathway = "SSW සාත්තු සේවා (Kaigo) - වසර 5ක දීර්ඝ කළ හැකි ජපාන සෞඛ්‍ය රැකියා වීසා";
        jpName = "特定技能1号 - 介護分野 (Kaigo Healthcare)";
        timeline = "මාස 6 - 9";
        earning = "මසකට රු. 480,000 - 620,000 (මූලික වැටුප් + අතිකාල දීමනා)";
        advice = "අත්සුකෝ කඩවත ප්‍රධාන මධ්‍යස්ථානයේ පිහිටි ප්‍රායෝගික සාත්තු සේවා විද්‍යාගාරයට සම්බන්ධ වී JFT-Basic විභාගයට මුහුණ දෙන්න.";
        visaType = "SSW විශේෂිත කුසලතා (Tokutei Ginou)";
      } else if (goal === 'driver') {
        pathway = "SSW ලොජිස්ටික්ස් සහ බර වාහන රියදුරු රැකියා වීසා";
        jpName = "特定技能 - 自動車運送業 (トラック・バス)";
        timeline = "මාස 7 - 10";
        earning = "මසකට රු. 520,000 - 700,000 + ප්‍රසාද දීමනා";
        advice = "ඔබගේ රියදුරු බලපත්‍රය ජපානයේදී පරිවර්තනය කිරීමට මඟපෙන්වන අතරතුර JFT / N4 භාෂා පන්තියට එක්වන්න.";
        visaType = "SSW ප්‍රවාහන (自動車運送)";
      } else if (goal === 'food') {
        pathway = "SSW හෝටල් සහ ආහාර සැපයුම් සේවා (Food Service)";
        jpName = "特定技能1号 - 外食業 (Food Service Industry)";
        timeline = "මාස 6 - 8";
        earning = "මසකට රු. 420,000 - 550,000";
        advice = "JLPT N4 මට්ටම හදාරා කොළඹ Prometric මධ්‍යස්ථානයේ ආහාර සේවා විභාගය සඳහා සූදානම් වන්න.";
        visaType = "SSW ආහාර සේවා (外食業)";
      } else {
        pathway = "Specified Skilled Worker (SSW) හෝ TITP කාර්මික පුහුණු වැඩසටහන";
        jpName = "特定技能 / 技能実習プログラム";
        timeline = "මාස 6 - 9";
        earning = "මසකට රු. 400,000 - 520,000";
        advice = "SLBFE බලපත්‍ර අංක 3293 යටතේ සම්පූර්ණ නීත්‍යානුකූල ගිවිසුම් සහිතව ඔබට අත්සුකෝ මඟපෙන්වයි.";
        visaType = "SSW / කාර්මික පුහුණු වීසා";
      }
    } else if (lang === 'jp') {
      if (goal === 'student') {
        pathway = "日本留学（留学ビザ） - 日本語学校から大学・専門学校進学コース";
        jpName = "留学ビザ - 日本語学校・大学進学コース";
        timeline = "6〜8ヶ月（4月・10月期生受付中）";
        earning = "月収 130,000〜160,000 円（週28時間合法アルバイト）";
        advice = "篤子学校のJLPT N5集中コースを受講し、提携校へのCOE（在留資格認定証明書）申請を進めます。";
        visaType = "留学ビザ (Student Visa)";
      } else if (goal === 'caregiver') {
        pathway = "特定技能1号「介護」 - 最長5年（更新可・永住への道）";
        jpName = "特定技能1号 - 介護分野 (Kaigo Healthcare)";
        timeline = "6〜9ヶ月";
        earning = "月収 210,000〜270,000 円（基本給＋夜勤・資格手当）";
        advice = "カダワタ本社校の介護実技シミュレーション実習室で技術を習得し、仙台の日本法人を通じて直接マッチング。";
        visaType = "特定技能1号（介護）";
      } else if (goal === 'driver') {
        pathway = "特定技能「自動車運送業（トラック・バス）」";
        jpName = "特定技能 - 自動車運送業 (トラック・バス)";
        timeline = "7〜10ヶ月";
        earning = "月収 230,000〜300,000 円＋各種手当";
        advice = "スリランカの運転免許を日本の免許へ切り替える支援を行いつつ、JFT-Basic合格を目指します。";
        visaType = "特定技能（自動車運送）";
      } else {
        pathway = "特定技能1号「外食・農業・製造分野」";
        jpName = "特定技能1号 / 技能実習プログラム";
        timeline = "6〜8ヶ月";
        earning = "月収 190,000〜250,000 円";
        advice = "スリランカ海外雇用局認可ライセンス3293および仙台の登録支援機関が万全のサポートを提供します。";
        visaType = "特定技能 / 技人国";
      }
    } else {
      // English default
      if (goal === 'student') {
        pathway = "Student Visa (Ryugaku) - Language School to University / Senmon Gakko";
        jpName = "留学ビザ - 日本語学校・大学進学コース";
        timeline = "6 - 8 Months (Next April / October Intakes)";
        earning = "JPY 130,000 - 160,000 / month (28 hrs/week legal work)";
        advice = "Enroll in Atsuko International's JLPT N5 Intensive Batch to secure your Certificate of Eligibility (COE) with our partner Tokyo / Osaka schools.";
        visaType = "Student Visa (留学)";
      } else if (goal === 'caregiver') {
        pathway = "SSW Caregiver (Kaigo) - 5-Year Renewable Japanese Healthcare Employment";
        jpName = "特定技能1号 - 介護分野 (Kaigo Healthcare)";
        timeline = "6 - 9 Months";
        earning = "JPY 210,000 - 270,000 / month (Full-time + Overtime + Shift allowance)";
        advice = "Join the Atsuko International Caregiver Practical Simulation Training Center in Kadawatha with simultaneous JFT-Basic language training.";
        visaType = "SSW (特定技能1号)";
      } else if (goal === 'driver') {
        pathway = "SSW Logistics & Commercial Vehicle Driving in Japan";
        jpName = "特定技能 - 自動車運送業 (トラック・バス)";
        timeline = "7 - 10 Months";
        earning = "JPY 230,000 - 300,000 / month + Bonus";
        advice = "Prepare for JFT-Basic / JLPT N4 while our team coordinates your Sri Lankan commercial license conversion for Japan.";
        visaType = "SSW Transport (自動車運送)";
      } else if (goal === 'food') {
        pathway = "SSW Food Service & Hospitality Operations";
        jpName = "特定技能1号 - 外食業 (Food Service Industry)";
        timeline = "6 - 8 Months";
        earning = "JPY 190,000 - 240,000 / month";
        advice = "Fast-track your Japanese to N4 level and take the Prometric Food Service Skills Exam with our Kadawatha CBT lab.";
        visaType = "SSW Food Service (外食業)";
      } else {
        pathway = "Specified Skilled Worker (SSW) or TITP Technical Internship";
        jpName = "特定技能 / 技能実習プログラム";
        timeline = "6 - 9 Months";
        earning = "JPY 180,000 - 230,000 / month";
        advice = "Atsuko International will assist you step-by-step from zero Japanese to complete visa issuance under SLBFE License 3293.";
        visaType = "SSW / Technical Intern";
      }
    }

    setResult({ pathway, jpName, timeline, earning, advice, visaType });
    setStep(5);

    try {
      confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
    } catch (e) {
      // safe fallback
    }
  };

  const resetForm = () => {
    setFormData({ age: '', qualification: '', goal: '', japaneseLevel: '' });
    setStep(1);
    setResult(null);
  };

  const getWhatsAppMessage = () => {
    if (!result) return "";
    const msg = `Hello Atsuko International! I checked my eligibility on your website:
• Age Group: ${formData.age}
• Qualification: ${formData.qualification}
• Goal in Japan: ${formData.goal}
• Japanese Level: ${formData.japaneseLevel}
• Recommended Pathway: ${result.pathway} (${result.visaType})

Please provide me with upcoming batch details and consultation at your nearest center!`;
    return encodeURIComponent(msg);
  };

  return (
    <section id="eligibility" className="section section-dark" style={{ position: 'relative' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-badge badge-dark-red">
            <Sparkles size={14} />
            {t.badge}
          </span>
          <h2 className="section-title">
            {t.title} <span className="text-gradient-gold">{t.titleHighlight}</span>
          </h2>
          <p className="section-subtitle">
            {t.subtitle}
          </p>
        </div>

        <div className="eligibility-container">
          {/* Progress Indicators */}
          {step <= 4 && (
            <div className="eligibility-progress-bar">
              <div className="progress-line-bg"></div>
              <div 
                className="progress-line-fill" 
                style={{ width: `${((step - 1) / (stepsTotal - 1)) * 100}%` }}
              ></div>

              {[1, 2, 3, 4].map((s) => (
                <div 
                  key={s} 
                  className={`step-indicator ${step === s ? 'active' : ''} ${step > s ? 'done' : ''}`}
                >
                  {step > s ? <CheckCircle size={18} /> : s}
                </div>
              ))}
            </div>
          )}

          {/* STEP 1: Age */}
          {step === 1 && (
            <div className="step-content-box">
              <h3 className="step-question">{t.step1Title}</h3>
              <p className="step-hint">{t.step1Hint}</p>

              <div className="options-grid">
                {t.ageOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    className={`option-card ${formData.age === opt.id ? 'selected' : ''}`}
                    onClick={() => handleSelect('age', opt.id)}
                  >
                    <span className="option-icon">{opt.icon}</span>
                    <span className="option-label">{opt.label}</span>
                    <span className="option-desc">{opt.desc}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: Qualification */}
          {step === 2 && (
            <div className="step-content-box">
              <h3 className="step-question">{t.step2Title}</h3>
              <p className="step-hint">{t.step2Hint}</p>

              <div className="options-grid">
                {t.qualOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    className={`option-card ${formData.qualification === opt.id ? 'selected' : ''}`}
                    onClick={() => handleSelect('qualification', opt.id)}
                  >
                    <span className="option-icon">{opt.icon}</span>
                    <span className="option-label">{opt.label}</span>
                    <span className="option-desc">{opt.desc}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: Target Goal */}
          {step === 3 && (
            <div className="step-content-box">
              <h3 className="step-question">{t.step3Title}</h3>
              <p className="step-hint">{t.step3Hint}</p>

              <div className="options-grid">
                {t.goalOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    className={`option-card ${formData.goal === opt.id ? 'selected' : ''}`}
                    onClick={() => handleSelect('goal', opt.id)}
                  >
                    <span className="option-icon">{opt.icon}</span>
                    <span className="option-label">{opt.label}</span>
                    <span className="option-desc">{opt.desc}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 4: Japanese Level */}
          {step === 4 && (
            <div className="step-content-box">
              <h3 className="step-question">{t.step4Title}</h3>
              <p className="step-hint">{t.step4Hint}</p>

              <div className="options-grid">
                {t.levelOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    className={`option-card ${formData.japaneseLevel === opt.id ? 'selected' : ''}`}
                    onClick={() => handleSelect('japaneseLevel', opt.id)}
                  >
                    <span className="option-icon">{opt.icon}</span>
                    <span className="option-label">{opt.label}</span>
                    <span className="option-desc">{opt.desc}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 5: Results */}
          {step === 5 && result && (
            <div className="result-card">
              <div className="result-header">
                <span className="result-badge">
                  {t.resultBadge}
                </span>
                <span style={{ color: '#cbd5e1', fontSize: '0.85rem' }}>
                  {t.resultLicense}
                </span>
              </div>

              <div style={{ marginBottom: '0.5rem', color: '#f87171', fontFamily: 'var(--font-jp)', fontWeight: 700 }}>
                {result.jpName}
              </div>
              <h3 className="result-title">{result.pathway}</h3>

              <div className="result-metrics">
                <div className="metric-box">
                  <div className="metric-label">{t.metricVisa}</div>
                  <div className="metric-val">{result.visaType}</div>
                </div>
                <div className="metric-box">
                  <div className="metric-label">{t.metricTimeline}</div>
                  <div className="metric-val" style={{ color: '#fbbf24' }}>{result.timeline}</div>
                </div>
                <div className="metric-box">
                  <div className="metric-label">{t.metricEarnings}</div>
                  <div className="metric-val" style={{ color: '#34d399' }}>{result.earning}</div>
                </div>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.25rem', borderRadius: 'var(--radius-md)', marginBottom: '2rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ fontWeight: 700, color: '#ffffff', marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <AlertCircle size={16} style={{ color: '#fbbf24' }} />
                  {t.actionPlanTitle}
                </div>
                <p style={{ color: '#cbd5e1', fontSize: '0.925rem' }}>{result.advice}</p>
              </div>

              <div className="result-action-buttons" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a
                  href={`https://wa.me/94778643352?text=${getWhatsAppMessage()}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-whatsapp"
                  style={{ padding: '0.85rem 1.75rem', fontSize: '0.95rem' }}
                >
                  <Send size={16} />
                  {t.btnSendWhatsApp}
                </a>

                <button
                  onClick={() => onOpenModal('Custom Pathway Booking')}
                  className="btn btn-gold"
                  style={{ padding: '0.85rem 1.75rem', fontSize: '0.95rem' }}
                >
                  {t.btnBookAppointment}
                </button>

                <button
                  onClick={resetForm}
                  className="btn btn-secondary"
                  style={{ color: '#cbd5e1', background: 'transparent' }}
                >
                  <RefreshCw size={14} />
                  {t.btnRestart}
                </button>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          {step <= 4 && (
            <div className="wizard-nav">
              <button
                type="button"
                onClick={handleBack}
                disabled={step === 1}
                className="btn btn-secondary"
                style={{ opacity: step === 1 ? 0.4 : 1, cursor: step === 1 ? 'not-allowed' : 'pointer', color: '#ffffff', background: 'rgba(255,255,255,0.08)' }}
              >
                <ArrowLeft size={16} />
                {t.btnBack}
              </button>

              <button
                type="button"
                onClick={handleNext}
                disabled={
                  (step === 1 && !formData.age) ||
                  (step === 2 && !formData.qualification) ||
                  (step === 3 && !formData.goal) ||
                  (step === 4 && !formData.japaneseLevel)
                }
                className="btn btn-primary"
                style={{
                  padding: '0.75rem 1.75rem',
                  opacity: (
                    (step === 1 && !formData.age) ||
                    (step === 2 && !formData.qualification) ||
                    (step === 3 && !formData.goal) ||
                    (step === 4 && !formData.japaneseLevel)
                  ) ? 0.5 : 1
                }}
              >
                {step === stepsTotal ? t.btnCalculate : t.btnNext}
                <ArrowRight size={16} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
