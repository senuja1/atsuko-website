import { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  CheckCircle, 
  ArrowRight, 
  ArrowLeft, 
  RefreshCw, 
  Send, 
  Sparkles, 
  AlertCircle,
  Users,
  Briefcase,
  ShieldCheck,
  Award,
  BookOpen,
  GraduationCap,
  FileText,
  HeartPulse,
  Sprout,
  Utensils,
  Laptop,
  Languages,
  CheckCircle2
} from 'lucide-react';
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

  const getOptionIcon = (id) => {
    switch (id) {
      case '18-24': return <Users size={22} />;
      case '25-28': return <Briefcase size={22} />;
      case '29-35': return <ShieldCheck size={22} />;
      case '36+': return <Award size={22} />;
      case 'ol': return <BookOpen size={22} />;
      case 'al': return <GraduationCap size={22} />;
      case 'diploma': return <FileText size={22} />;
      case 'degree': return <Award size={22} />;
      case 'student': return <GraduationCap size={22} />;
      case 'caregiver': return <HeartPulse size={22} />;
      case 'agriculture': return <Sprout size={22} />;
      case 'food': return <Utensils size={22} />;
      case 'engineer': return <Laptop size={22} />;
      case 'beginner': return <BookOpen size={22} />;
      case 'basic': return <Languages size={22} />;
      case 'n5_ready': return <CheckCircle2 size={22} />;
      case 'n4_plus': return <Sparkles size={22} />;
      default: return <Sparkles size={22} />;
    }
  };

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
        pathway = "SSW සාත්තු සේවා (Kaigo) - වසර 5ක දීර්ඝ කළ හැකි ජපාන සෞඛ්‍ය රැකියා වීසා (SSW 1)";
        jpName = "特定技能1号 - 介護分野 (Kaigo Healthcare)";
        timeline = "මාස 6 - 9";
        earning = "මසකට ¥180,000 - ¥240,000 + අතිකාල දීමනා";
        advice = "අත්සුකෝ ප්‍රධාන මධ්‍යස්ථානයේ (Atsuko Main) පිහිටි ප්‍රායෝගික සාත්තු සේවා / NVQ Level 3 පුහුණුවට සහ දින 50 (මාස 2) පූර්ණකාලීන JFT-Basic පාඨමාලාවට සම්බන්ධ වන්න.";
        visaType = "SSW 1 විශේෂිත කුසලතා (特定技能1号)";
      } else if (goal === 'agriculture') {
        pathway = "SSW බෝග වගාව සහ පශු සම්පත් රැකියා වීසා (Crop Farming & Livestock)";
        jpName = "特定技能1号 - 農業分野（耕種・畜産）";
        timeline = "මාස 6 - 8";
        earning = "මසකට ¥180,000 - ¥220,000 + නිවාස සහනාධාර";
        advice = "අත්සුකෝ හි දින 50 (මාස 2) පූර්ණකාලීන JFT-Basic / JLPT N4 පාඨමාලාව හදාරා බෝග වගාව සහ පශු සම්පත් කුසලතා විභාගය සඳහා ලියාපදිංචි වන්න.";
        visaType = "SSW 1 බෝග වගාව සහ පශු සම්පත් (農業)";
      } else if (goal === 'food') {
        pathway = "SSW ආහාර සේවා සහ නවාතැන් පහසුකම් (Food Service & Accommodation)";
        jpName = "特定技能1号 - 外食業・宿泊業";
        timeline = "මාස 6 - 8";
        earning = "මසකට ¥185,000 - ¥250,000";
        advice = "දින 50 (මාස 2) පූර්ණකාලීන JFT / JLPT N4 පාඨමාලාව හදාරා Prometric ආහාර සේවා සහ නවාතැන් විභාගය සඳහා සූදානම් වන්න.";
        visaType = "SSW 1 ආහාර සහ නවාතැන් (外食・宿泊)";
      } else {
        pathway = "Specified Skilled Worker (SSW 1) හෝ TITP කාර්මික පුහුණු වැඩසටහන";
        jpName = "特定技能1号 / 技能実習プログラム";
        timeline = "මාස 6 - 9";
        earning = "මසකට ¥180,000 - ¥240,000";
        advice = "SLBFE බලපත්‍ර අංක 3293 යටතේ සම්පූර්ණ නීත්‍යානුකූල ගිවිසුම් සහිතව ඔබට අත්සුකෝ මඟපෙන්වයි.";
        visaType = "SSW 1 / කාර්මික පුහුණු වීසා";
      }
    } else if (lang === 'jp') {
      if (goal === 'student') {
        pathway = "日本留学（留学ビザ） - 日本語学校から大学・専門学校進学コース";
        jpName = "留学ビザ - 日本語学校・大学進学コース";
        timeline = "6〜8ヶ月（4月・10月期生受付中）";
        earning = "月収 130,000〜160,000 円（週28時間合法アルバイト）";
        advice = "篤子学校の1ヶ月全日制JLPT/NAT N5コースを受講し、提携校へのCOE（在留資格認定証明書）申請を進めます。";
        visaType = "留学ビザ (Student Visa)";
      } else if (goal === 'caregiver') {
        pathway = "特定技能1号 (SSW 1)「介護」 - 5年間直接雇用（更新・永住への道）";
        jpName = "特定技能1号 - 介護分野 (Kaigo Healthcare)";
        timeline = "6〜9ヶ月";
        earning = "月給 180,000〜240,000 円＋残業・夜勤手当";
        advice = "アツコ本校（Atsuko Main）の介護実技・NVQ Level 3施設と50日間JFT対策で技術を習得し、愛知県小牧市の日本法人を通じて直接マッチング。";
        visaType = "特定技能1号 (SSW 1・介護)";
      } else if (goal === 'agriculture') {
        pathway = "特定技能1号 (SSW 1)「耕種農業・畜産分野」";
        jpName = "特定技能1号 - 農業分野（耕種・畜産）";
        timeline = "6〜8ヶ月";
        earning = "月給 180,000〜220,000 円＋住居補助";
        advice = "50日間（2ヶ月）全日制コースでJFT-Basic / JLPT N4の合格を目指し、耕種・畜産技能評価試験の対策を行います。";
        visaType = "特定技能1号 (SSW 1・農業)";
      } else {
        pathway = "特定技能1号 (SSW 1)「外食業・宿泊業・建設分野」";
        jpName = "特定技能1号 / 技能実習プログラム";
        timeline = "6〜8ヶ月";
        earning = "月給 185,000〜250,000 円";
        advice = "スリランカ海外雇用局認可ライセンス3293および愛知県小牧市の登録支援機関が万全のサポートを提供します。";
        visaType = "特定技能1号 (SSW 1)";
      }
    } else {
      // English default
      if (goal === 'student') {
        pathway = "Student Visa (Ryugaku) - Language School to University / Senmon Gakko";
        jpName = "留学ビザ - 日本語学校・大学進学コース";
        timeline = "6 - 8 Months (Next April / October Intakes)";
        earning = "JPY 130,000 - 160,000 / month (28 hrs/week legal work)";
        advice = "Enroll in Atsuko International's 1-Month Full-Time JLPT N5 / NAT N5 Course (9 AM – 5 PM, 5 days/week) to secure your COE with our partner Japanese schools.";
        visaType = "Student Visa (留学)";
      } else if (goal === 'caregiver') {
        pathway = "SSW Caregiver (Kaigo) - 5-Year Direct Employment (SSW 1) in Japan";
        jpName = "特定技能1号 - 介護分野 (Kaigo Healthcare)";
        timeline = "6 - 9 Months";
        earning = "JPY 180,000 - 240,000 / month + Overtime";
        advice = "Join the Atsuko International Caregiver Practical Simulation & NVQ Level 3 Course at Atsuko Main alongside our 50-Day (2-Month) full-time JFT-Basic / JLPT N4 course.";
        visaType = "SSW 1 (特定技能1号)";
      } else if (goal === 'agriculture') {
        pathway = "SSW Crop Farming & Livestock in Japan (SSW 1)";
        jpName = "特定技能1号 - 農業分野（耕種・畜産）";
        timeline = "6 - 8 Months";
        earning = "JPY 180,000 - 220,000 / month + Housing Subsidy";
        advice = "Complete our 50-Day (2-Month) full-time JFT-Basic / JLPT N4 course while preparing for the Prometric Crop Farming & Livestock Skills Evaluation exam.";
        visaType = "SSW 1 Crop Farming & Livestock (農業)";
      } else if (goal === 'food') {
        pathway = "SSW Food Service & Accommodation (SSW 1)";
        jpName = "特定技能1号 - 外食業・宿泊業 (Food Service & Accommodation)";
        timeline = "6 - 8 Months";
        earning = "JPY 185,000 - 250,000 / month";
        advice = "Fast-track your Japanese in our 50-Day (2-Month) full-time JFT / N4 course and take the Prometric Food Service & Accommodation Skills Exam with Atsuko Main.";
        visaType = "SSW 1 Food & Accommodation (外食・宿泊)";
      } else {
        pathway = "Specified Skilled Worker (SSW 1) or TITP Technical Internship";
        jpName = "特定技能1号 / 技能実習プログラム";
        timeline = "6 - 9 Months";
        earning = "JPY 180,000 - 240,000 / month";
        advice = "Atsuko International will assist you step-by-step from zero Japanese to complete visa issuance under SLBFE License 3293.";
        visaType = "SSW 1 / Technical Intern";
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
                    <span className="option-icon">{getOptionIcon(opt.id)}</span>
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
                    <span className="option-icon">{getOptionIcon(opt.id)}</span>
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
                    <span className="option-icon">{getOptionIcon(opt.id)}</span>
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
                    <span className="option-icon">{getOptionIcon(opt.id)}</span>
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
                <span className="result-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={15} />
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
                  rel="noopener noreferrer"
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
