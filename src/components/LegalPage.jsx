import { useState, useEffect } from 'react';
import {
  ShieldCheck,
  Scale,
  Lock,
  FileText,
  Globe2,
  Building2,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  ArrowRight
} from 'lucide-react';
import { officialContacts } from '../data/websiteData';

const LEGAL_CONTENT = {
  en: {
    privacy: {
      badge: 'International Data Protection Standard • PDPA & APPI Compliant',
      title: 'Official Privacy',
      highlight: 'Policy',
      subtitle:
        'How Atsuko International (PVT) LTD (Sri Lanka) and 株式会社 Atsuko International (Japan) collect, safeguard, process, and transfer personal data in accordance with the Sri Lanka Personal Data Protection Act (PDPA) No. 9 of 2022, Japan’s Act on the Protection of Personal Information (APPI), and international privacy standards.',
      lastUpdated: 'Effective & Last Updated: November 2026',
      sections: [
        {
          id: 'controller',
          num: '01',
          title: 'Data Controller & Dual-Jurisdiction Regulatory Scope',
          body: 'This Privacy Policy governs all digital platforms, student portals, consultation forms, and physical admissions operated by ATSUKO INTERNATIONAL (PVT) LTD (篤子 学校 / ATSUKO GAKKO), incorporated in the Democratic Socialist Republic of Sri Lanka under Company Registration No. PV 0217143 and licensed by the Sri Lanka Bureau of Foreign Employment (SLBFE License No. 3293) and OTIT (ID: LKA000076), together with our Japanese corporate entity, 株式会社 Atsuko International (Corporate ID: 3700-01-048848; Registered Support Organization No. 23登-008312; Paid Employment Placement License No. 04-ユ-300338).',
          points: [
            'Sri Lanka Headquarters: 191/3/1, Sirimavo Bandaranayake Road, Mahara, Kadawatha, 11850 Sri Lanka.',
            'Japan Registered Office: Postcode-485-0041, Sunshine Komaki Building, 2nd Floor, West Room, 2-41 Komaki, Komaki City, Aichi Prefecture, Japan (〒485-0041 愛知県小牧市小牧2-41 サンシャイン小牧棟 2階西号室).',
            'Compliance with Sri Lanka Personal Data Protection Act (PDPA) No. 9 of 2022 and Japan Act on the Protection of Personal Information (APPI / 個人情報保護法).'
          ]
        },
        {
          id: 'collection',
          num: '02',
          title: 'Categories of Personal Data We Collect',
          body: 'We collect only the personal data strictly necessary to evaluate your eligibility, provide Japanese language and vocational education, and process official visa, Certificate of Eligibility (COE), and employment placements:',
          points: [
            'Identity & Contact Data: Full legal name, contact telephone/WhatsApp numbers, email address, residential address, date of birth, and National Identity Card (NIC) or Passport details.',
            'Academic & Vocational Records: G.C.E. O/L and A/L certificates, Japanese language proficiency results (JLPT N5–N1, JFT-Basic, NAT-TEST), Prometric SSW skill test certificates (Kaigo, Food Service, Accommodation, Agriculture), and NVQ Level 3 credentials.',
            'Immigration & Legal Documentation: COE application forms, financial sponsorship documents, bank statements, medical clearances, police clearance certificates, and SLBFE registration records.',
            'Technical & Website Usage Data: Device type, browser language preference (EN/SI/JP), anonymized analytics, and security logs to protect our portal and official certificates against unauthorized scraping.'
          ]
        },
        {
          id: 'purpose',
          num: '03',
          title: 'Purpose & Lawful Basis of Processing',
          body: 'Your personal information is processed transparently and exclusively for legitimate educational, immigration, and career placement purposes:',
          points: [
            'Course Enrollment & Examination Registration: Enrolling students in JLPT/JFT language cohorts, Caregiver (Kaigo) simulation training, and CBT Prometric test preparation.',
            'Official Visa & COE Submissions: Preparing and submitting legal dossiers to the Immigration Services Agency of Japan (出入国在留管理庁), the Embassy of Japan in Sri Lanka, OTIT, and the Sri Lanka Bureau of Foreign Employment (SLBFE).',
            'Direct Employer Matching & Support in Japan: Matching qualified SSW and TITP candidates with verified Japanese accepting organizations (受入機関) and providing mandatory post-arrival support through our Komaki, Aichi office.',
            'Student Loans & Financial Facilitation: Assisting eligible students with documentation for educational and migration loan facilities upon explicit request.'
          ]
        },
        {
          id: 'cross-border',
          num: '04',
          title: 'Cross-Border Data Transfers (Sri Lanka ↔ Japan)',
          body: 'Because Atsuko International facilitates international education and employment in Japan, your application data is transferred securely between our Sri Lanka Headquarters and our Japan Registered Support Organization, as well as authorized institutions in Japan:',
          points: [
            'Japanese Educational Institutions: Accredited Japanese language academies, vocational colleges (Senmon Gakko), and universities where you apply for admission.',
            'Japanese Accepting Companies & Supervising Organizations: Verified hospitals, nursing care facilities, hospitality groups, agricultural enterprises, and supervising unions for SSW and TITP interviews (Mensetsu).',
            'Government & Regulatory Authorities: SLBFE, TVEC, OTIT, the Ministry of Justice / Immigration Services Agency of Japan, and the Embassy of Japan.',
            'Strict Prohibition on Commercial Sale: We never sell, rent, or trade student or candidate personal data to third-party marketers or unauthorized brokers.'
          ]
        },
        {
          id: 'security',
          num: '05',
          title: 'Data Security, Confidentiality & Retention',
          body: 'We implement strict physical, administrative, and technical safeguards at both our Kadawatha campus and Komaki office to prevent unauthorized access, alteration, or disclosure of candidate records:',
          points: [
            'Physical immigration dossiers are stored in restricted-access legal chambers at our Kadawatha Head Center and Komaki Japan office.',
            'Digital transmissions utilize encrypted HTTPS/TLS channels and strict Content Security Policy (CSP) headers.',
            'Records required under the SLBFE Act No. 21 of 1985 and Japanese Immigration regulations are retained for the statutory period mandated by law and securely archived or destroyed thereafter.'
          ]
        },
        {
          id: 'rights',
          num: '06',
          title: 'Your Rights as a Data Subject',
          body: 'Under the Sri Lanka PDPA and Japan APPI, every student, candidate, and website visitor is entitled to exercise the following rights free of charge:',
          points: [
            'Right of Access & Correction: Request a copy of the personal data we hold about you and request immediate correction of any inaccurate or outdated information.',
            'Right to Withdraw Consent & Erasure: Withdraw consent for optional communications or request deletion of inquiry data where statutory SLBFE or immigration retention obligations do not apply.',
            'Third-Party Services Notice: When you interact with embedded services such as WhatsApp Direct Inquiry, YouTube, Instagram, or Google Maps, their respective privacy policies apply alongside this policy.'
          ]
        }
      ]
    },
    terms: {
      badge: 'International Legal & Regulatory Standard • SLBFE #3293',
      title: 'Terms & Conditions',
      highlight: 'of Service',
      subtitle:
        'Binding terms governing the use of www.atsukointernational.com, student admissions, Japanese language training, and legal visa & employment placement services provided by Atsuko International (PVT) LTD.',
      lastUpdated: 'Effective & Last Updated: November 2026',
      sections: [
        {
          id: 'scope',
          num: '01',
          title: 'Acceptance of Terms & Official Corporate Status',
          body: 'By accessing www.atsukointernational.com, submitting an online inquiry, or enrolling in any training or visa pathway at Atsuko International (PVT) LTD ("Atsuko Gakko / 篤子 学校"), you agree to abide by these Terms & Conditions. Atsuko International operates as a fully licensed statutory entity in both Sri Lanka and Japan:',
          points: [
            'Sri Lanka Licensure: Company Registration No. PV 0217143 | SLBFE License No. 3293 | OTIT Sending Organization No. LKA000076 | TVEC Registered Training Institute.',
            'Japan Licensure: 株式会社 Atsuko International (Corporate No. 3700-01-048848) | Registered Support Organization (登録支援機関) No. 23登-008312 | Paid Employment Placement Business (有料職業紹介事業) License No. 04-ユ-300338.',
            'Headquarters Address: 191/3/1, Sirimavo Bandaranayake Road, Mahara, Kadawatha, 11850 Sri Lanka.'
          ]
        },
        {
          id: 'zero-fee',
          num: '02',
          title: 'Zero Initial Fee Policy & Financial Transparency',
          body: 'Atsuko International strictly enforces ethical recruitment and complete financial transparency in accordance with SLBFE and Japanese Ministry of Justice regulations:',
          points: [
            'Zero Advance Visa Placement Fee: No agency placement or visa processing fees are collected prior to official approval / Certificate of Eligibility (COE) issuance (初期費用ゼロ — 承認前は一切費用をいただきません).',
            'Course Tuition & Examination Fees: Fees for full-time or online Japanese language instruction (JLPT N5 / 50-Day JFT & N4), NVQ Level 3 Nursing Care, hostel accommodation, and official third-party exam registrations (JLPT/JFT/Prometric) are governed by the official fee schedule provided at admission.',
            'Official Receipts & Loan Facilities: Every payment must be made only to official Atsuko International accounts or cashier counters against an official company receipt. Loan facilities are available for eligible candidates subject to partner bank terms.'
          ]
        },
        {
          id: 'candidate-obligations',
          num: '03',
          title: 'Student & Candidate Obligations (Authenticity & Conduct)',
          body: 'Successful progression through Japanese language training, employer interviews (Mensetsu), and visa processing requires strict adherence to academic and legal standards:',
          points: [
            '100% Document Authenticity: Candidates must submit genuine academic certificates, civil records, financial statements, and work histories. Submission of forged or falsified documents will result in immediate termination of services and reporting to relevant authorities.',
            'Attendance & Academic Discipline: Students enrolled in full-time or hostel cohorts at Kadawatha must maintain the mandatory attendance rate and pass internal assessments required for JLPT/JFT-Basic and Prometric skill examinations.',
            'Minimum Education Requirements: For SSW Nursing Care (Kaigo) and related pathways, candidates must have completed school education up to G.C.E. Advanced Level (A/L) as stipulated in course admissions criteria.'
          ]
        },
        {
          id: 'immigration-disclaimer',
          num: '04',
          title: 'Visa, COE & Employment Placement Disclaimers',
          body: 'While Atsuko International maintains an industry-leading approval track record through meticulous legal documentation and direct Japanese employer partnerships, candidates acknowledge the following statutory realities:',
          points: [
            'Sovereign Immigration Authority: The final decision to grant or refuse a Certificate of Eligibility (COE) or entry visa rests solely with the Immigration Services Agency of Japan (出入国在留管理庁) and the Embassy of Japan in Sri Lanka.',
            'Employer Selection: Final hiring decisions under the Specified Skilled Worker (SSW) and TITP frameworks are made by the Japanese accepting organization following formal interviews and skill verifications.',
            'Regulatory Changes: Visa timelines and sector quotas are subject to bilateral agreements and statutory revisions by the Governments of Japan and Sri Lanka.'
          ]
        },
        {
          id: 'intellectual-property',
          num: '05',
          title: 'Intellectual Property & Anti-Counterfeiting Protection',
          body: 'All content on this website—including the Atsuko International emblem, Japanese calligraphy, curriculum materials, campus photography, student videos, and protected digital displays of government licenses (SLBFE, PV 0217143, TVEC, OTIT, and Japanese Ministry permits)—is the exclusive intellectual property of Atsuko International (PVT) LTD:',
          points: [
            'Strict Prohibition on License Misuse: Downloading, screenshotting, altering, or reproducing our SLBFE/Japan license certificates or corporate registration numbers for unauthorized recruitment or third-party promotion is a criminal offense and will be prosecuted under Sri Lankan and Japanese law.',
            'Website Security: Unauthorized framing, automated scraping, or attempts to bypass document viewer protections on this portal are strictly prohibited.'
          ]
        },
        {
          id: 'governing-law',
          num: '06',
          title: 'Limitation of Liability & Governing Law',
          body: 'These Terms & Conditions are governed by and construed in accordance with the laws of the Democratic Socialist Republic of Sri Lanka (for services rendered in Sri Lanka) and the laws of Japan (for post-arrival support and placement services rendered by 株式会社 Atsuko International in Japan).',
          points: [
            'Atsuko International shall not be liable for delays or rejections caused by inaccurate information supplied by the applicant, changes in government immigration policy, or force majeure events.',
            'Any disputes shall first be addressed through good-faith consultation at our Kadawatha Headquarters or in accordance with SLBFE conciliation procedures.'
          ]
        }
      ]
    }
  },
  si: {
    privacy: {
      badge: 'ජාත්‍යන්තර දත්ත ආරක්ෂණ ප්‍රමිතිය • PDPA සහ APPI අනුකූලයි',
      title: 'නිල පෞද්ගලිකත්ව',
      highlight: 'ප්‍රතිපත්තිය (Privacy Policy)',
      subtitle:
        '2022 අංක 9 දරන ශ්‍රී ලංකා පුද්ගලික දත්ත ආරක්ෂණ පනත (PDPA), ජපානයේ පුද්ගලික තොරතුරු ආරක්ෂණ පනත (APPI) සහ ජාත්‍යන්තර ප්‍රමිතීන්ට අනුකූලව Atsuko International (PVT) LTD විසින් ඔබගේ තොරතුරු රැස්කරන, ආරක්ෂා කරන සහ භාවිතා කරන ආකාරය.',
      lastUpdated: 'අවසන් යාවත්කාලීන කිරීම: 2026 නොවැම්බර්',
      sections: [
        {
          id: 'controller',
          num: '01',
          title: 'දත්ත පාලක සහ දෙරටේ නීතිමය බලප්‍රදේශය',
          body: 'මෙම පෞද්ගලිකත්ව ප්‍රතිපත්තිය ශ්‍රී ලංකාවේ PV 0217143 යටතේ සංස්ථාපිත, SLBFE බලපත්‍ර අංක 3293 සහ OTIT (LKA000076) හිමි ATSUKO INTERNATIONAL (PVT) LTD (篤子 学校) ආයතනය සහ ජපානයේ ලියාපදිංචි සහාය ආයතනය වන 株式会社 Atsuko International (ලියාපදිංචි අංක 23登-008312 සහ රැකියා බලපත්‍ර අංක 04-ユ-300338) මඟින් ක්‍රියාත්මක කරන සියලුම වෙබ් සේවාවන් සහ සිසු ලියාපදිංචි කිරීම් සඳහා අදාළ වේ.',
          points: [
            'ශ්‍රී ලංකා ප්‍රධාන මූලස්ථානය: 191/3/1, Sirimavo Bandaranayake Road, Mahara, Kadawatha, 11850 Sri Lanka.',
            'ජපාන කාර්යාලය: Postcode-485-0041, Sunshine Komaki Building, 2nd Floor, West Room, 2-41 Komaki, Komaki City, Aichi Prefecture, Japan.',
            'ශ්‍රී ලංකා පුද්ගලික දත්ත ආරක්ෂණ පනත (PDPA) සහ ජපාන APPI නීති රෙගුලාසිවලට පූර්ණ අනුකූලතාව.'
          ]
        },
        {
          id: 'collection',
          num: '02',
          title: 'අප විසින් රැස්කරන පුද්ගලික තොරතුරු',
          body: 'ඔබගේ සුදුසුකම් පරීක්ෂා කිරීම, ජපන් භාෂා හා වෘත්තීය පුහුණුව ලබාදීම සහ නිල වීසා/COE හා රැකියා අයදුම්පත් සකස් කිරීම සඳහා අත්‍යවශ්‍ය තොරතුරු පමණක් අපි රැස් කරන්නෙමු:',
          points: [
            'හඳුනාගැනීමේ සහ සම්බන්ධතා තොරතුරු: සම්පූර්ණ නම, දුරකථන/WhatsApp අංක, විද්‍යුත් තැපෑල, ලිපිනය, උපන් දිනය සහ ජාතික හැඳුනුම්පත් (NIC) හෝ විදේශ ගමන් බලපත්‍ර තොරතුරු.',
            'අධ්‍යාපනික සහ වෘත්තීය සුදුසුකම්: අ.පො.ස. සා/පෙළ සහ උ/පෙළ සහතික, ජපන් භාෂා විභාග ප්‍රතිඵල (JLPT N5–N1, JFT-Basic), Prometric කුසලතා විභාග සහතික (Kaigo, ආහාර සේවා, කෘෂිකර්ම) සහ NVQ Level 3 සහතික.',
            'වීසා සහ නීතිමය ලේඛන: COE අයදුම්පත්, මූල්‍ය අනුග්‍රාහක ලේඛන, වෛද්‍ය වාර්තා, පොලිස් නිෂ්කාශන වාර්තා සහ SLBFE ලියාපදිංචි තොරතුරු.',
            'තාක්ෂණික දත්ත: වෙබ් අඩවියේ ආරක්ෂාව සහ භාෂා තේරීම් (EN/SI/JP) නිසි ලෙස පවත්වාගෙන යාමට අවශ්‍ය මූලික තාක්ෂණික දත්ත.'
          ]
        },
        {
          id: 'purpose',
          num: '03',
          title: 'තොරතුරු භාවිතා කිරීමේ නීත්‍යානුකූල අරමුණු',
          body: 'ඔබගේ පුද්ගලික දත්ත භාවිතා කරනු ලබන්නේ පහත සඳහන් නිල අධ්‍යාපනික සහ වීසා කටයුතු සඳහා පමණි:',
          points: [
            'පාඨමාලා සහ විභාග ලියාපදිංචිය: ජපන් භාෂා පාඨමාලා, සාත්තු සේවා (Kaigo) ප්‍රායෝගික පුහුණුව සහ CBT විභාග සඳහා සිසුන් යොමු කිරීම.',
            'නිල වීසා සහ COE අයදුම්පත්: ජපාන ආගමන විගමන දෙපාර්තමේන්තුව, කොළඹ ජපන් තානාපති කාර්යාලය, OTIT සහ SLBFE වෙත නිල ලේඛන ඉදිරිපත් කිරීම.',
            'ජපානයේ සෘජු රැකියා යොමු කිරීම: SSW සහ TITP අපේක්ෂකයින් ජපානයේ පිළිගත් සේවායෝජකයින් සමඟ සම්බන්ධ කිරීම සහ කොමාකි කාර්යාලය හරහා ජපානයේදී පූර්ණ සහාය ලබාදීම.',
            'බැංකු ණය පහසුකම්: සිසුන්ගේ ඉල්ලීම මත අධ්‍යාපන සහ විදේශගතවීමේ ණය පහසුකම් සඳහා අවශ්‍ය ලේඛන සකස් කර දීම.'
          ]
        },
        {
          id: 'cross-border',
          num: '04',
          title: 'ශ්‍රී ලංකාව සහ ජපානය අතර දත්ත හුවමාරුව',
          body: 'ජපානයේ අධ්‍යාපන සහ රැකියා අවස්ථා සලසා දීම සඳහා ඔබගේ අයදුම්පත් තොරතුරු ශ්‍රී ලංකා ප්‍රධාන කාර්යාලය සහ ජපානයේ අපගේ ලියාපදිංචි ආයතනය මෙන්ම නිල ආයතන අතර ආරක්ෂිතව හුවමාරු කෙරේ:',
          points: [
            'ජපානයේ අනුමත භාෂා පාසල්, වෘත්තීය විද්‍යාල සහ විශ්වවිද්‍යාල.',
            'SSW සහ TITP සම්මුඛ පරීක්ෂණ පවත්වන ජපානයේ රෝහල්, වැඩිහිටි සත්කාරක මධ්‍යස්ථාන, ආපනශාලා, හෝටල් සහ කෘෂිකාර්මික ආයතන.',
            'SLBFE, TVEC, OTIT, ජපාන ආගමන විගමන කාර්යාංශය සහ ජපන් තානාපති කාර්යාලය.',
            'කිසිදු අවස්ථාවක ඔබගේ පුද්ගලික තොරතුරු බාහිර අලෙවිකරණ ආයතන හෝ අතරමැදියන් වෙත ලබා නොදේ.'
          ]
        },
        {
          id: 'security',
          num: '05',
          title: 'දත්ත ආරක්ෂාව සහ රහස්‍යභාවය',
          body: 'කඩවත ප්‍රධාන මධ්‍යස්ථානයේ සහ ජපානයේ කොමාකි කාර්යාලයේ තැන්පත් කර ඇති සියලුම සිසු ලිපිගොනු දැඩි ආරක්ෂිත ක්‍රමවේද යටතේ පවත්වාගෙන යනු ලැබේ:',
          points: [
            'සියලුම භෞතික වීසා සහ අධ්‍යාපන ලිපිගොනු අවසරලත් නිලධාරීන්ට පමණක් ප්‍රවේශ විය හැකි නීති අංශයේ සුරක්ෂිතව තබා ඇත.',
            'වෙබ් අඩවිය හරහා සිදුවන සියලුම දත්ත සම්ප්‍රේෂණ HTTPS/TLS ආරක්ෂිත තාක්ෂණයෙන් සමන්විත වේ.',
            'SLBFE පනත සහ ජපන් ආගමන නීති මඟින් නියම කර ඇති කාලසීමාව තුළ පමණක් ලේඛන සුරක්ෂිතව රඳවා තබා ගැනේ.'
          ]
        },
        {
          id: 'rights',
          num: '06',
          title: 'දත්ත හිමිකරුවෙකු ලෙස ඔබ සතු අයිතිවාසිකම්',
          body: 'ශ්‍රී ලංකා PDPA සහ ජපාන APPI පනත් යටතේ සෑම සිසුවෙකුටම සහ අයදුම්කරුවෙකුටම පහත අයිතිවාසිකම් හිමිවේ:',
          points: [
            'තොරතුරු පරීක්ෂා කිරීමේ සහ නිවැරදි කිරීමේ අයිතිය: ඔබ පිළිබඳව අප සතුව ඇති දත්ත පරීක්ෂා කිරීමට සහ යම් දෝෂයක් ඇත්නම් එය යාවත්කාලීන කර ගැනීමට හැකිය.',
            'කැමැත්ත ඉල්ලා අස්කර ගැනීම: නීතිමය වශයෙන් රඳවා තබා ගත යුතු ලේඛන හැර අනෙකුත් විමසීම් තොරතුරු ඉවත් කරන ලෙස ඉල්ලුම් කිරීමේ අයිතිය.',
            'තෙවන පාර්ශවීය සේවාවන්: WhatsApp, YouTube, Instagram සහ Google Maps භාවිතයේදී එම ආයතනවල පෞද්ගලිකත්ව ප්‍රතිපත්තිද අදාළ වේ.'
          ]
        }
      ]
    },
    terms: {
      badge: 'ජාත්‍යන්තර නීතිමය ප්‍රමිතිය • SLBFE බලපත්‍ර අංක 3293',
      title: 'සේවා කොන්දේසි සහ',
      highlight: 'නියමයන් (Terms & Conditions)',
      subtitle:
        'www.atsukointernational.com වෙබ් අඩවිය භාවිතය, පාඨමාලා සඳහා ඇතුළත් වීම සහ Atsuko International (PVT) LTD මඟින් සපයනු ලබන නිල වීසා හා රැකියා සේවාවන්ට අදාළ නීතිමය කොන්දේසි.',
      lastUpdated: 'අවසන් යාවත්කාලීන කිරීම: 2026 නොවැම්බර්',
      sections: [
        {
          id: 'scope',
          num: '01',
          title: 'කොන්දේසි පිළිගැනීම සහ නිල නීතිමය ලියාපදිංචිය',
          body: 'www.atsukointernational.com වෙබ් අඩවිය භාවිතා කිරීමෙන් හෝ Atsuko International (PVT) LTD ("Atsuko Gakko / 篤子 学校") හි පාඨමාලා සහ වීසා සේවාවන් සඳහා ලියාපදිංචි වීමෙන් ඔබ මෙම සේවා කොන්දේසිවලට එකඟ වේ. අප ආයතනය ශ්‍රී ලංකාව සහ ජපානය යන දෙරටේම රජයේ පූර්ණ බලපත්‍රලාභී ආයතනයකි:',
          points: [
            'ශ්‍රී ලංකා නිල ලියාපදිංචිය: සමාගම් ලියාපදිංචි අංක PV 0217143 | SLBFE බලපත්‍ර අංක 3293 | OTIT අංක LKA000076 | TVEC ලියාපදිංචි වෘත්තීය පුහුණු ආයතනය.',
            'ජපාන නිල ලියාපදිංචිය: 株式会社 Atsuko International (3700-01-048848) | ලියාපදිංචි සහාය ආයතන අංක 23登-008312 | රැකියා යොමු කිරීමේ බලපත්‍ර අංක 04-ユ-300338.',
            'ප්‍රධාන කාර්යාල ලිපිනය: 191/3/1, Sirimavo Bandaranayake Road, Mahara, Kadawatha, 11850 Sri Lanka.'
          ]
        },
        {
          id: 'zero-fee',
          num: '02',
          title: 'අනුමැතිය ලැබෙන තෙක් මූලික ගාස්තු ශුන්‍ය වීමේ ප්‍රතිපත්තිය',
          body: 'SLBFE සහ ජපන් අධිකරණ අමාත්‍යාංශයේ නීති රෙගුලාසිවලට අනුකූලව අප ආයතනය පූර්ණ මූල්‍ය විනිවිදභාවයකින් කටයුතු කරයි:',
          points: [
            'වීසා අනුමැතියට පෙර ගාස්තු අය නොකෙරේ: නිල COE / වීසා අනුමැතිය ලැබෙන තෙක් කිසිදු ඒජන්සි හෝ වීසා සැකසුම් ගාස්තුවක් අය නොකෙරේ (初期費用ゼロ).',
            'පාඨමාලා සහ විභාග ගාස්තු: ජපන් භාෂා පාඨමාලා (මාස 1 N5 / දින 50 JFT & N4), NVQ Level 3 සාත්තු සේවා පාඨමාලාව, නේවාසිකාගාර පහසුකම් සහ නිල විභාග ගාස්තු ඇතුළත් වීමේදී ලබාදෙන නිල ගාස්තු ලේඛනයට අනුව සිදු කෙරේ.',
            'නිල රිසිට්පත් සහ ණය පහසුකම්: සියලුම ගෙවීම් ආයතනයේ නිල බැංකු ගිණුම් හෝ මුදල් අයකැමි වෙත පමණක් සිදු කළ යුතු අතර නිල රිසිට්පතක් ලබාගත යුතුය. සුදුසුකම් ලබන සිසුන් සඳහා ණය පහසුකම් (Loan facilities) ලබාගත හැක.'
          ]
        },
        {
          id: 'candidate-obligations',
          num: '03',
          title: 'සිසුන් සහ අයදුම්කරුවන්ගේ වගකීම්',
          body: 'ජපන් භාෂා පුහුණුව, සම්මුඛ පරීක්ෂණ (Mensetsu) සහ වීසා අයදුම්පත් සාර්ථක කර ගැනීම සඳහා සිසුන් පහත කොන්දේසි පිළිපැදිය යුතුය:',
          points: [
            'සත්‍ය ලේඛන ඉදිරිපත් කිරීම: ඉදිරිපත් කරන සියලුම අධ්‍යාපන සහතික, උප්පැන්න/පවුල් තොරතුරු සහ බැංකු වාර්තා 100%ක් සත්‍ය විය යුතුය. ව්‍යාජ ලේඛන ඉදිරිපත් කිරීම සේවාවන් වහාම අත්හිටුවීමට සහ නීතිමය පියවර ගැනීමට හේතු වේ.',
            'පැමිණීම සහ විභාග සමත්වීම: පූර්ණකාලීන පාඨමාලා හදාරන සිසුන් අනිවාර්ය පැමිණීමේ ප්‍රතිශතය පවත්වා ගත යුතු අතර JLPT/JFT-Basic සහ Prometric විභාග සඳහා කැපවීමෙන් පෙනී සිටිය යුතුය.',
            'අවම අධ්‍යාපන සුදුසුකම්: SSW සාත්තු සේවා (Nursing Care / Kaigo) පාඨමාලා සඳහා අ.පො.ස. උසස් පෙළ (A/L) දක්වා පාසල් අධ්‍යාපනය හදාරා තිබීම අනිවාර්ය වේ.'
          ]
        },
        {
          id: 'immigration-disclaimer',
          num: '04',
          title: 'වීසා, COE සහ රැකියා තෝරාගැනීම් පිළිබඳ නීතිමය දැනුම්දීම',
          body: 'අත්සුකෝ ජාත්‍යන්තර ආයතනය නිවැරදිම නීතිමය ලේඛන සහ සෘජු ජපන් සේවායෝජක සබඳතා හරහා ඉහළම වීසා සාර්ථකත්වයක් පවත්වාගෙන යන අතර පහත කරුණු අයදුම්කරුවන් විසින් අවබෝධ කරගත යුතුය:',
          points: [
            'රාජ්‍ය ආගමන බලතල: COE සහතිකය හෝ වීසා බලපත්‍රය නිකුත් කිරීම පිළිබඳ අවසාන තීරණය ජපාන ආගමන විගමන දෙපාර්තමේන්තුව සහ ශ්‍රී ලංකාවේ ජපන් තානාපති කාර්යාලය සතු වේ.',
            'සේවායෝජක සම්මුඛ පරීක්ෂණ: SSW සහ TITP රැකියා සඳහා අවසාන තෝරාගැනීම සිදු කරනු ලබන්නේ අදාළ ජපන් ආයතනය විසින් පවත්වනු ලබන සම්මුඛ පරීක්ෂණ සහ කුසලතා ඇගයීමෙන් පසුවය.',
            'රජයේ ප්‍රතිපත්ති වෙනස්වීම්: වීසා කාලසීමාවන් සහ කෝටා දෙරටේ රජයන් විසින් ගනු ලබන තීරණවලට යටත් වේ.'
          ]
        },
        {
          id: 'intellectual-property',
          num: '05',
          title: 'බුද්ධිමය දේපළ සහ නිල බලපත්‍ර ආරක්ෂාව',
          body: 'මෙම වෙබ් අඩවියේ අන්තර්ගත අත්සුකෝ නිල ලාංඡනය, පාඨමාලා තොරතුරු, ඡායාරූප, වීඩියෝ සහ රජයේ බලපත්‍ර පිටපත් (SLBFE 3293, PV 0217143, TVEC, OTIT, ජපන් බලපත්‍ර) Atsuko International (PVT) LTD සතු බුද්ධිමය දේපළ වේ:',
          points: [
            'බලපත්‍ර අවභාවිතය සපුරා තහනම්: අපගේ නිල බලපත්‍ර හෝ ලියාපදිංචි අංක අනවසරයෙන් පිටපත් කිරීම, Screenshot ගැනීම හෝ වෙනත් පාර්ශවයක ප්‍රචාරණ කටයුතු සඳහා භාවිතා කිරීම ශ්‍රී ලංකා සහ ජපන් නීතිය යටතේ දඬුවම් ලැබිය හැකි වරදකි.',
            'වෙබ් අඩවියේ ආරක්ෂිත පද්ධති අවහිර කිරීමට හෝ දත්ත පිටපත් කිරීමට උත්සාහ කිරීම සපුරා තහනම් වේ.'
          ]
        },
        {
          id: 'governing-law',
          num: '06',
          title: 'වගකීම් සීමා කිරීම සහ බලපැවැත්වෙන නීතිය',
          body: 'මෙම සේවා කොන්දේසි ශ්‍රී ලංකා ප්‍රජාතන්ත්‍රවාදී සමාජවාදී ජනරජයේ නීතියට (ශ්‍රී ලංකාව තුළ සපයන සේවාවන් සඳහා) සහ ජපාන නීතියට (ජපානය තුළ සපයන සේවාවන් සඳහා) යටත්ව ක්‍රියාත්මක වේ.',
          points: [
            'අයදුම්කරු විසින් සපයන ලද වැරදි තොරතුරු හෝ රජයේ ආගමන නීති වෙනස්වීම් හේතුවෙන් සිදුවන ප්‍රමාදයන් සඳහා ආයතනය වගකීමෙන් නිදහස් වේ.',
            'ඕනෑම ගැටලුවක් පළමුව කඩවත ප්‍රධාන කාර්යාලය සමඟ සුහදව සාකච්ඡා කර හෝ SLBFE නිල ක්‍රමවේදයන්ට අනුකූලව විසඳා ගත යුතුය.'
          ]
        }
      ]
    }
  },
  jp: {
    privacy: {
      badge: '国際個人情報保護基準 • スリランカPDPA・日本APPI準拠',
      title: 'プライバシーポリシー',
      highlight: '（個人情報保護方針）',
      subtitle:
        'Atsuko International (PVT) LTD（スリランカ本社）および株式会社 Atsuko International（日本法人）における、スリランカ個人情報保護法（PDPA）ならびに日本国個人情報保護法（APPI）に基づく個人情報の適正な取扱について定めています。',
      lastUpdated: '最終改定日：2026年11月',
      sections: [
        {
          id: 'controller',
          num: '01',
          title: '個人情報取扱事業者および適用法域',
          body: '本プライバシーポリシーは、スリランカ政府公認送り出し機関・日本語学校である ATSUKO INTERNATIONAL (PVT) LTD（篤子 学校 / 会社登記番号：PV 0217143、SLBFE認可番号：3293、OTIT番号：LKA000076）および日本法人である 株式会社 Atsuko International（法人番号：3700-01-048848、登録支援機関：23登-008312、有料職業紹介事業許可：04-ユ-300338）が運営する公式ウェブサイト、相談窓口、教育・紹介業務に適用されます。',
          points: [
            'スリランカ本社所在地：191/3/1, Sirimavo Bandaranayake Road, Mahara, Kadawatha, 11850 Sri Lanka.',
            '日本事務所所在地：〒485-0041 愛知県小牧市小牧2-41 サンシャイン小牧棟 2階西号室（Postcode-485-0041, Sunshine Komaki Building 2F West, 2-41 Komaki, Komaki City, Aichi, Japan）',
            'スリランカ2022年第9号個人情報保護法（PDPA）および日本国「個人情報の保護に関する法律（APPI）」を遵守します。'
          ]
        },
        {
          id: 'collection',
          num: '02',
          title: '取得する個人情報の項目',
          body: '当機関は、日本語教育、在留資格認定証明書（COE）・査証（ビザ）申請、および適正な職業紹介・登録支援業務に必要な範囲内で以下の個人情報を取得します。',
          points: [
            '本人確認・連絡先情報：氏名、生年月日、住所、電話番号、WhatsApp番号、メールアドレス、パスポートおよび国民ID（NIC）情報。',
            '学歴・資格・試験記録：G.C.E. O/L・A/L成績証明書、日本語能力試験（JLPT N5〜N1、JFT-Basic）、特定技能評価試験（プロメトリック介護・外食・宿泊・農業等）、NVQ Level 3修了証。',
            '入管・公的申請書類：在留資格認定証明書交付申請書、経費支弁書、銀行残高証明書、健康診断書、犯罪経歴証明書、SLBFE登録書類。',
            'ウェブサイト技術情報：言語設定（EN/SI/JP）、セキュリティログ（公的許可証の不正転載防止機能を含む）、アクセス解析データ。'
          ]
        },
        {
          id: 'purpose',
          num: '03',
          title: '個人情報の利用目的',
          body: '取得した個人情報は、以下の正当な教育・入管手続・就労支援の目的に限定して利用いたします。',
          points: [
            '日本語コース・介護実技研修の運営および各種試験（JLPT/JFT/プロメトリック）の受験手配。',
            '日本の出入国在留管理庁、在スリランカ日本国大使館、外国人技能実習機構（OTIT）、スリランカ海外雇用局（SLBFE）への法定申請手続。',
            '日本の受入機関（病院・介護施設・外食・宿泊・農業法人等）、監理団体、提携日本語学校・大学への候補者推薦、面接（Mensetsu）手配、および入国後の登録支援業務。',
            '希望者に対する教育・渡航ローンの金融機関手続き支援。'
          ]
        },
        {
          id: 'cross-border',
          num: '04',
          title: '国境を越える個人データの移転（スリランカ ↔ 日本）',
          body: '日本への留学・就労を実現するため、応募者・受講生の個人データはスリランカ本社と日本法人（株式会社 Atsuko International）および日本国内の公的機関・受入機関の間で安全に共有されます。',
          points: [
            '出願先の日本語教育機関・専門学校・大学。',
            '特定技能（SSW）受入企業、技能実習（TITP）監理団体・実習実施者。',
            '出入国在留管理庁、日本国大使館、OTIT、SLBFE等の政府機関。',
            '第三者への不正販売・貸与の禁止：マーケティング業者や無許可ブローカーへ個人情報を提供・販売することは一切ありません。'
          ]
        },
        {
          id: 'security',
          num: '05',
          title: '安全管理措置および保管期間',
          body: '個人データの漏えい、滅失または毀損の防止のため、カダワタ本校および小牧事務所において厳格な物理的・技術的安全管理措置を講じています。',
          points: [
            '申請書類等の物理ファイルは、施錠管理された法務書庫にて権限者のみが取り扱います。',
            '当サイトの通信はSSL/TLS暗号化および厳格なCSP（Content Security Policy）により保護されています。',
            'SLBFE法および日本の入管法・職業安定法で義務付けられた法定保存期間満了後、適切な方法で廃棄・消去します。'
          ]
        },
        {
          id: 'rights',
          num: '06',
          title: '保有個人データの開示・訂正・利用停止等の請求',
          body: 'ご本人からの保有個人データの開示、訂正、追加、削除、または利用停止のご請求には、本人確認の上、法令に従い速やかに対応いたします。',
          points: [
            '個人情報の開示・訂正請求は、公式メール（info@atsukointernational.com）または本社窓口にて承ります。',
            '当サイト内の外部連携サービス（WhatsApp、YouTube、Instagram、Googleマップ等）をご利用の際は、各提供事業者のプライバシーポリシーも併せて適用されます。'
          ]
        }
      ]
    },
    terms: {
      badge: '国際法務・コンプライアンス基準 • SLBFE #3293',
      title: '利用規約・サービス',
      highlight: '取引条件 (Terms & Conditions)',
      subtitle:
        'www.atsukointernational.com のご利用、日本語・介護研修コースの受講、ならびに留学・特定技能・技能実習ビザ申請および職業紹介サービスに関する公式規約です。',
      lastUpdated: '最終改定日：2026年11月',
      sections: [
        {
          id: 'scope',
          num: '01',
          title: '規約の適用および公認法人資格',
          body: '本ウェブサイト（www.atsukointernational.com）のご利用、相談予約、または ATSUKO INTERNATIONAL (PVT) LTD（篤子 学校）および株式会社 Atsuko International が提供する研修・手続サービスへのお申し込みをもって、本規約に同意したものとみなされます。',
          points: [
            'スリランカ政府許認可：法人登記番号 PV 0217143 ｜ SLBFEライセンス番号 3293 ｜ OTIT認定送出機関 LKA000076 ｜ TVEC登録職業訓練校。',
            '日本国政府許認可：株式会社 Atsuko International（法人番号 3700-01-048848）｜ 登録支援機関 23登-008312 ｜ 有料職業紹介事業許可 04-ユ-300338。',
            'スリランカ本社所在地：191/3/1, Sirimavo Bandaranayake Road, Mahara, Kadawatha, 11850 Sri Lanka.'
          ]
        },
        {
          id: 'zero-fee',
          num: '02',
          title: '初期費用ゼロ方針および費用の透明性',
          body: '当機関はSLBFE規則および日本国関係法令を遵守し、倫理的な人材育成・紹介と完全な会計の透明性を徹底しています。',
          points: [
            '承認前の紹介・手続費用ゼロ保証：正式な承認（COE交付等）が下りるまで、手続・紹介手数料を前払いでお預かりすることは一切ありません（初期費用ゼロ）。',
            '授業料・試験受験料：日本語コース（1ヶ月N5／50日間JFT・N4）、NVQ Level 3介護コース、学生寮費、および外部公的試験（JLPT/JFT/プロメトリック）の受験料は、入学時に明示する公式料金表に基づきます。',
            '公式領収書の発行・ローン制度：すべてのお支払いは当機関の公式口座または窓口にて公式領収書と引き換えに行われます。提携金融機関による教育・渡航ローン制度も利用可能です。'
          ]
        },
        {
          id: 'candidate-obligations',
          num: '03',
          title: '受講生・応募者の遵守事項',
          body: '円滑な語学習得、日本企業との面接（Mensetsu）、および入管申請のため、受講生・候補者は以下の事項を遵守する必要があります。',
          points: [
            '提出書類の真正性：提出する学歴証明書、身分関係書類、財務書類、職歴書等はすべて真正な原本でなければなりません。偽造・虚偽記載が判明した場合は直ちに契約を解除し、関係当局へ通報します。',
            '出席率および学習規律：全日制コースおよび学生寮の受講生は、規定の出席率を維持し、JLPT/JFT-Basicおよび特定技能評価試験の合格に向けて誠実に学習に取り組むものとします。',
            '出願資格要件：特定技能「介護」コース等においては、G.C.E. A/L（高校卒業相当）までの学校教育を修了していることが必須条件となります。'
          ]
        },
        {
          id: 'immigration-disclaimer',
          num: '04',
          title: '在留資格（COE）・ビザ発給および採用選考に関する免責事項',
          body: '当機関は厳格な書類審査と日本の受入機関との直接連携により高い承認実績を有していますが、以下の法的性質についてあらかじめご了承ください。',
          points: [
            '入管・大使館の裁量権：在留資格認定証明書（COE）の交付および査証（ビザ）発給の最終判断は、日本国出入国在留管理庁および在スリランカ日本国大使館の専権事項です。',
            '受入企業の選考権：特定技能（SSW）および技能実習（TITP）における採用合否は、受入企業・機関による面接および技能評価に基づき決定されます。',
            '制度変更：両国政府の法令改正や受入枠の変更により、手続期間や要件が変更される場合があります。'
          ]
        },
        {
          id: 'intellectual-property',
          num: '05',
          title: '知的財産権および公的許可証の不正利用禁止',
          body: '当サイトに掲載されているロゴマーク、教材、写真、動画、ならびに政府公認ライセンス（SLBFE 3293、PV 0217143、TVEC、OTIT、登録支援機関・有料職業紹介許可証等）の画像・データに関する一切の権利は当機関に帰属します。',
          points: [
            '許可証の無断転載・悪用の厳禁：当機関の公的ライセンス画像や登録番号をスクリーンショット撮影、加工、または無断転載して第三者の勧誘・営業活動に利用する行為は犯罪であり、スリランカおよび日本の法令に基づき法的措置を講じます。',
            '保護ビューアの回避やサイトの自動スクレイピング行為を固く禁じます。'
          ]
        },
        {
          id: 'governing-law',
          num: '06',
          title: '準拠法および合意管轄',
          body: '本規約は、スリランカ国内での提供業務についてはスリランカ民主社会主義共和国の法令に、日本国内における株式会社 Atsuko International の提供業務については日本国法令に準拠し解釈されます。',
          points: [
            '申請者本人の虚偽申告や不可抗力、各国の政策変更に起因する損害について、当機関は責任を負いかねます。',
            '万一紛争が生じた場合は、カダワタ本社または小牧事務所にて誠実に協議の上、SLBFEおよび管轄裁判所の手続に従い解決するものとします。'
          ]
        }
      ]
    }
  }
};

