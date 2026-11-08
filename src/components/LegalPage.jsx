import { useState, useEffect } from 'react';
import {
  ShieldCheck,
  Scale,
  Lock,
  FileText,
  Printer,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  Building2,
  Mail,
  Phone,
  MapPin,
  ExternalLink
} from 'lucide-react';
import { officialContacts } from '../data/websiteData';

const LEGAL_CONTENT = {
  en: {
    privacy: {
      docId: 'DOC-AI/LGL/2026/POL-01',
      classification: 'Statutory Data Privacy & Personal Information Instrument',
      jurisdiction: 'Democratic Socialist Republic of Sri Lanka & Japan',
      effectiveDate: 'November 01, 2026 (Operational Cycle 2026/2027)',
      badge: 'Statutory Compliance • Sri Lanka PDPA No. 9 of 2022 & Japan APPI',
      title: 'STATUTORY PERSONAL DATA PRIVACY POLICY',
      subtitle:
        'Official regulatory codex governing the lawful collection, processing, cross-border transmission, storage, and erasure of personal data by Atsuko International (PVT) LTD and 株式会社 Atsuko International.',
      preamble:
        'This Privacy Policy is promulgated pursuant to the Personal Data Protection Act (PDPA) No. 9 of 2022 of the Democratic Socialist Republic of Sri Lanka and the Act on the Protection of Personal Information (APPI / 個人情報保護法) of Japan. All enrolled students, job candidates, and digital applicants are hereby advised of their statutory rights and the operational measures enforced to safeguard their dossiers.',
      sections: [
        {
          id: 'controller',
          num: '01',
          title: 'Data Controller & Dual-Jurisdiction Statutory Authority',
          body: 'This Policy binds ATSUKO INTERNATIONAL (PVT) LTD (篤子 学校 / ATSUKO GAKKO), incorporated under the Companies Act No. 07 of 2007 of Sri Lanka (Reg. No. PV 0217143), licensed by the Sri Lanka Bureau of Foreign Employment (SLBFE Lic. No. 3293) and OTIT (ID: LKA000076), and its Japan corporate entity 株式会社 Atsuko International (Corporate ID: 3700-01-048848; Registered Support Organization No. 23登-008312; Paid Employment Placement License No. 04-ユ-300338).',
          points: [
            'Sri Lanka Data Processing Center: 191/3/1, Sirimavo Bandaranayake Road, Mahara, Kadawatha, 11850 Sri Lanka.',
            'Japan Registered Operations: Sunshine Komaki Building 2F, West Room, 2-41 Komaki, Komaki City, Aichi Prefecture 485-0041, Japan (〒485-0041 愛知県小牧市小牧2-41 サンシャイン小牧棟 2階西号室).',
            'Both controllers maintain joint statutory accountability for lawful candidate dossier handling across both jurisdictions.'
          ]
        },
        {
          id: 'collection',
          num: '02',
          title: 'Categories of Personal Data Collected & Processed',
          body: 'Collection is strictly limited to information necessary for evaluating qualification, administering Japanese language instruction, and processing official visa, Certificate of Eligibility (COE), and employment placement petitions:',
          points: [
            'Civil & Identity Records: Full legal name, National Identity Card (NIC) number, Passport bio-data page, photographs, residential addresses, and certified birth certificates.',
            'Educational & Examination Transcripts: Certified G.C.E. O/L and A/L certificates, Japanese language test results (JLPT N5–N1, JFT-Basic, NAT-TEST), and Prometric skill certificates (Caregiver, Food Service, Agriculture, Accommodation).',
            'Immigration & Compliance Files: Certificate of Eligibility (COE) petitions, bank financial statements, sponsorship undertakings, SLBFE registration forms, and certified police clearance certificates.',
            'System Security Logs: Anonymized device telemetry, network timestamps, and security access logs to prevent fraudulent duplication of government licenses.'
          ]
        },
        {
          id: 'purpose',
          num: '03',
          title: 'Lawful Basis & Mandatory Processing Purposes',
          body: 'Processing is performed exclusively under lawful contractual necessity and statutory compliance under Sri Lanka and Japanese immigration acts:',
          points: [
            'Vocational & Language Pedagogy: Scheduling JLPT/JFT training cohorts, NVQ Level 3 nursing simulation modules, and CBT Prometric examination preparations.',
            'Official Immigration Dossier Lodgment: Preparing and submitting verified applications to the Immigration Services Agency of Japan (出入国在留管理庁), Embassy of Japan in Colombo, OTIT, and SLBFE.',
            'Direct Employer Matching & On-Site Support: Matching qualified candidates with authorized Japanese accepting organizations (受入機関) and providing mandatory post-arrival residential, medical, and administrative support via our Komaki office.',
            'Statutory Financial Facilitation: Assisting eligible students with documentation for partner bank education and migration loan facilities upon explicit written request.'
          ]
        },
        {
          id: 'cross-border',
          num: '04',
          title: 'Cross-Border Transmission Framework (Sri Lanka ↔ Japan)',
          body: 'To secure overseas admission and employment, applicant personal data is transmitted across borders between our Kadawatha Headquarters and authorized Japanese authorities under secured transmission protocols:',
          points: [
            'Authorized Recipients: Accredited Japanese language institutes, senmon gakko, universities, accepting healthcare facilities, and supervised business unions.',
            'Government & Oversight Bodies: Japan Immigration Services Agency, Embassy of Japan, OTIT, TVEC, and the Sri Lanka Bureau of Foreign Employment.',
            'Strict Non-Brokerage Guarantee: Under no circumstances does Atsuko International sell, lease, or distribute applicant data to third-party marketing companies, advertisers, or unauthorized intermediaries.'
          ]
        },
        {
          id: 'security',
          num: '05',
          title: 'Data Security, Retention Schedule & Physical Protocols',
          body: 'Atsuko International maintains rigorous physical, technical, and administrative defenses across its facilities to guarantee dossier confidentiality:',
          points: [
            'Physical Vault Security: Hard-copy immigration files are archived in fireproof, restricted-access legal archives at our Kadawatha Head Center and Komaki office.',
            'Digital Encryption: All online transmissions employ high-grade TLS/HTTPS encryption with strict Content Security Policy (CSP) headers.',
            'Statutory Retention: Candidate files are retained for the minimum period mandated by the SLBFE Act No. 21 of 1985 and Japanese Immigration Standards, after which files are securely destroyed or permanently anonymized.'
          ]
        },
        {
          id: 'rights',
          num: '06',
          title: 'Statutory Rights of Data Subjects',
          body: 'Under Part II of the Sri Lanka PDPA and Chapter IV of the Japan APPI, candidates and students hold enforceable legal rights regarding their records:',
          points: [
            'Right of Access & Rectification: Right to inspect stored records and require prompt rectification of any erroneous or obsolete information.',
            'Right to Erasure & Objection: Right to demand deletion of optional inquiry records where statutory SLBFE or immigration archiving rules do not mandate retention.',
            'Direct Grievance Channel: Formal data protection inquiries may be addressed to our Legal Compliance Officer at info@atsukointernational.com.'
          ]
        }
      ]
    },
    terms: {
      docId: 'DOC-AI/LGL/2026/TOS-02',
      classification: 'Statutory Terms of Service & Candidate Admissions Regulations',
      jurisdiction: 'Democratic Socialist Republic of Sri Lanka & Japan',
      effectiveDate: 'November 01, 2026 (Operational Cycle 2026/2027)',
      badge: 'Statutory Regulation • SLBFE Approved Lic. No. 3293 & Japan 23登-008312',
      title: 'GENERAL TERMS & CONDITIONS OF RECRUITMENT & ADMISSIONS',
      subtitle:
        'Binding contractual regulations governing student admissions, Japanese language courses, immigration documentation, and overseas vocational employment placement by Atsuko International.',
      preamble:
        'These Terms & Conditions constitute a legally binding agreement between the candidate/student and ATSUKO INTERNATIONAL (PVT) LTD. Entry into any training cohort, submission of application documents, or utilization of our overseas placement services constitutes unconditional acceptance of the regulations codified herein.',
      sections: [
        {
          id: 'scope',
          num: '01',
          title: 'Corporate Standing & Statutory Licensure',
          body: 'Atsuko International operates as a fully licensed foreign employment agency and vocational institute under the direct statutory supervision of the Government of Sri Lanka and the Government of Japan:',
          points: [
            'Democratic Socialist Republic of Sri Lanka: Company Registration No. PV 0217143 | SLBFE Foreign Employment Agency License No. 3293 | OTIT Sending Organization No. LKA000076 | TVEC Registered Training Center.',
            'Japan Authority: 株式会社 Atsuko International (Corporate ID: 3700-01-048848) | Registered Support Organization (登録支援機関) No. 23登-008312 | Paid Employment Placement Business (有料職業紹介事業) License No. 04-ユ-300338.',
            'Official Head Center: 191/3/1, Sirimavo Bandaranayake Road, Mahara, Kadawatha, 11850 Sri Lanka.'
          ]
        },
        {
          id: 'zero-fee',
          num: '02',
          title: 'Zero Advance Visa Fee Policy & Financial Transparency',
          body: 'Atsuko International strictly prohibits unapproved upfront recruitment fees and operates with complete transparency in compliance with SLBFE directives and Japanese Ministry of Justice standards:',
          points: [
            'Zero Advance Placement Fee: No overseas job recruitment or placement fees are charged prior to official visa / COE approval (初期費用ゼロ — 承認前は一切費用をいただきません).',
            'Tuition & Examination Fees: Tuition for language courses (JLPT N5 / 50-Day JFT & N4), NVQ Level 3 Caregiver practical training, student hostel accommodation, and official examination registration fees (JLPT, JFT, Prometric) are billed strictly according to the official admission prospectus.',
            'Official Receipts: All payments must be made directly to official Atsuko International bank accounts or at our authorized cashier counters against an official company-stamped receipt.'
          ]
        },
        {
          id: 'candidate-obligations',
          num: '03',
          title: 'Candidate Obligations & Document Authenticity Standards',
          body: 'Due to the rigorous vetting conducted by the Immigration Services Agency of Japan, all enrolled candidates must adhere to uncompromising integrity standards:',
          points: [
            'Zero Tolerance for Fraud: Candidates must submit 100% genuine academic certificates, civil documents, and financial proofs. The submission of fraudulent or altered documents results in immediate expulsion, permanent disqualification, and reporting to the SLBFE and law enforcement.',
            'Curricular Attendance: Students must maintain the minimum mandatory 90% attendance record and achieve satisfactory scores in internal mock tests to qualify for official interview nominations.',
            'Educational Prerequisites: Applicants for Specified Skilled Worker (SSW) Caregiver programs must have completed schooling through G.C.E. Advanced Level (A/L) as mandated by course eligibility regulations.'
          ]
        },
        {
          id: 'immigration-disclaimer',
          num: '04',
          title: 'Sovereign Immigration Authority & Placement Disclaimers',
          body: 'Atsuko International provides exhaustive legal preparation, verified documentation, and direct interview channels; however, legal authority over entry rests solely with sovereign governments:',
          points: [
            'Sovereign Prerogative: The final determination to issue or deny a Certificate of Eligibility (COE) or entry visa remains the exclusive sovereign authority of the Immigration Services Agency of Japan and the Embassy of Japan in Sri Lanka.',
            'Employer Selection Autonomy: Final hiring offers for SSW and TITP candidates are decided solely by the Japanese accepting enterprise (hospital, care home, restaurant, hotel, agricultural corporation) based on interview (Mensetsu) performance.',
            'Regulatory Variations: Processing schedules and quota allocations are subject to bilateral agreements and revisions by the respective governments.'
          ]
        },
        {
          id: 'intellectual-property',
          num: '05',
          title: 'Intellectual Property & Anti-Counterfeiting Notice',
          body: 'All trademarks, logos, educational materials, curriculum modules, campus photographs, and digital reproductions of government licenses displayed on this website are the proprietary property of Atsuko International (PVT) LTD:',
          points: [
            'Criminal Prohibition on License Reproduction: Unauthorized copying, screenshotting, downloading, alteration, or reproduction of our SLBFE license, company registration, or Japanese permits for third-party commercial exploitation is a punishable criminal offense.',
            'Security Monitoring: Any automated scraping, unauthorized framing, or attempts to circumvent protected document views will trigger legal action under computer crime legislation.'
          ]
        },
        {
          id: 'governing-law',
          num: '06',
          title: 'Governing Law, Dispute Conciliation & Jurisdiction',
          body: 'These Terms & Conditions are governed by and construed under the legal frameworks of Sri Lanka and Japan:',
          points: [
            'Sri Lanka Operations: Governed by the laws of the Democratic Socialist Republic of Sri Lanka, including the Sri Lanka Bureau of Foreign Employment Act No. 21 of 1985.',
            'Japan Operations: Post-arrival support, living orientation, and workplace monitoring by 株式会社 Atsuko International are governed by the laws of Japan.',
            'Amicable Conciliation: In the event of any inquiry or dispute, parties agree to first engage in good-faith resolution at our Kadawatha Headquarters or through standard SLBFE conciliation procedures.'
          ]
        }
      ]
    }
  },
  si: {
    privacy: {
      docId: 'DOC-AI/LGL/2026/POL-01-SI',
      classification: 'පුද්ගලික දත්ත ආරක්ෂණ නිල ප්‍රතිපත්තිය',
      jurisdiction: 'ශ්‍රී ලංකා ප්‍රජාතාන්ත්‍රික සමාජවාදී ජනරජය සහ ජපානය',
      effectiveDate: '2026 නොවැම්බර් 01 (2026/2027 මෙහෙයුම් චක්‍රය)',
      badge: 'නීත්‍යානුකූල අනුකූලතාව • ශ්‍රී ලංකා PDPA පනත සහ ජපාන APPI පනත',
      title: 'පුද්ගලික දත්ත ආරක්ෂණ නිල ප්‍රතිපත්තිය (PRIVACY POLICY)',
      subtitle:
        'Atsuko International (PVT) LTD සහ 株式会社 Atsuko International ආයතන මඟින් සිසුන්ගේ සහ රැකියා අපේක්ෂකයින්ගේ පුද්ගලික දත්ත රැස්කිරීම, සැකසීම, ආරක්ෂා කිරීම සහ ජපානය වෙත සම්ප්‍රේෂණය කිරීම පාලනය වන නිල නීතිමය ප්‍රඥප්තිය.',
      preamble:
        '2022 අංක 9 දරන ශ්‍රී ලංකා පුද්ගලික දත්ත ආරක්ෂණ පනත (PDPA) සහ ජපානයේ පුද්ගලික තොරතුරු ආරක්ෂණ පනත (APPI) යටතේ මෙම පෞද්ගලිකත්ව ප්‍රතිපත්තිය ප්‍රකාශයට පත් කර ඇත. අපගේ සියලුම සිසුන්, දෙමාපියන් සහ රැකියා අයදුම්කරුවන් මෙම නීතිමය කොන්දේසි හොඳින් තේරුම් ගත යුතුය.',
      sections: [
        {
          id: 'controller',
          num: '01',
          title: 'දත්ත පාලක සහ දෙරටේ නීතිමය බලප්‍රදේශය',
          body: 'මෙම ප්‍රතිපත්තිය ශ්‍රී ලංකාවේ PV 0217143 යටතේ ලියාපදිංචි, විදේශ සේවා නියුක්ති කාර්යාංශයේ (SLBFE) බලපත්‍ර අංක 3293 සහ OTIT (LKA000076) හිමි ATSUKO INTERNATIONAL (PVT) LTD ආයතනයට මෙන්ම ජපානයේ ලියාපදිංචි සහායක ආයතනය වන 株式会社 Atsuko International (අංක 23登-008312 සහ රැකියා බලපත්‍ර 04-ユ-300338) සඳහා අදාළ වේ.',
          points: [
            'ශ්‍රී ලංකා ප්‍රධාන මූලස්ථානය: 191/3/1, සිරිමාවෝ බණ්ඩාරනායක මාවත, මහ store, කඩවත, 11850 ශ්‍රී ලංකාව.',
            'ජපාන කාර්යාලය: Postcode-485-0041, Sunshine Komaki Building, 2nd Floor, West Room, 2-41 Komaki, Komaki City, Aichi Prefecture, Japan.',
            'දෙරටේම නීතිමය රෙගුලාසිවලට අනුකූලව සිසුන්ගේ පුද්ගලික ලිපිගොනුවල පූර්ණ සුරක්ෂිතභාවය තහවුරු කරනු ලැබේ.'
          ]
        },
        {
          id: 'collection',
          num: '02',
          title: 'අප විසින් රැස්කරනු ලබන පුද්ගලික දත්ත',
          body: 'ජපන් භාෂා අධ්‍යාපනය ලබාදීම, සුදුසුකම් ඇගයීම සහ නිල වීසා (COE) අයදුම්පත් සකස් කිරීම සඳහා පමණක් අවශ්‍ය පහත තොරතුරු රැස් කරනු ලැබේ:',
          points: [
            'පුද්ගලික හැඳුනුම්පත් තොරතුරු: සම්පූර්ණ නම, ජාතික හැඳුනුම්පත් අංකය, විදේශ ගමන් බලපත්‍ර තොරතුරු, ලිපිනය, උපන් දිනය සහ දුරකථන/WhatsApp අංක.',
            'අධ්‍යාපනික සහ විභාග සහතික: අ.පො.ස. සා/පෙළ සහ උ/පෙළ සහතික, ජපන් භාෂා විභාග ප්‍රතිඵල (JLPT N5–N1, JFT-Basic), Prometric කුසලතා විභාග සහතික (Kaigo, ආහාර, නවාතැන්, කෘෂිකර්ම) සහ NVQ 3 සහතික.',
            'ආගමන විගමන ලිපිගොනු: COE අයදුම්පත්, මූල්‍ය අනුග්‍රාහක ලේඛන, බැංකු වාර්තා, වෛද්‍ය වාර්තා, පොලිස් නිෂ්කාශන වාර්තා සහ SLBFE ලියාපදිංචි සහතික.',
            'වෙබ් තාක්ෂණික තොරතුරු: වෙබ් අඩවියේ ආරක්ෂාව සහතික කිරීම සඳහා වන මූලික තාක්ෂණික දත්ත.'
          ]
        },
        {
          id: 'purpose',
          num: '03',
          title: 'දත්ත භාවිතා කිරීමේ නිල අරමුණු',
          body: 'ඔබගේ පුද්ගලික තොරතුරු භාවිතා කරනු ලබන්නේ පහත සඳහන් නීත්‍යානුකූල කාර්යයන් සඳහා පමණි:',
          points: [
            'පාඨමාලා සහ විභාග කළමනාකරණය: ජපන් භාෂා පන්ති, සාත්තු සේවා (Kaigo) ප්‍රායෝගික පුහුණුව සහ CBT පරිගණක විභාග සඳහා සිසුන් ලියාපදිංචි කිරීම.',
            'නිල වීසා සහ COE අයදුම්පත්: ජපාන ආගමන විගමන දෙපාර්තමේන්තුව, ශ්‍රී ලංකාවේ ජපන් තානාපති කාර්යාලය, OTIT සහ SLBFE වෙත නිල ලේඛන ඉදිරිපත් කිරීම.',
            'ජපානයේ සෘජු රැකියා සහ ආධාරක සේවා: ජපානයේ පිළිගත් ආයතන සමඟ රැකියා සම්මුඛ පරීක්ෂණ සංවිධානය කිරීම සහ කොමාකි කාර්යාලය හරහා ජපානයේදී අවශ්‍ය සහාය ලබාදීම.',
            'බැංකු ණය පහසුකම්: සිසුන්ගේ ඉල්ලීම මත අධ්‍යාපනික සහ විදේශගතවීමේ ණය පහසුකම් සඳහා අවශ්‍ය ලියකියවිලි සකස් කරදීම.'
          ]
        },
        {
          id: 'cross-border',
          num: '04',
          title: 'ශ්‍රී ලංකාව සහ ජපානය අතර දත්ත හුවමාරුව',
          body: 'ජපානයේ අධ්‍යාපන හා රැකියා වීසා ලබාගැනීම සඳහා ඔබගේ ලිපිගොනු කඩවත ප්‍රධාන කාර්යාලය සහ ජපානයේ අදාළ බලධාරීන් අතර පමණක් ආරක්ෂිතව හුවමාරු වේ:',
          points: [
            'අනුමත ආයතන: ජපානයේ පිළිගත් භාෂා පාසල්, වෘත්තීය විද්‍යාල, විශ්වවිද්‍යාල සහ SSW සාත්තු සේවා රෝහල්/ආයතන.',
            'රාජ්‍ය ආයතන: ජපාන ආගමන විගමන කාර්යාංශය, තානාපති කාර්යාලය, OTIT සහ SLBFE.',
            'අතරමැදියන්ට විකිණීම තහනම්: කිසිදු හේතුවක් මත අපේක්ෂකයින්ගේ තොරතුරු බාහිර අලෙවිකරුවන්ට හෝ තෙවන පාර්ශවීය තැරැව්කරුවන්ට ලබා නොදේ.'
          ]
        },
        {
          id: 'security',
          num: '05',
          title: 'දත්ත සුරක්ෂිතතාව සහ ලේඛන තබාගැනීම',
          body: 'කඩවත ප්‍රධාන මධ්‍යස්ථානයේ සහ කොමාකි ජපන් කාර්යාලයේ තැන්පත් කර ඇති සියලුම සිසු ලිපිගොනු දැඩි ආරක්ෂිත නීති යටතේ පාලනය වේ:',
          points: [
            'භෞතික ලිපිගොනු ආරක්ෂාව: සියලුම මුල් ලේඛන සහ වීසා ලිපිගොනු අනවසර පුද්ගලයින්ට ඇතුළු විය නොහැකි ආරක්ෂිත ලේඛනාගාරවල තැන්පත් කර ඇත.',
            'ඩිජිටල් ආරක්ෂාව: වෙබ් අඩවිය සහ දත්ත පද්ධති TLS/HTTPS තාක්ෂණයෙන් සහ දැඩි ආරක්ෂක පවුරුවලින් සමන්විත වේ.',
            'නෛතික කාලසීමාව: SLBFE පනත සහ ජපන් ආගමන නීතිය මඟින් නියම කර ඇති නිල කාලසීමාවෙන් පසුව ලේඛන නිසි පරිදි විනාශ කරනු ලැබේ.'
          ]
        },
        {
          id: 'rights',
          num: '06',
          title: 'දත්ත හිමිකරුවෙකු ලෙස ඔබ සතු නීතිමය අයිතිවාසිකම්',
          body: 'ශ්‍රී ලංකා PDPA පනත සහ ජපාන APPI පනත යටතේ සෑම අයදුම්කරුවෙකුටම පහත අයිතිවාසිකම් හිමිවේ:',
          points: [
            'පරීක්ෂා කිරීමේ සහ නිවැරදි කිරීමේ අයිතිය: ඔබ පිළිබඳ අප සතු දත්ත පරීක්ෂා කර බැලීමට සහ අවශ්‍ය විටෙක නිවැරදි කිරීමට ඉල්ලුම් කළ හැකිය.',
            'ඉවත් කිරීමේ ඉල්ලීම්: නීතියෙන් අනිවාර්ය කර ඇති ලිපිගොනු හැර සාමාන්‍ය විමසීම් තොරතුරු ඉවත් කිරීමට ඉල්ලුම් කිරීමේ හැකියාව ඇත.',
            'විමසීම් සේවාව: දත්ත ආරක්ෂණ නිලධාරී වෙත info@atsukointernational.com හරහා සෘජුවම ලිඛිතව දැනුම් දිය හැක.'
          ]
        }
      ]
    },
    terms: {
      docId: 'DOC-AI/LGL/2026/TOS-02-SI',
      classification: 'බඳවාගැනීමේ සහ සේවා සැපයීමේ නිල රෙගුලාසි',
      jurisdiction: 'ශ්‍රී ලංකා ප්‍රජාතාන්ත්‍රික සමාජවාදී ජනරජය සහ ජපානය',
      effectiveDate: '2026 නොවැම්බර් 01 (2026/2027 මෙහෙයුම් චක්‍රය)',
      badge: 'රාජ්‍ය ලියාපදිංචි නියාමනය • SLBFE අංක 3293 සහ ජපාන 23登-008312',
      title: 'බඳවාගැනීමේ සහ සේවා සැපයීමේ නිල කොන්දේසි (TERMS & CONDITIONS)',
      subtitle:
        'Atsuko International ආයතනයේ පාඨමාලා හැදෑරීම, සිසු ලියාපදිංචිය, ජපන් රැකියා සහ ශිෂ්‍ය වීසා සේවාවන් සඳහා අදාළ වන බන්ධනීය නෛතික නීති රෙගුලාසි.',
      preamble:
        'මෙම සේවා කොන්දේසි අයදුම්කරු සහ ATSUKO INTERNATIONAL (PVT) LTD ආයතනය අතර නීත්‍යානුකූල ගිවිසුමක් සකසයි. අපගේ ආයතනයට ඇතුළත් වීම හෝ ලේඛන භාරදීම මඟින් ඔබ මෙම කොන්දේසිවලට එකඟ වන බව තහවුරු වේ.',
      sections: [
        {
          id: 'scope',
          num: '01',
          title: 'ආයතනික නෛතික තත්ත්වය සහ රාජ්‍ය බලපත්‍ර',
          body: 'Atsuko International ආයතනය ශ්‍රී ලංකා සහ ජපාන රජයන්හි පූර්ණ අනුමැතිය සහ නියාමනය යටතේ ක්‍රියාත්මක වේ:',
          points: [
            'ශ්‍රී ලංකා බලපත්‍ර: සමාගම් ලියාපදිංචි අංක PV 0217143 | විදේශ සේවා නියුක්ති කාර්යාංශයේ (SLBFE) බලපත්‍ර අංක 3293 | OTIT අනුමත යවන ආයතන අංක LKA000076 | TVEC ලියාපදිංචිය.',
            'ජපාන බලපත්‍ර: 株式会社 Atsuko International (3700-01-048848) | ජපාන අධිකරණ අමාත්‍යාංශයේ ලියාපදිංචි සහාය ආයතන අංක 23登-008312 | රැකියා බලපත්‍ර අංක 04-ユ-300338.',
            'ප්‍රධාන මූලස්ථානය: 191/3/1, සිරිමාවෝ බණ්ඩාරනායක මාවත, මහ store, කඩවත, 11850 ශ්‍රී ලංකාව.'
          ]
        },
        {
          id: 'zero-fee',
          num: '02',
          title: 'අත්තිකාරම් ගාස්තු අය නොකිරීමේ ප්‍රතිපත්තිය සහ ගිණුම් විනිවිදභාවය',
          body: 'SLBFE සහ ජපාන රජයේ නීතිරීතිවලට අනුව සම්පූර්ණ මූල්‍ය විනිවිදභාවය ආරක්ෂා කරමින් අප ආයතනය ක්‍රියාත්මක වේ:',
          points: [
            'වීසා අනුමැතියට පෙර අයකිරීම් නැත: නිල වීසා හෝ COE අනුමැතිය ලැබීමට පෙර කිසිදු රැකියා නියෝජිත ගාස්තුවක් අය නොකෙරේ (ආරම්භක ගාස්තු ශුන්‍යයි - 初期費用ゼロ).',
            'පාඨමාලා සහ විභාග ගාස්තු: ජපන් භාෂා පුහුණුව (JLPT N5 / 50-දින JFT & N4), NVQ 3 සාත්තු සේවා පුහුණුව, නේවාසිකාගාර පහසුකම් සහ නිල විභාග ගාස්තු අයදුම්පතේ සඳහන් නිල ගාස්තු ලේඛනය අනුව අය කෙරේ.',
            'නිල රිසිට්පත්: සියලුම ගෙවීම් Atsuko International නිල බැංකු ගිණුම් වෙත හෝ කඩවත ප්‍රධාන කාර්යාලයේ මුදල් අයකැමි කවුන්ටරය වෙත පමණක් සිදුකළ යුතුය.'
          ]
        },
        {
          id: 'candidate-obligations',
          num: '03',
          title: 'අයදුම්කරුවන්ගේ වගකීම් සහ ලේඛනවල නිවැරදිභාවය',
          body: 'ජපාන ආගමන විගමන කාර්යාංශය විසින් සිදුකරන දැඩි පරීක්ෂාවන් හේතුවෙන් අයදුම්කරුවන් ඉහළම විනයක් සහ අවංකභාවයක් පවත්වාගත යුතුය:',
          points: [
            '100% නිවැරදි ලේඛන: ව්‍යාජ හෝ වෙනස් කරන ලද අධ්‍යාපනික සහ උප්පැන්න/බැංකු ලේඛන ඉදිරිපත් කිරීම සපුරා තහනම්ය. එවැනි ලේඛන ඉදිරිපත් කරන අයදුම්කරුවන්ගේ සේවාවන් වහාම අවලංගු කර SLBFE වෙත සහ පොලිසිය වෙත වාර්තා කරනු ලැබේ.',
            'පන්ති පැමිණීම: සිසුන් අවම වශයෙන් 90% ක පන්ති පැමිණීමක් සහ අභ්‍යන්තර විභාගවලින් නියමිත ලකුණු මට්ටම ලබාගත යුතුය.',
            'මූලික අධ්‍යාපන සුදුසුකම්: SSW සාත්තු සේවා (Kaigo) පාඨමාලා සඳහා අයදුම්කරුවන් අ.පො.ස. උසස් පෙළ (A/L) දක්වා පාසල් අධ්‍යාපනය ලබා තිබීම අනිවාර්ය වේ.'
          ]
        },
        {
          id: 'immigration-disclaimer',
          num: '04',
          title: 'වීසා සහ ආගමන විගමන නීතිමය සීමාවන්',
          body: 'අප ආයතනය නිවැරදිම නීතිමය ලියකියවිලි සකස් කර උපරිම සහාය ලබාදුන්නද, වීසා තීරණ පිළිබඳව පහත නීතිමය යථාර්ථයන් පිළිගත යුතුය:',
          points: [
            'රජයන් සතු පරමාධිපත්‍ය බලය: වීසා හෝ Certificate of Eligibility (COE) ලබාදීම හෝ ප්‍රතික්ෂේප කිරීමේ පූර්ණ බලය ජපාන රජයේ ආගමන විගමන කාර්යාංශය සහ කොළඹ ජපන් තානාපති කාර්යාලය සතු වේ.',
            'සේවායෝජකයන්ගේ තේරීම: SSW සහ TITP රැකියා සඳහා තෝරාගැනීම සිදුකරනු ලබන්නේ ජපානයේ අදාළ රෝහල්, හෝටල්, හෝ ආයතන මඟින් පවත්වන සම්මුඛ පරීක්ෂණ අනුවය.',
            'නීතිමය වෙනස්කම්: දෙරටේ රජයන් විසින් ගනු ලබන ප්‍රතිපත්තිමය වෙනස්කම් අනුව කාලසීමාවන් වෙනස් විය හැකිය.'
          ]
        },
        {
          id: 'intellectual-property',
          num: '05',
          title: 'බුද්ධිමය දේපළ සහ බලපත්‍ර අනිසි භාවිතය තහනම් කිරීම',
          body: 'මෙම වෙබ් අඩවියේ ඇති ලාංඡන, පාඨමාලා විස්තර, ඡායාරූප සහ රජයේ නිල බලපත්‍ර සහතිකවල ඩිජිටල් පිටපත් Atsuko International සතු බුද්ධිමය දේපළ වේ:',
          points: [
            'බලපත්‍ර අවභාවිතය අපරාධයකි: අපගේ SLBFE අංක 3293 හෝ ජපාන බලපත්‍ර තොරතුරු screenshot කර වෙනත් තැරැව්කරුවන් හෝ ප්‍රවර්ධන කටයුතු සඳහා භාවිත කිරීම නීතියෙන් දඬුවම් ලැබිය හැකි වරදකි.',
            'වෙබ් ආරක්ෂාව: වෙබ් අඩවියේ තොරතුරු ස්වයංක්‍රීයව සොරකම් කිරීම (scraping) පරිගණක අපරාධ පනත යටතේ නඩු පැවරීමට හේතු වේ.'
          ]
        },
        {
          id: 'governing-law',
          num: '06',
          title: 'අදාළ නීතිය සහ ආරවුල් විසඳීම',
          body: 'මෙම සේවා කොන්දේසි ශ්‍රී ලංකා සහ ජපාන නීති රාමුවට අනුව ක්‍රියාත්මක වේ:',
          points: [
            'ශ්‍රී ලංකාවේ මෙහෙයුම්: 1985 අංක 21 දරන විදේශ සේවා නියුක්ති කාර්යාංශ පනත ඇතුළු ශ්‍රී ලංකා නීතියට යටත් වේ.',
            'ජපානයේ මෙහෙයුම්: 株式会社 Atsuko International හරහා ජපානයේදී සපයන සියලුම සේවාවන් ජපාන නීතියට යටත් වේ.',
            'සමථකරණය: යම් ගැටලුවක් මතු වුවහොත් කඩවත ප්‍රධාන කාර්යාලය හෝ SLBFE සමථකරණ ක්‍රමවේදය ඔස්සේ විසඳා ගැනීමට එකඟ වේ.'
          ]
        }
      ]
    }
  },
  jp: {
    privacy: {
      docId: 'DOC-AI/LGL/2026/POL-01-JP',
      classification: '個人情報保護方針および特定技能・留学取扱規程',
      jurisdiction: 'スリランカ民主社会主義共和国および日本国',
      effectiveDate: '2026年11月01日（2026/2027業務年度）',
      badge: '法定遵守基準 • スリランカ個人データ保護法 (PDPA) および日本国個人情報保護法 (APPI)',
      title: '個人情報保護方針（プライバシーポリシー）',
      subtitle:
        'Atsuko International (PVT) LTD および 株式会社 Atsuko International による個人データの取得、適正管理、越境移転、および安全管理措置に関する公認規程。',
      preamble:
        '本方針は、スリランカ個人データ保護法（PDPA 2022年第9号）および日本国「個人情報の保護に関する法律（APPI）」に基づき策定された公的取扱基準です。当機関の受講生、求職者、および関係機関は、本規程に定められた権利および安全管理体制に服するものとします。',
      sections: [
        {
          id: 'controller',
          num: '01',
          title: '個人情報取扱事業者および両国における法的資格',
          body: '本方針は、スリランカ会社法に基づき設立され（登記番号 PV 0217143）、スリランカ海外雇用局（SLBFE 認可番号 3293）および外国人技能実習機構（OTIT 送出機関ID: LKA000076）の許認可を有する ATSUKO INTERNATIONAL (PVT) LTD、ならびに日本法人 株式会社 Atsuko International（法人番号 3700-01-048848、登録支援機関番号 23登-008312、有料職業紹介事業許可番号 04-ユ-300338）に適用されます。',
          points: [
            'スリランカ本部：191/3/1, Sirimavo Bandaranayake Road, Mahara, Kadawatha, 11850 Sri Lanka.',
            '日本事務所：〒485-0041 愛知県小牧市小牧2-41 サンシャイン小牧棟 2階西号室。',
            '両国の法体制に基づき、出願者および特定技能・技能実習・留学生の個人データを一体的かつ厳格に管理します。'
          ]
        },
        {
          id: 'collection',
          num: '02',
          title: '取得する個人情報の項目',
          body: '取得する個人情報は、日本語教育の提供、受講生の能力評価、ならびに在留資格認定証明書（COE）交付申請、査証（ビザ）手続、適正な職業紹介業務に必要な範囲に厳格に限定されます：',
          points: [
            '基本識別・連絡先情報：氏名、生年月日、住所、電話・WhatsApp番号、メールアドレス、国民身分証（NIC）、パスポート旅券情報。',
            '学歴・公的試験成績：G.C.E. O/L・A/L卒業成績証明書、日本語能力試験（JLPT N5〜N1、JFT-Basic）、特定技能評価試験（プロメトリック介護・外食・宿泊・農業）、NVQ修了証明書。',
            '入管・公的申請書類：COE交付申請書、経費支弁書、残高証明書、健康診断書、無犯罪経歴証明書、SLBFE登録書類一式。',
            '技術的安全ログ：サイト上の公認ライセンス画像の不正転載・改ざんを防止するためのアクセスログおよび端末言語情報。'
          ]
        },
        {
          id: 'purpose',
          num: '03',
          title: '個人情報の利用目的',
          body: '個人情報は、両国の移民管理法規および教育契約に基づく正当な目的のみに利用されます：',
          points: [
            '教育・技能研修運営：日本語講座、介護実技模擬演習、CBTプロメトリック試験対策講座の受講手配および進捗管理。',
            '公的申請・査証手続：日本の出入国在留管理庁、在スリランカ日本国大使館、OTIT、およびスリランカ海外雇用局（SLBFE）への申請取次。',
            '受入企業への適正紹介および登録支援：特定技能受入企業（病院、社会福祉法人、外食・農業事業者等）への求職者紹介、面接手配、および小牧拠点を通じた入国後支援計画の実施。',
            '金融・渡航ローン手続支援：希望者に対する提携金融機関の教育・渡航資金手続の書類整備支援。'
          ]
        },
        {
          id: 'cross-border',
          num: '04',
          title: '越境データ移転（スリランカ ↔ 日本）',
          body: '日本への合法的な留学および就労を実現するため、応募者の書類データはスリランカ本部と日本現地法人および日本国内の関係機関との間で安全に通信されます：',
          points: [
            '提供先：提携日本語教育機関、専門学校、大学、特定技能受入機関、監理団体。',
            '公的機関：出入国在留管理庁、日本国大使館、OTIT、SLBFE。',
            '無許可第三者提供・販売の禁止：マーケティング業者や非公認ブローカーへの個人データ提供や売却は一切行いません。'
          ]
        },
        {
          id: 'security',
          num: '05',
          title: '安全管理措置および法定保管期間',
          body: '漏えい・滅失・改ざんを防止するため、カダワタ本校および小牧事務所において高度な安全管理措置を講じています：',
          points: [
            '物理的保管：原本書類は施錠された法務専用書庫にて厳重に保管されます。',
            '電子的防護：暗号化TLS/HTTPS通信およびCSP（Content Security Policy）による保護を実施。',
            '法定保管期間：SLBFE法および日本国出入国管理法が定める期間経過後、安全かつ復元不可能な方法で廃棄消去します。'
          ]
        },
        {
          id: 'rights',
          num: '06',
          title: '保有個人データに関する開示・訂正・利用停止等の請求権',
          body: 'スリランカPDPAおよび日本国個人情報保護法に基づき、ご本人には以下の正当な権利が保障されています：',
          points: [
            '開示および訂正請求：保有個人データの開示を求め、誤りがある場合には直ちに訂正を求める権利。',
            '利用停止および消去請求：法定保存義務に反しない範囲において、利用停止または消去を求める権利。',
            '窓口：法務コンプライアンス担当窓口（info@atsukointernational.com）までご連絡ください。'
          ]
        }
      ]
    },
    terms: {
      docId: 'DOC-AI/LGL/2026/TOS-02-JP',
      classification: '公認業務取扱規程および受講生・求職者遵守規程',
      jurisdiction: 'スリランカ民主社会主義共和国および日本国',
      effectiveDate: '2026年11月01日（2026/2027業務年度）',
      badge: '公的監督規制 • SLBFE認可 #3293 および 日本国登録支援機関 23登-008312',
      title: '利用規約・受講生および求職者遵守規程 (TERMS & CONDITIONS)',
      subtitle:
        'Atsuko International (PVT) LTD による日本語研修受講、在留資格申請取次、および海外職業紹介業務に関する基本契約規程。',
      preamble:
        '本利用規約は、申込者と ATSUKO INTERNATIONAL (PVT) LTD との間の法的合意を形成するものです。研修コースへの入学、願書・申請書類の提出、または当機関の海外就労支援サービスの利用をもって、本規程のすべての条項に同意したものとみなされます。',
      sections: [
        {
          id: 'scope',
          num: '01',
          title: '公認法人資格および両国政府許認可',
          body: '当機関は、スリランカおよび日本国両政府の直接の監督下で適正に運営されています：',
          points: [
            'スリランカ認可：法人番号 PV 0217143 ｜ スリランカ海外雇用局（SLBFE）認可番号 3293 ｜ 外国人技能実習機構（OTIT）認定送出機関 LKA000076 ｜ TVEC登録職業訓練機関。',
            '日本国認可：株式会社 Atsuko International（法人番号 3700-01-048848）｜ 法務省・出入国在留管理庁 登録支援機関番号 23登-008312 ｜ 厚生労働大臣許可 有料職業紹介事業 04-ユ-300338。',
            '本部所在地：191/3/1, Sirimavo Bandaranayake Road, Mahara, Kadawatha, 11850 Sri Lanka.'
          ]
        },
        {
          id: 'zero-fee',
          num: '02',
          title: '初期費用ゼロ方針および完全な会計透明性',
          body: '当機関は、SLBFE規定および日本の職業安定法・技能実習・特定技能関連法令を遵守し、不当な費用の徴収を厳格に排除しています：',
          points: [
            'ビザ・COE承認前の紹介料徴収なし：公式な査証・COE交付承認前に、求職者から就職斡旋費用を徴収することは一切ありません（初期費用ゼロ — 初期負担なく挑戦可能）。',
            '受講料および公的受験料：日本語講座（JLPT N5、50日間JFT/N4特訓）、NVQ介護実技研修、学生寮利用料、および各種公的試験（JLPT、JFT、プロメトリック）の受験料は、入学案内書に明記された公式料金表に従って請求されます。',
            '公式領収証の交付：すべてのお支払いは、当機関の公式銀行口座またはカダワタ本校の会計窓口にて公式領収書と引き換えに行われます。'
          ]
        },
        {
          id: 'candidate-obligations',
          num: '03',
          title: '受講生・求職者の遵守事項および真正性確保義務',
          body: '出入国在留管理庁による厳格な審査を通過するため、受講生および求職者は極めて高度な倫理規範を遵守しなければなりません：',
          points: [
            '虚偽書類の厳禁：学歴証明書、身分関係書類、経費支弁書類等はすべて100%真正なものでなければなりません。偽造や虚偽申告が判明した場合は直ちに手続を打ち切り、SLBFEおよび司法当局へ通報します。',
            '出席率と学業規律：受講生は90%以上の出席率を維持し、内規の定期評価試験において合格水準を達成する義務を負います。',
            '基礎学歴要件：特定技能「介護」等の出願者は、法令および募集基準に定められた G.C.E. A/L（高校相当）修了要件を満たしている必要があります。'
          ]
        },
        {
          id: 'immigration-disclaimer',
          num: '04',
          title: '入管審査の専権性および採用選考に関する免責',
          body: '当機関は最大限の合法的支援を提供しますが、入国査証および採用の性質に関する以下の事項をあらかじめ了承するものとします：',
          points: [
            '国家主権に基づく裁量権：在留資格認定証明書（COE）および査証（ビザ）の発給可否は、日本国出入国在留管理庁および在スリランカ日本国大使館の主権に基づく専権判断事項です。',
            '企業の採用権限：特定技能および技能実習の採用内定は、受入企業による面接（Mensetsu）選考結果に基づきます。',
            '制度改定：両国政府の協定改正や政策改定により、所要期間や受入基準が変更される場合があります。'
          ]
        },
        {
          id: 'intellectual-property',
          num: '05',
          title: '知的財産権および公的許可証の偽造・無断転載禁止',
          body: '当ウェブサイトに掲載されているロゴマーク、カリキュラム教材、写真、動画、ならびに公的許可証（SLBFE 3293、登記証、登録支援機関証書等）の権利は当機関に帰属します：',
          points: [
            '公的許可証の不正利用は重罪：許可証画像を無断で保存・加工し、無許可ブローカー業務や詐欺的勧誘に利用する行為は刑事罰の対象であり、両国の法律に基づき厳正に対処します。',
            '電子的保護：サイトの自動スクレイピングや保護ビューアの無断回避は電磁的記録不正作出等の法令に基づき処罰されます。'
          ]
        },
        {
          id: 'governing-law',
          num: '06',
          title: '準拠法、調停および合意管轄',
          body: '本規約の解釈および適用は、スリランカおよび日本国の関係法令に準拠します：',
          points: [
            'スリランカ国内業務：1985年スリランカ海外雇用局法第21号を含むスリランカ法に準拠。',
            '日本国内業務：株式会社 Atsuko International が提供する生活オリエンテーションおよび登録支援業務は日本国法令に準拠。',
            '円満協議：疑義が生じた場合は、まずカダワタ本部または小牧事務所において誠実に協議し、SLBFE調停手続に従って解決を図るものとします。'
          ]
        }
      ]
    }
  }
};

