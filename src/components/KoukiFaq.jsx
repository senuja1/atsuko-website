import { useState } from 'react';

const faqs = [
  {
    q: 'Which is the best Japanese language school in Sri Lanka for studying in Japan?',
    a: 'Kouki International is a dedicated Japan Student Visa and Japanese language education institute in Sri Lanka. Since 2020 we have combined JLPT and NAT preparation, experienced teachers and complete student-visa guidance, with branches in Yakkala and Polonnaruwa and a residential campus in Alawwa.',
  },
  {
    q: 'Are lessons taught by native Japanese teachers?',
    a: 'Yes. Students learn from native Japanese teachers based in Japan (online) alongside experienced local instructors, building natural pronunciation and the communication skills needed for school and daily life in Japan.',
  },
  {
    q: 'Which Japanese exams does Kouki International prepare student-visa applicants for?',
    a: 'We prepare students for JLPT N5 and N4 and the NAT-TEST, building the Japanese foundation commonly requested by language schools in Japan.',
  },
  {
    q: 'Do you help with the Japan student visa?',
    a: 'Yes. We provide end-to-end student-visa guidance: school selection, application documents, the Certificate of Eligibility (COE) and embassy documentation, so you only have to focus on your studies.',
  },
  {
    q: 'Where are Kouki International’s branches located?',
    a: 'We have branches in Yakkala (head office, opposite the Ayurweda Hospital) and Polonnaruwa (Hospital Junction), plus a residential campus in Alawwa. We are open Monday to Saturday, 9:00 AM - 6:00 PM.',
  },
  {
    q: 'How do I enroll and how much do classes cost?',
    a: 'Call or message us on WhatsApp at (+94) 76 903 5117 or (+94) 74 227 7882, email koukiinternational@gmail.com, or walk into any branch for a free consultation. Our team will explain the course options, schedule and fees for your goal.',
  },
  {
    q: 'How can I go to Japan to study from Sri Lanka?',
    a: 'The proven path is: (1) learn Japanese to JLPT N5-N4 level, (2) pass a recognised exam such as JLPT or NAT, (3) get accepted by a Japanese language school or institution, and (4) obtain the Certificate of Eligibility (COE) and student visa. Kouki International guides you through all four steps — 170+ of our students are already in Japan, with an 88% visa success rate.',
  },
  {
    q: 'How much does it cost to study in Japan from Sri Lanka?',
    a: 'Local Japanese courses at Kouki start from Rs. 55,000 (Full Time N5, 2 months). The total cost of going to Japan depends on the Japanese school, city and program you choose — at your free consultation we give you a complete, honest cost breakdown with no hidden charges before you commit to anything.',
  },
  {
    q: 'Can I work part-time while studying in Japan?',
    a: 'Yes. Japan allows international students on a student visa to work up to 28 hours per week part-time. Many of our students support their living costs this way while studying — and we prepare you with the workplace Japanese and manners needed to find a good part-time job.',
  },
  {
    q: 'Does Kouki International teach English courses too?',
    a: 'Yes. Alongside Japanese, we run a 25-day intensive Residential English Course at our Alawwa campus (Rs. 95,000 with meals and accommodation) covering Spoken English, Public Speaking and Personality Development, with dual certification from Kouki International and Sussex English Academy.',
  },
];

export default function KoukiFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="section-header">
        <p className="section-tag">FAQ · よくある質問</p>
        <h2 className="section-title">Frequently asked questions</h2>
        <p className="section-body">
          Everything students and parents in Sri Lanka ask us before starting the journey to Japan.
        </p>
      </div>

      <div className="faq-list">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={i} className={`faq-item${isOpen ? ' open' : ''}`}>
              <button
                className="faq-question"
                onClick={() => toggle(i)}
                aria-expanded={isOpen}
              >
                <span>{faq.q}</span>
                <span className="faq-icon">{isOpen ? '−' : '+'}</span>
              </button>
              {isOpen && (
                <div className="faq-answer-inner">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