export default function LegalPage({ lang = 'en', initialTab = 'privacy', onNavigate, onOpenModal }) {
  const [activeTab, setActiveTab] = useState(initialTab === 'terms' ? 'terms' : 'privacy');

  useEffect(() => {
    setActiveTab(initialTab === 'terms' ? 'terms' : 'privacy');
  }, [initialTab]);

  const langKey = lang === 'si' ? 'si' : lang === 'jp' || lang === 'ja' ? 'jp' : 'en';
  const content = LEGAL_CONTENT[langKey][activeTab];

  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
    if (onNavigate) {
      onNavigate(tab);
    }
  };

  return (
    <div className="page-container legal-page">
      {/* 1. Header Banner */}
      <section className="page-header-banner">
        <div className="container">
          <div className="page-header-content">
            <span className="section-badge badge-gold">
              {activeTab === 'privacy' ? <Lock size={14} aria-hidden="true" /> : <Scale size={14} aria-hidden="true" />}
              <span>{content.badge}</span>
            </span>

            <h1 className="page-hero-title">
              {content.title} <span className="text-gradient-red">{content.highlight}</span>
            </h1>

            <p className="page-hero-subtitle" style={{ maxWidth: '820px', margin: '0 auto 1.5rem' }}>
              {content.subtitle}
            </p>

            {/* Interactive Tab Switcher: Privacy Policy vs Terms & Conditions */}
            <div
              role="tablist"
              aria-label={langKey === 'si' ? 'නීතිමය ලේඛන තේරීම' : langKey === 'jp' ? '法務ドキュメント切替' : 'Legal Document Switcher'}
              style={{
                display: 'inline-flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                background: 'rgba(15, 23, 42, 0.65)',
                padding: '0.4rem',
                borderRadius: '9999px',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                marginTop: '0.5rem'
              }}
            >
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'privacy'}
                onClick={() => handleTabSwitch('privacy')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.6rem 1.35rem',
                  borderRadius: '9999px',
                  border: 'none',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  background: activeTab === 'privacy' ? 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)' : 'transparent',
                  color: activeTab === 'privacy' ? '#ffffff' : '#cbd5e1',
                  boxShadow: activeTab === 'privacy' ? '0 4px 14px rgba(2, 132, 199, 0.35)' : 'none'
                }}
              >
                <Lock size={15} aria-hidden="true" />
                <span>{langKey === 'si' ? 'පෞද්ගලිකත්ව ප්‍රතිපත්තිය (Privacy Policy)' : langKey === 'jp' ? 'プライバシーポリシー' : 'Privacy Policy'}</span>
              </button>

              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'terms'}
                onClick={() => handleTabSwitch('terms')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.6rem 1.35rem',
                  borderRadius: '9999px',
                  border: 'none',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  background: activeTab === 'terms' ? 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)' : 'transparent',
                  color: activeTab === 'terms' ? '#ffffff' : '#cbd5e1',
                  boxShadow: activeTab === 'terms' ? '0 4px 14px rgba(2, 132, 199, 0.35)' : 'none'
                }}
              >
                <FileText size={15} aria-hidden="true" />
                <span>{langKey === 'si' ? 'සේවා කොන්දේසි (Terms & Conditions)' : langKey === 'jp' ? '利用規約 (Terms & Conditions)' : 'Terms & Conditions'}</span>
              </button>
            </div>

            <div style={{ marginTop: '1rem', fontSize: '0.8rem', color: '#94a3b8', fontWeight: 600 }}>
              {content.lastUpdated}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Regulatory Compliance Bar */}
      <section className="section" style={{ paddingTop: '2.5rem', paddingBottom: '4rem' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
              gap: '1rem',
              marginBottom: '2.5rem'
            }}
          >
            <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '1.1rem 1.25rem', display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: '#e0f2fe', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <ShieldCheck size={22} aria-hidden="true" />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>SLBFE & Corporate</div>
                <strong style={{ fontSize: '0.92rem', color: '#0f172a' }}>Lic. #3293 • PV 0217143</strong>
              </div>
            </div>

            <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '1.1rem 1.25rem', display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: '#fef3c7', color: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Building2 size={22} aria-hidden="true" />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>Japan Support Entity</div>
                <strong style={{ fontSize: '0.92rem', color: '#0f172a' }}>23登-008312 • 04-ユ-300338</strong>
              </div>
            </div>

            <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '1.1rem 1.25rem', display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: '#dcfce7', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Globe2 size={22} aria-hidden="true" />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>OTIT Sending Org</div>
                <strong style={{ fontSize: '0.92rem', color: '#0f172a' }}>ID: LKA000076</strong>
              </div>
            </div>

            <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '1.1rem 1.25rem', display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: '#e0e7ff', color: '#4f46e5', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Lock size={22} aria-hidden="true" />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>Data Frameworks</div>
                <strong style={{ fontSize: '0.92rem', color: '#0f172a' }}>SL PDPA & Japan APPI</strong>
              </div>
            </div>
          </div>

          {/* 3. Main Legal Articles */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '1040px', margin: '0 auto' }}>
            {content.sections.map((sec) => (
              <article
                key={sec.id}
                id={sec.id}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '20px',
                  padding: 'clamp(1.35rem, 3vw, 2.25rem)',
                  boxShadow: '0 4px 18px rgba(15, 23, 42, 0.04)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '0.9rem' }}>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
                      color: '#ffffff',
                      fontWeight: 800,
                      fontSize: '0.85rem',
                      flexShrink: 0
                    }}
                  >
                    {sec.num}
                  </span>
                  <h2 style={{ fontSize: 'clamp(1.15rem, 2vw, 1.4rem)', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                    {sec.title}
                  </h2>
                </div>

                <p style={{ color: '#334155', fontSize: '0.96rem', lineHeight: 1.75, marginBottom: '1.15rem' }}>
                  {sec.body}
                </p>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {sec.points.map((pt, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.65rem',
                        background: '#f8fafc',
                        padding: '0.75rem 1rem',
                        borderRadius: '12px',
                        border: '1px solid #f1f5f9',
                        fontSize: '0.9rem',
                        color: '#1e293b',
                        lineHeight: 1.6
                      }}
                    >
                      <CheckCircle2 size={17} style={{ color: '#0284c7', flexShrink: 0, marginTop: '3px' }} aria-hidden="true" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}

            {/* 4. Official Legal & Data Protection Contact Box */}
            <div
              style={{
                background: 'linear-gradient(135deg, #060d1f 0%, #0c4a6e 100%)',
                borderRadius: '22px',
                padding: 'clamp(1.5rem, 3.5vw, 2.5rem)',
                color: '#ffffff',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                marginTop: '1rem'
              }}
            >
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ flex: '1 1 420px' }}>
                  <span
                    style={{
                      display: 'inline-block',
                      background: 'rgba(56, 189, 248, 0.18)',
                      color: '#38bdf8',
                      border: '1px solid rgba(56, 189, 248, 0.35)',
                      borderRadius: '9999px',
                      padding: '0.25rem 0.85rem',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      marginBottom: '0.75rem'
                    }}
                  >
                    {langKey === 'si' ? 'නීති සහ දත්ත ආරක්ෂණ ඒකකය' : langKey === 'jp' ? '法務・個人情報保護窓口' : 'Legal & Data Protection Office'}
                  </span>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }}>
                    {langKey === 'si'
                      ? 'නීතිමය හෝ පෞද්ගලිකත්ව ප්‍රතිපත්ති පිළිබඳ විමසීම්'
                      : langKey === 'jp'
                        ? '規約・個人情報に関するお問い合わせ窓口'
                        : 'Questions Regarding Privacy or Legal Terms?'}
                  </h3>
                  <p style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.1rem' }}>
                    {langKey === 'si'
                      ? 'ඔබගේ පුද්ගලික දත්ත හෝ අපගේ නිල සේවා කොන්දේසි පිළිබඳව ඕනෑම විමසීමක් සඳහා අපගේ ප්‍රධාන කාර්යාලය අමතන්න.'
                      : langKey === 'jp'
                        ? '個人情報の開示・訂正請求やサービス規約に関するご質問は、下記公式窓口までご連絡ください。'
                        : 'Contact our Legal & Admissions Administration directly for any data protection requests, license verifications, or contractual inquiries.'}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.86rem', color: '#e2e8f0' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <MapPin size={16} style={{ color: '#38bdf8', flexShrink: 0, marginTop: '3px' }} aria-hidden="true" />
                      <span><strong>Sri Lanka HQ:</strong> {officialContacts.headOfficeAddress}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <MapPin size={16} style={{ color: '#fbbf24', flexShrink: 0, marginTop: '3px' }} aria-hidden="true" />
                      <span><strong>Japan Office:</strong> {officialContacts.japanAddress}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                      <Mail size={15} style={{ color: '#38bdf8', flexShrink: 0 }} aria-hidden="true" />
                      <span>{officialContacts.email}</span>
                      <span>•</span>
                      <Phone size={15} style={{ color: '#34d399', flexShrink: 0 }} aria-hidden="true" />
                      <span>{officialContacts.hotline} / {officialContacts.mobile1}</span>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', minWidth: '220px' }}>
                  <button
                    type="button"
                    onClick={() => onOpenModal && onOpenModal('Legal & Admissions Inquiry')}
                    className="btn btn-primary"
                    style={{ justifyContent: 'center' }}
                  >
                    <span>{langKey === 'si' ? 'නිල විමසීමක් යොමු කරන්න' : langKey === 'jp' ? '公式窓口へ問い合わせる' : 'Contact Official Desk'}</span>
                    <ArrowRight size={16} aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleTabSwitch(activeTab === 'privacy' ? 'terms' : 'privacy')}
                    className="btn btn-secondary"
                    style={{ justifyContent: 'center', background: 'rgba(255,255,255,0.1)', color: '#ffffff', borderColor: 'rgba(255,255,255,0.25)' }}
                  >
                    <span>
                      {activeTab === 'privacy'
                        ? (langKey === 'si' ? 'සේවා කොන්දේසි කියවන්න' : langKey === 'jp' ? '利用規約を読む' : 'View Terms & Conditions')
                        : (langKey === 'si' ? 'පෞද්ගලිකත්ව ප්‍රතිපත්තිය' : langKey === 'jp' ? 'プライバシーポリシーを読む' : 'View Privacy Policy')}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