export default function LegalPage({ lang = 'en', setLang, initialTab = 'privacy', onNavigate, onOpenModal }) {
  const [activeTab, setActiveTab] = useState(initialTab === 'terms' ? 'terms' : 'privacy');

  useEffect(() => {
    setActiveTab(initialTab === 'terms' ? 'terms' : 'privacy');
  }, [initialTab]);

  const langKey = lang === 'si' ? 'si' : lang === 'jp' || lang === 'ja' ? 'jp' : 'en';
  const doc = LEGAL_CONTENT[langKey][activeTab];

  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
    if (onNavigate) {
      onNavigate(tab);
    }
  };

  const handleReturnToSite = () => {
    if (onNavigate) {
      onNavigate('home');
    } else {
      window.location.hash = 'home';
    }
  };

  return (
    <div className="legal-doc-environment">
      {/* SCOPED COMPONENT STYLING FOR AUTHENTIC DOCUMENT APPEARANCE */}
      <style>{`
        .legal-doc-environment {
          min-height: 100vh;
          background-color: #eaeff4;
          background-image: 
            linear-gradient(rgba(15, 23, 42, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15, 23, 42, 0.03) 1px, transparent 1px);
          background-size: 32px 32px;
          color: #1e293b;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
          padding-bottom: 5rem;
          margin: 0;
        }

        /* 1. DOCUMENT VIEWER TOOLBAR (Fixed / Sticky at Top) */
        .legal-doc-toolbar {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: #ffffff;
          border-bottom: 1px solid #d1d9e0;
          box-shadow: 0 4px 16px rgba(15, 23, 42, 0.06);
          padding: 0.65rem 1.25rem;
        }

        .legal-doc-toolbar-inner {
          max-width: 1140px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .legal-doc-toolbar-left {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .legal-doc-btn-return {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: #f1f5f9;
          color: #0f172a;
          border: 1px solid #cbd5e1;
          padding: 0.45rem 0.95rem;
          border-radius: 6px;
          font-weight: 700;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.2s ease;
          text-decoration: none;
        }

        .legal-doc-btn-return:hover {
          background: #0284c7;
          color: #ffffff;
          border-color: #0284c7;
          box-shadow: 0 2px 8px rgba(2, 132, 199, 0.25);
        }

        .legal-doc-pill-statutory {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.78rem;
          font-weight: 700;
          color: #047857;
          background: #ecfdf5;
          padding: 0.3rem 0.75rem;
          border-radius: 9999px;
          border: 1px solid #a7f3d0;
        }

        /* Segmented Document Switcher in Toolbar */
        .legal-doc-tab-switcher {
          display: inline-flex;
          background: #f1f5f9;
          padding: 3px;
          border-radius: 8px;
          border: 1px solid #e2e8f0;
          gap: 3px;
        }

        .legal-doc-tab-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.45rem 1rem;
          border-radius: 6px;
          border: none;
          font-size: 0.84rem;
          font-weight: 700;
          cursor: pointer;
          background: transparent;
          color: #475569;
          transition: all 0.18s ease;
        }

        .legal-doc-tab-btn.active {
          background: #0f172a;
          color: #ffffff;
          box-shadow: 0 2px 6px rgba(15, 23, 42, 0.15);
        }

        .legal-doc-toolbar-right {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }

        .legal-doc-lang-pills {
          display: inline-flex;
          background: #f8fafc;
          border: 1px solid #cbd5e1;
          border-radius: 6px;
          overflow: hidden;
        }

        .legal-doc-lang-btn {
          border: none;
          background: transparent;
          padding: 0.4rem 0.65rem;
          font-size: 0.78rem;
          font-weight: 700;
          color: #475569;
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .legal-doc-lang-btn.active {
          background: #0284c7;
          color: #ffffff;
        }

        .legal-doc-btn-print {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: #ffffff;
          border: 1px solid #cbd5e1;
          color: #1e293b;
          padding: 0.45rem 0.85rem;
          border-radius: 6px;
          font-size: 0.82rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .legal-doc-btn-print:hover {
          background: #f8fafc;
          border-color: #94a3b8;
          color: #0f172a;
        }

        /* 2. THE DOCUMENT PAPER SHEET (Authentic Government Document Look) */
        .legal-doc-paper-container {
          max-width: 900px;
          margin: 2.25rem auto 3rem auto;
          padding: 0 1rem;
        }

        .legal-doc-paper {
          background: #ffffff;
          border: 1px solid #cbd5e1;
          border-radius: 4px;
          box-shadow: 
            0 4px 6px -1px rgba(15, 23, 42, 0.05),
            0 20px 45px -4px rgba(15, 23, 42, 0.12),
            0 0 0 1px rgba(15, 23, 42, 0.04);
          padding: clamp(2rem, 5vw, 4.25rem) clamp(1.5rem, 4vw, 3.75rem);
          position: relative;
        }

        /* Subtle Watermark on Paper */
        .legal-doc-watermark {
          position: absolute;
          top: 45%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(-35deg);
          font-size: 4.5rem;
          font-weight: 900;
          letter-spacing: 0.25em;
          color: rgba(15, 23, 42, 0.022);
          pointer-events: none;
          text-transform: uppercase;
          white-space: nowrap;
          user-select: none;
          z-index: 1;
        }

        /* 3. FORMAL LETTERHEAD */
        .legal-letterhead {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1.5rem;
          padding-bottom: 1.25rem;
          position: relative;
          z-index: 2;
        }

        .legal-letterhead-left {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .legal-letterhead-emblem {
          width: 72px;
          height: 72px;
          object-fit: contain;
          flex-shrink: 0;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
        }

        .legal-letterhead-titles h1 {
          font-family: "Georgia", "Cambria", "Times New Roman", serif;
          font-size: clamp(1.2rem, 2.3vw, 1.55rem);
          font-weight: 800;
          color: #0f172a;
          margin: 0;
          letter-spacing: -0.01em;
          line-height: 1.25;
        }

        .legal-letterhead-kanji {
          font-size: 0.92rem;
          font-weight: 700;
          color: #0284c7;
          margin-top: 2px;
          letter-spacing: 0.05em;
        }

        .legal-letterhead-creds {
          font-size: 0.77rem;
          color: #475569;
          margin-top: 4px;
          line-height: 1.5;
        }

        /* Right Stamp Box */
        .legal-letterhead-stamp {
          flex-shrink: 0;
        }

        .legal-official-stamp-box {
          border: 2px solid #0f172a;
          padding: 6px 12px;
          text-align: center;
          background: #f8fafc;
          border-radius: 3px;
        }

        .legal-official-stamp-box .stamp-top {
          display: block;
          font-size: 0.62rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          color: #64748b;
          text-transform: uppercase;
        }

        .legal-official-stamp-box .stamp-mid {
          display: block;
          font-size: 0.85rem;
          font-weight: 900;
          color: #0f172a;
          margin: 1px 0;
        }

        .legal-official-stamp-box .stamp-bot {
          display: block;
          font-size: 0.65rem;
          font-weight: 700;
          color: #047857;
        }

        /* Classical Legal Double Rule */
        .legal-double-rule {
          margin: 0.75rem 0 1.75rem 0;
          position: relative;
          z-index: 2;
        }

        .legal-rule-thick {
          height: 3px;
          background: #0f172a;
          width: 100%;
        }

        .legal-rule-thin {
          height: 1px;
          background: #94a3b8;
          width: 100%;
          margin-top: 2px;
        }

        /* 4. FORMAL METADATA BOX */
        .legal-metadata-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 0.75rem;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 4px;
          padding: 0.85rem 1rem;
          margin-bottom: 2rem;
          font-size: 0.82rem;
          position: relative;
          z-index: 2;
        }

        .legal-meta-item strong {
          display: block;
          font-size: 0.68rem;
          font-weight: 800;
          text-transform: uppercase;
          color: #64748b;
          letter-spacing: 0.05em;
          margin-bottom: 2px;
        }

        .legal-meta-item span {
          color: #0f172a;
          font-weight: 600;
        }

        /* 5. DOCUMENT TITLE & PREAMBLE */
        .legal-doc-title-block {
          text-align: center;
          margin-bottom: 2rem;
          position: relative;
          z-index: 2;
        }

        .legal-doc-title-block h2 {
          font-family: "Georgia", "Cambria", "Times New Roman", serif;
          font-size: clamp(1.35rem, 2.5vw, 1.85rem);
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 0.5rem 0;
          letter-spacing: -0.01em;
          text-transform: uppercase;
        }

        .legal-doc-title-block p {
          font-size: 0.95rem;
          color: #475569;
          max-width: 760px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .legal-preamble-box {
          background: #f1f5f9;
          border-left: 4px solid #0284c7;
          padding: 1rem 1.25rem;
          margin: 1.5rem 0 2.5rem 0;
          border-radius: 0 4px 4px 0;
          font-size: 0.92rem;
          color: #334155;
          line-height: 1.7;
          font-style: italic;
          position: relative;
          z-index: 2;
        }

        /* 6. LEGAL ARTICLES & SECTIONS */
        .legal-articles-container {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          position: relative;
          z-index: 2;
        }

        .legal-doc-article {
          padding-bottom: 1.5rem;
          border-bottom: 1px dashed #cbd5e1;
        }

        .legal-doc-article:last-of-type {
          border-bottom: none;
          padding-bottom: 0;
        }

        .legal-article-heading-row {
          display: flex;
          align-items: baseline;
          gap: 0.65rem;
          margin-bottom: 0.75rem;
        }

        .legal-article-badge {
          font-family: "Georgia", "Times New Roman", serif;
          font-size: 0.85rem;
          font-weight: 800;
          color: #0284c7;
          background: #e0f2fe;
          padding: 0.15rem 0.55rem;
          border-radius: 3px;
          border: 1px solid #bae6fd;
          letter-spacing: 0.05em;
        }

        .legal-doc-article h3 {
          font-family: "Georgia", "Cambria", "Times New Roman", serif;
          font-size: clamp(1.05rem, 1.8vw, 1.25rem);
          font-weight: 800;
          color: #0f172a;
          margin: 0;
          line-height: 1.4;
        }

        .legal-article-lead {
          font-size: 0.95rem;
          line-height: 1.75;
          color: #334155;
          margin-bottom: 0.9rem;
          text-align: justify;
        }

        .legal-clauses-list {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          margin: 0;
          padding-left: 0.25rem;
        }

        .legal-clause-item {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: 0.91rem;
          line-height: 1.65;
          color: #1e293b;
        }

        .legal-clause-sym {
          font-family: "Georgia", "Times New Roman", serif;
          font-size: 0.82rem;
          font-weight: 800;
          color: #0284c7;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          padding: 0.1rem 0.4rem;
          border-radius: 3px;
          flex-shrink: 0;
          margin-top: 2px;
        }

        /* 7. STATUTORY HIGHLIGHT CALLOUT BOXES */
        .legal-statutory-callout {
          background: #fefce8;
          border: 1px solid #fde047;
          border-left: 4px solid #ca8a04;
          border-radius: 4px;
          padding: 1.15rem 1.35rem;
          margin: 2rem 0;
          position: relative;
          z-index: 2;
        }

        .legal-statutory-callout-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.88rem;
          font-weight: 800;
          color: #854d0e;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin-bottom: 0.45rem;
        }

        .legal-statutory-callout p {
          font-size: 0.88rem;
          color: #713f12;
          line-height: 1.65;
          margin: 0;
        }

        /* 8. FORMAL CORPORATE EXECUTION & SEAL BLOCK */
        .legal-execution-container {
          margin-top: 3.5rem;
          padding-top: 2rem;
          border-top: 2px solid #0f172a;
          position: relative;
          z-index: 2;
        }

        .legal-execution-preamble {
          font-size: 0.82rem;
          font-style: italic;
          color: #64748b;
          text-align: center;
          margin-bottom: 2rem;
        }

        .legal-signatories-row {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 1.5rem;
        }

        @media (max-width: 640px) {
          .legal-signatories-row {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 2rem;
          }
        }

        .legal-sig-col {
          display: flex;
          flex-direction: column;
        }

        .legal-sig-line {
          height: 1px;
          background: #0f172a;
          margin-bottom: 0.75rem;
          width: 85%;
        }

        @media (max-width: 640px) {
          .legal-sig-line {
            margin: 0 auto 0.75rem auto;
          }
        }

        .legal-sig-title {
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          color: #64748b;
          letter-spacing: 0.04em;
        }

        .legal-sig-org {
          font-size: 0.95rem;
          font-weight: 800;
          color: #0f172a;
          margin: 2px 0;
        }

        .legal-sig-creds {
          font-size: 0.75rem;
          color: #475569;
          line-height: 1.45;
        }

        /* Official Corporate Seal Badge */
        .legal-seal-center {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .legal-seal-graphic {
          width: 104px;
          height: 104px;
          border: 3px double #b91c1c;
          border-radius: 50%;
          padding: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: rotate(-10deg);
          box-shadow: 0 2px 8px rgba(185, 28, 28, 0.15);
        }

        .legal-seal-inner {
          width: 100%;
          height: 100%;
          border: 1px dashed #b91c1c;
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: #b91c1c;
          padding: 2px;
        }

        .seal-star-top {
          font-size: 0.55rem;
          font-weight: 800;
          letter-spacing: 0.05em;
        }

        .seal-main-text {
          font-family: "Georgia", "Times New Roman", serif;
          font-size: 0.76rem;
          font-weight: 900;
          line-height: 1.1;
          margin: 1px 0;
        }

        .seal-code {
          font-size: 0.65rem;
          font-weight: 800;
        }

        .seal-bot-text {
          font-size: 0.55rem;
          font-weight: 700;
          text-transform: uppercase;
        }

        /* Formal Document Footer Notice */
        .legal-doc-footer-notice {
          margin-top: 2.5rem;
          padding-top: 1rem;
          border-top: 1px solid #e2e8f0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.5rem;
          font-size: 0.72rem;
          color: #94a3b8;
        }

        /* 9. BOTTOM ACTION BAR (External to Paper, hidden on print) */
        .legal-doc-bottom-actions {
          max-width: 900px;
          margin: 1.5rem auto 0 auto;
          padding: 0 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .legal-doc-action-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #0f172a;
          color: #ffffff;
          padding: 0.65rem 1.35rem;
          border-radius: 6px;
          border: none;
          font-size: 0.88rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .legal-doc-action-btn-primary:hover {
          background: #0284c7;
          box-shadow: 0 4px 14px rgba(2, 132, 199, 0.3);
        }

        .legal-doc-action-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #ffffff;
          color: #0f172a;
          padding: 0.65rem 1.35rem;
          border-radius: 6px;
          border: 1px solid #cbd5e1;
          font-size: 0.88rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .legal-doc-action-btn-secondary:hover {
          background: #f1f5f9;
          border-color: #94a3b8;
        }

        /* PRINT STYLES: Crisp White Paper Output */
        @media print {
          .legal-doc-toolbar,
          .legal-doc-bottom-actions {
            display: none !important;
          }

          .legal-doc-environment {
            background: #ffffff !important;
            padding: 0 !important;
          }

          .legal-doc-paper-container {
            max-width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
          }

          .legal-doc-paper {
            border: none !important;
            box-shadow: none !important;
            padding: 1cm !important;
          }

          .legal-doc-watermark {
            display: none !important;
          }
        }
      `}</style>

      {/* 1. DOCUMENT VIEWER FLOATING CONTROL TOOLBAR */}
      <header className="legal-doc-toolbar" role="region" aria-label="Document Viewer Controls">
        <div className="legal-doc-toolbar-inner">
          <div className="legal-doc-toolbar-left">
            <button
              type="button"
              onClick={handleReturnToSite}
              className="legal-doc-btn-return"
              aria-label="Return to Main Website"
            >
              <ArrowLeft size={16} aria-hidden="true" />
              <span>{langKey === 'si' ? 'වෙබ් අඩවියට ආපසු' : langKey === 'jp' ? 'ウェブサイトに戻る' : 'Return to Website'}</span>
            </button>

            <span className="legal-doc-pill-statutory">
              <ShieldCheck size={14} aria-hidden="true" />
              <span>{langKey === 'si' ? 'නිල රාජ්‍ය ලියාපදිංචි ලේඛනය' : langKey === 'jp' ? '公認規約文書' : 'Official Statutory Document'}</span>
            </span>
          </div>

          {/* Segmented Document Switcher */}
          <div className="legal-doc-tab-switcher" role="tablist" aria-label="Legal Document Selection">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'privacy'}
              onClick={() => handleTabSwitch('privacy')}
              className={`legal-doc-tab-btn ${activeTab === 'privacy' ? 'active' : ''}`}
            >
              <Lock size={14} aria-hidden="true" />
              <span>{langKey === 'si' ? 'පෞද්ගලිකත්ව ප්‍රතිපත්තිය' : langKey === 'jp' ? 'プライバシーポリシー' : 'Privacy Policy'}</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'terms'}
              onClick={() => handleTabSwitch('terms')}
              className={`legal-doc-tab-btn ${activeTab === 'terms' ? 'active' : ''}`}
            >
              <FileText size={14} aria-hidden="true" />
              <span>{langKey === 'si' ? 'සේවා කොන්දේසි' : langKey === 'jp' ? '利用規約' : 'Terms & Conditions'}</span>
            </button>
          </div>

          <div className="legal-doc-toolbar-right">
            {/* Trilingual Switcher */}
            <div className="legal-doc-lang-pills" role="group" aria-label="Language Selector">
              <button
                type="button"
                className={`legal-doc-lang-btn ${langKey === 'en' ? 'active' : ''}`}
                onClick={() => setLang && setLang('en')}
              >
                EN
              </button>
              <button
                type="button"
                className={`legal-doc-lang-btn ${langKey === 'si' ? 'active' : ''}`}
                onClick={() => setLang && setLang('si')}
              >
                සිංහල
              </button>
              <button
                type="button"
                className={`legal-doc-lang-btn ${langKey === 'jp' ? 'active' : ''}`}
                onClick={() => setLang && setLang('jp')}
              >
                日本語
              </button>
            </div>

            {/* Print / Save PDF Button */}
            <button
              type="button"
              onClick={() => window.print()}
              className="legal-doc-btn-print"
              title="Print document or save as PDF"
            >
              <Printer size={15} aria-hidden="true" />
              <span>{langKey === 'si' ? 'මුද්‍රණය' : langKey === 'jp' ? '印刷' : 'Print / PDF'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* 2. THE DOCUMENT PAPER SHEET */}
      <main className="legal-doc-paper-container">
        <article className="legal-doc-paper">
          {/* Paper Background Watermark */}
          <div className="legal-doc-watermark" aria-hidden="true">
            ATSUKO • SLBFE 3293
          </div>

          {/* 3. OFFICIAL CORPORATE LETTERHEAD */}
          <div className="legal-letterhead">
            <div className="legal-letterhead-left">
              <img
                src="/images/atsuko-official-logo.png"
                alt="Atsuko International Official Emblem"
                className="legal-letterhead-emblem"
              />
              <div className="legal-letterhead-titles">
                <h1>ATSUKO INTERNATIONAL (PVT) LTD</h1>
                <div className="legal-letterhead-kanji">篤子 学校 • ATSUKO GAKKO</div>
                <div className="legal-letterhead-creds">
                  <div><strong>Sri Lanka:</strong> Reg. No: PV 0217143 | SLBFE Lic. No: 3293 | OTIT ID: LKA000076 | TVEC Reg.</div>
                  <div><strong>Japan:</strong> 株式会社 Atsuko International | 登録支援機関: 23登-008312 | 職業紹介: 04-ユ-300338</div>
                  <div><strong>Head Center:</strong> 191/3/1, Sirimavo Bandaranayake Road, Mahara, Kadawatha, 11850 Sri Lanka.</div>
                </div>
              </div>
            </div>

            <div className="legal-letterhead-stamp">
              <div className="legal-official-stamp-box">
                <span className="stamp-top">Official Document</span>
                <span className="stamp-mid">SLBFE #3293</span>
                <span className="stamp-bot">Duly Ratified</span>
              </div>
            </div>
          </div>

          {/* Classical Double Rule */}
          <div className="legal-double-rule" aria-hidden="true">
            <div className="legal-rule-thick"></div>
            <div className="legal-rule-thin"></div>
          </div>

          {/* 4. DOCUMENT METADATA GRID */}
          <div className="legal-metadata-grid">
            <div className="legal-meta-item">
              <strong>Document Reference</strong>
              <span>{doc.docId}</span>
            </div>
            <div className="legal-meta-item">
              <strong>Statutory Classification</strong>
              <span>{doc.classification}</span>
            </div>
            <div className="legal-meta-item">
              <strong>Governing Jurisdiction</strong>
              <span>{doc.jurisdiction}</span>
            </div>
            <div className="legal-meta-item">
              <strong>Effective Promulgation</strong>
              <span>{doc.effectiveDate}</span>
            </div>
          </div>

          {/* 5. FORMAL TITLE & PREAMBLE */}
          <div className="legal-doc-title-block">
            <h2>{doc.title}</h2>
            <p>{doc.subtitle}</p>
          </div>

          <div className="legal-preamble-box">
            {doc.preamble}
          </div>

          {/* 6. CODIFIED ARTICLES */}
          <div className="legal-articles-container">
            {doc.sections.map((sec) => (
              <section key={sec.id} id={sec.id} className="legal-doc-article">
                <div className="legal-article-heading-row">
                  <span className="legal-article-badge">ARTICLE {sec.num}.0</span>
                  <h3>{sec.title}</h3>
                </div>

                <p className="legal-article-lead">{sec.body}</p>

                <div className="legal-clauses-list">
                  {sec.points.map((pt, idx) => (
                    <div key={idx} className="legal-clause-item">
                      <span className="legal-clause-sym">§ {sec.num}.{idx + 1}</span>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* 7. STATUTORY HIGHLIGHT CALLOUT BOX */}
          {activeTab === 'privacy' ? (
            <div className="legal-statutory-callout">
              <div className="legal-statutory-callout-header">
                <ShieldCheck size={18} aria-hidden="true" />
                <span>Statutory Notice on Candidate Dossier Protection</span>
              </div>
              <p>
                Under Section 26 of the Sri Lanka Personal Data Protection Act (PDPA) No. 9 of 2022 and Article 28 of the Japan Act on the Protection of Personal Information (APPI), Atsuko International strictly guarantees that candidate dossiers are transferred solely for legitimate immigration petitions, academic enrolments, and authorized accepting employer matching. Commercial sale, data brokerage, or disclosure to unauthorized third parties is strictly prohibited and subject to legal prosecution.
              </p>
            </div>
          ) : (
            <div className="legal-statutory-callout">
              <div className="legal-statutory-callout-header">
                <AlertTriangle size={18} aria-hidden="true" />
                <span>Zero Advance Placement Fee & Anti-Fraud Notice</span>
              </div>
              <p>
                In strict compliance with the Sri Lanka Bureau of Foreign Employment (SLBFE) Act No. 21 of 1985 and Japanese immigration directives, Atsuko International collects zero placement fees prior to Certificate of Eligibility (COE) and visa approvals (初期費用ゼロ). Candidates are strictly warned never to hand cash or personal documents to unauthorized sub-agents or third-party intermediaries. All registrations must occur directly through our Kadawatha Headquarters.
              </p>
            </div>
          )}

          {/* 8. FORMAL CORPORATE EXECUTION & SEAL BLOCK */}
          <div className="legal-execution-container">
            <div className="legal-execution-preamble">
              IN WITNESS WHEREOF, the undersigned statutory entities have caused this official document to be formally executed, sealed, and published for the binding guidance and legal protection of all prospective candidates, students, and institutional partners:
            </div>

            <div className="legal-signatories-row">
              {/* Sri Lanka Operations */}
              <div className="legal-sig-col">
                <div className="legal-sig-line"></div>
                <div className="legal-sig-title">For Sri Lanka Operations</div>
                <div className="legal-sig-org">ATSUKO INTERNATIONAL (PVT) LTD</div>
                <div className="legal-sig-creds">
                  Board of Directors / Legal Administration<br />
                  Mahara, Kadawatha, 11850 Sri Lanka<br />
                  Company Reg: PV 0217143 • SLBFE Lic: 3293
                </div>
              </div>

              {/* Official Corporate Seal */}
              <div className="legal-seal-center" aria-label="Official Corporate Seal">
                <div className="legal-seal-graphic">
                  <div className="legal-seal-inner">
                    <span className="seal-star-top">★ ATSUKO GAKKO ★</span>
                    <span className="seal-main-text">OFFICIAL SEAL</span>
                    <span className="seal-code">LIC. 3293</span>
                    <span className="seal-bot-text">RATIFIED</span>
                  </div>
                </div>
              </div>

              {/* Japan Operations */}
              <div className="legal-sig-col">
                <div className="legal-sig-line"></div>
                <div className="legal-sig-title">For Japan Operations</div>
                <div className="legal-sig-org">株式会社 ATSUKO INTERNATIONAL</div>
                <div className="legal-sig-creds">
                  Directorate of Registered Support & Placement<br />
                  Sunshine Komaki Bldg 2F, Komaki, Aichi, Japan<br />
                  登録支援機関: 23登-008312 • 許可: 04-ユ-300338
                </div>
              </div>
            </div>

            <div className="legal-doc-footer-notice">
              <span>Instrument Code: {doc.docId}</span>
              <span>•</span>
              <span>Page 1 of 1 (Consolidated Electronic Codex)</span>
              <span>•</span>
              <span>Atsuko International Official Legal Registry</span>
            </div>
          </div>
        </article>

        {/* 9. BOTTOM ACTIONS (External to Paper, hidden in print) */}
        <div className="legal-doc-bottom-actions">
          <button
            type="button"
            onClick={() => onOpenModal && onOpenModal('Legal & Admissions Inquiry')}
            className="legal-doc-action-btn-primary"
          >
            <Mail size={16} aria-hidden="true" />
            <span>
              {langKey === 'si'
                ? 'නීති සහ ලියාපදිංචි අංශය අමතන්න'
                : langKey === 'jp'
                  ? '法務・相談窓口へ問い合わせる'
                  : 'Contact Legal & Admissions Desk'}
            </span>
          </button>

          <button
            type="button"
            onClick={() => handleTabSwitch(activeTab === 'privacy' ? 'terms' : 'privacy')}
            className="legal-doc-action-btn-secondary"
          >
            <span>
              {activeTab === 'privacy'
                ? (langKey === 'si' ? 'සේවා කොන්දේසි කියවන්න (Terms)' : langKey === 'jp' ? '利用規約を見る' : 'Switch to Terms & Conditions')
                : (langKey === 'si' ? 'පෞද්ගලිකත්ව ප්‍රතිපත්තිය (Privacy)' : langKey === 'jp' ? 'プライバシーポリシーを見る' : 'Switch to Privacy Policy')}
            </span>
          </button>

          <button
            type="button"
            onClick={handleReturnToSite}
            className="legal-doc-action-btn-secondary"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            <span>{langKey === 'si' ? 'ප්‍රධාන පිටුවට ආපසු' : langKey === 'jp' ? 'ホームに戻る' : 'Back to Home'}</span>
          </button>
        </div>
      </main>
    </div>
  );
}
