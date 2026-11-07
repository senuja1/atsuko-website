import { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Briefcase, 
  Calendar, 
  Clock, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Award, 
  Layers, 
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Search,
  Filter,
  GraduationCap,
  HeartPulse,
  Utensils,
  Hotel,
  Hammer,
  Sprout,
  Camera,
  ZoomIn,
  X,
  Users
} from 'lucide-react';
import { coursesData, activeCourseSchedules, pastBatchesGallery } from '../data/websiteData';
import { getUiText } from '../data/uiText';

export default function CoursesPage({ lang, onOpenModal }) {
  const tFull = getUiText(lang);
  const ui = tFull.pages.courses;
  const [scheduleFilter, setScheduleFilter] = useState('all');
  const [proofFilter, setProofFilter] = useState('all');
  const [lightboxProof, setLightboxProof] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxProof(null);
    };
    if (lightboxProof) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxProof]);

  const filteredProofs = pastBatchesGallery.filter(item => {
    if (proofFilter === 'all') return true;
    return item.batch.toLowerCase().replace(/\s+/g, '') === proofFilter;
  });

  const getProofTitle = (item) => {
    if (lang === 'si' && item.titleSi) return item.titleSi;
    if ((lang === 'jp' || lang === 'ja') && item.titleJp) return item.titleJp;
    return item.title;
  };

  const getProofDesc = (item) => {
    if (lang === 'si' && item.descSi) return item.descSi;
    if ((lang === 'jp' || lang === 'ja') && item.descJp) return item.descJp;
    return item.desc;
  };

  const filterSchedules = activeCourseSchedules.filter(item => {
    if (scheduleFilter === 'all') return true;
    if (scheduleFilter === 'language') return item.category.includes('Japanese');
    if (scheduleFilter === 'ssw') return item.category.includes('SSW') || item.category.includes('Prometric');
    return true;
  });

  // Localized Course Content overrides for Sinhala & Japanese
  const localizedLangCourses = coursesData.language.map(c => {
    if (lang === 'si') {
      if (c.id === 'jlpt-n5' || c.id === 'n5' || c.id.includes('n5')) {
        return {
          ...c,
          badge: 'මූලික JLPT',
          title: 'JLPT N5 මූලික පාඨමාලාව',
          duration: 'මාස 4 (පැය 160)',
          suitableFor: 'පාසල් හැරගිය සිසුන්, ආධුනිකයින්, ශිෂ්‍ය වීසා අපේක්ෂකයින්',
          description: 'ජපන් භාෂාව මුලසිට (හිරගනා, කටකනා) ඉගෙන ගන්නා සිසුන් සඳහා මූලික පදනම. කන්ජි 100+, මූලික ව්‍යාකරණ, ශ්‍රව්‍ය පරීක්ෂණ සහ දෛනික සංවාද පුහුණුව.',
          features: [
            'හිරගනා සහ කටකනා අභ්‍යාස පොත් කට්ටලයක් සමඟ සම්පූර්ණ දැනුම',
            'මූලික කන්ජි 100+ සහ අත්‍යවශ්‍ය වචන 800+ කටපාඩම් කරවීම',
            'නිල පසුගිය විභාග ප්‍රශ්න පත්‍ර සහ ශ්‍රව්‍යාගාර පෙරහුරුව',
            'සුදුසුකම්ලත් සෙන්සෙයිවරුන් සමඟ දෛනික කතාබහ (Kaiwa)',
          ]
        };
      }
      if (c.id === 'jlpt-n4' || c.id === 'n4' || c.id.includes('n4')) {
        return {
          ...c,
          badge: 'SSW සහ ශිෂ්‍ය මිණුම්දණ්ඩ',
          title: 'JLPT N4 මධ්‍යම පාඨමාලාව',
          duration: 'මාස 4 (පැය 160)',
          suitableFor: 'N5 සමතුන්, SSW රැකියා වීසා අපේක්ෂකයින්',
          description: 'SSW රැකියා වීසා සඳහා අවශ්‍ය නිල භාෂා ප්‍රමිතිය. සංකීර්ණ ව්‍යාකරණ, කන්ජි 300+, සහ ජපන් සේවා ස්ථානවල භාවිත වන ප්‍රායෝගික භාෂා දැනුම.',
          features: [
            'N4 මට්ටමේ කන්ජි 300+ සහ වචන මාලා 1,500+ පරිපූර්ණ හැදෑරීම',
            'රැකියා ස්ථානයට අදාළ දෛනික සන්නිවේදනය සහ ආචාර විධි',
            'Prometric හා සමාන පරිගණක (CBT) සහ ලිඛිත විභාග පෙරහුරු',
            'තානාපති කාර්යාල සම්මුඛ පරීක්ෂණ පෙරහුරු (Mensetsu)',
          ]
        };
      }
      if (c.id === 'jft-basic' || c.id === 'jft' || c.id.includes('jft')) {
        return {
          ...c,
          badge: 'Prometric CBT විභාගය',
          title: 'JFT-Basic A2 වේගවත් පාඨමාලාව',
          duration: 'මාස 2.5 ක කඩිනම් (පැය 120)',
          suitableFor: 'ඉක්මනින් SSW විභාගය ලිවීමට අපේක්ෂා කරන සිසුන්',
          description: 'ජපන් පදනම (The Japan Foundation) විසින් පවත්වනු ලබන පරිගණක පාදක (CBT) විභාගය සඳහා විශේෂිත පුහුණුව.',
          features: [
            'අත්සුකෝ ප්‍රධාන මූලස්ථානයේ (Atsuko Main) CBT පරිගණක විභාග පෙරහුරුව',
            'Irodori (ජපානයේ ජීවිතය සඳහා ජපන්) නිල විෂය නිර්දේශය',
            'ක්ෂණික ශ්‍රව්‍ය ප්‍රතිචාර සහ තිරය හරහා ප්‍රශ්නවලට පිළිතුරු දීම',
            'Prometric විභාග ලියාපදිංචි කිරීමේ සම්පූර්ණ මඟපෙන්වීම',
          ]
        };
      }
      if (c.id === 'spoken-kaiwa' || c.id === 'spoken' || c.id.includes('spoken') || c.id.includes('kaiwa')) {
        return {
          ...c,
          badge: 'චතුර කථන පුහුණුව',
          title: 'ප්‍රායෝගික කථන ජපන් සහ සම්මුඛ පරීක්ෂණ',
          duration: 'සතිපතා අඛණ්ඩ පන්ති (පැය 60)',
          suitableFor: 'වීසා සම්මුඛ පරීක්ෂණ හා ජපන් සේවායෝජක සම්මුඛ පරීක්ෂණ සඳහා',
          description: 'ජපන් හාම්පුතුන් සහ පාසල් විදුහල්පතිවරුන් සමඟ පවත්වන සජීවී Zoom සම්මුඛ පරීක්ෂණ ජයගැනීමේ විශේෂිත කථන පුහුණුව.',
          features: [
            'ජපන් ආචාර විධි (Ojigi), ශරීර භාෂාව සහ වෘත්තීය ගෞරවය',
            'ස්වයං හැඳින්වීම (Jikoshoukai) සහ සාමාන්‍ය ප්‍රශ්නවලට චතුර පිළිතුරු',
            'සේවා ස්ථානවල භාවිත වන කීර්තිමත් ගෞරව භාෂාව (Keigo)',
            'වීඩියෝ පටිගත කිරීම් හරහා උච්චාරණ නිවැරදි කිරීම',
          ]
        };
      }
    } else if (lang === 'jp') {
      if (c.id === 'jlpt-n5' || c.id === 'n5' || c.id.includes('n5')) {
        return {
          ...c,
          badge: 'JLPT基礎',
          title: 'JLPT N5 基礎コース',
          duration: '4ヶ月 (160時間)',
          suitableFor: '未経験者・高校卒業生・留学ビザ申請希望者',
          description: 'ゼロから日本語を学ぶ受講生のための基礎プログラム。ひらがな・カタカナ、必須漢字100字、基本文法、聴解、日常会話を体系的に習得。',
          features: [
            'ひらがな・カタカナ完全習得ワークブック教材',
            '基礎漢字100字および必須語彙800語の徹底暗記',
            '公式模試演習およびリスニング専用ブースでの聴解特訓',
            '経験豊富な講師陣による実践会話（カイワ）',
          ]
        };
      }
      if (c.id === 'jlpt-n4' || c.id === 'n4' || c.id.includes('n4')) {
        return {
          ...c,
          badge: '特定技能・留学基準',
          title: 'JLPT N4 中級コース',
          duration: '4ヶ月 (160時間)',
          suitableFor: 'N5取得者・特定技能（SSW）就労ビザ希望者',
          description: '特定技能（SSW）就労ビザ取得基準となる公認中級プログラム。日常生活や職場での自然なコミュニケーション力、複文構造、漢字300字を習得。',
          features: [
            'N4重要漢字300字および語彙1,500語の網羅',
            '複雑な文法構造および職場での丁寧語・敬語基礎',
            '日本大使館ビザ面接および企業面接（面接）の模擬特訓',
            '音響ブースでのJLPT本番同様リスニング試験シミュレーション',
          ]
        };
      }
      if (c.id === 'jft-basic' || c.id === 'jft' || c.id.includes('jft')) {
        return {
          ...c,
          badge: 'プロメトリックCBT試験',
          title: 'JFT-Basic A2 集中対策コース',
          duration: '2.5ヶ月 (120時間)',
          suitableFor: '短期間で特定技能試験の合格を目指す受講生',
          description: '国際交流基金が実施するプロメトリックCBT（コンピュータ試験）形式の日本語基礎テスト対策。',
          features: [
            'アツコ本校（Atsuko Main）PC端末による本番仕様CBT演習',
            '生活日本語「いろどり」準拠の即戦力カリキュラム',
            '即時フィードバックによる画面上での解答力強化',
            'プロメトリック公式試験予約・登録の完全サポート',
          ]
        };
      }
      if (c.id === 'spoken-kaiwa' || c.id === 'spoken' || c.id.includes('spoken') || c.id.includes('kaiwa')) {
        return {
          ...c,
          badge: '実戦会話・面接対策',
          title: '実戦会話・面接指導クラス',
          duration: '週次継続レッスン (60時間)',
          suitableFor: 'ビザ面接・提携日本語学校長／企業面接を控えた全候補者',
          description: '日本語学校長や病院・受入企業面接を突破するための実践的スピーキング特訓。',
          features: [
            '自然な発音・イントネーション・お辞儀マナーの体得',
            '大使館想定質問に対するマンツーマン模擬面接',
            '履歴書（Rirekisho）作成および自己紹介（Jikoshoukai）特訓',
            'ネイティブ講師・熟練講師による実戦的会話演習',
          ]
        };
      }
    }
    return c;
  });

  const localizedSswCourses = coursesData.sswVocational.map(c => {
    if (lang === 'si') {
      if (c.id === 'ssw-caregiver') {
        return {
          ...c,
          badge: 'ඉහළ ඉල්ලුමක් ඇති ක්ෂේත්‍රය',
          title: 'සාත්තු සේවා (Kaigo) ප්‍රායෝගික පුහුණුව',
          duration: 'මාස 3 ක ප්‍රායෝගික + සාත්තු ජපන් භාෂාව',
          mode: 'අත්සුකෝ ප්‍රධාන මූලස්ථානයේ ප්‍රායෝගික පුහුණු ඒකකය',
          description: 'ජපානයේ වැඩිහිටි නිවාස සහ රෝහල් ආශ්‍රිත සාත්තු සේවාව සඳහා පූර්ණ සූදානම. ජපන් රෝහල් ඇඳන් සහිත ප්‍රායෝගික පුහුණුව, සාත්තු භාෂා දැනුම සහ Prometric CBT විභාග මඟපෙන්වීම.',
          features: [
            'ජපන් රෝහල් ඇඳන්, රෝද පුටු භාවිතය සහ රෝගී සත්කාරක ප්‍රායෝගික පුහුණුව',
            'සාත්තු සේවා සඳහා වන විශේෂිත ජපන් භාෂා (Kaigo no Nihongo) දැනුම',
            'Prometric සාත්තු සත්කාරක නිපුණතා ඇගයීම් විභාගය සඳහා සූදානම',
            'ජපානයේ අපගේම සෙන්ඩායි ආයතනය හරහා පිළිගත් වෛද්‍ය ආයතන වෙත සෘජු සම්බන්ධීකරණය'
          ]
        };
      }
      if (c.id === 'ssw-food') {
        return {
          ...c,
          badge: 'හෝටල් සහ ආහාර සේවා',
          title: 'ආහාර සේවා (Gaishoku) සහ ආගන්තුක සත්කාරය',
          duration: 'මාස 2 ක සූදානම + Prometric විභාගය',
          mode: 'අත්සුකෝ ප්‍රධාන මූලස්ථානය සහ මාර්ගගත Zoom පන්ති',
          description: 'ජපානයේ ප්‍රමුඛ පෙළේ අවන්හල් ජාල, හෝටල් මුළුතැන්ගෙවල් සහ ආහාර නිෂ්පාදන ආයතනවල රැකියා සඳහා පුහුණුව. ජපන් ආහාර සුරක්ෂිතතාව (HACCP) සහ සනීපාරක්ෂක ප්‍රමිතීන්.',
          features: [
            'ජපන් ආහාර සනීපාරක්ෂාව (HACCP) සහ මුළුතැන්ගෙයි ආරක්ෂිත ක්‍රමවේද',
            'අවන්හල් පාරිභෝගික සත්කාරක වචන මාලා සහ ඇණවුම් ලබාගැනීම',
            'Prometric ආහාර සේවා කුසලතා ඇගයීම් විභාග ප්‍රශ්න පත්‍ර පෙරහුරුව',
            'SLBFE බලපත්‍ර අංක 3293 යටතේ සෘජු නීත්‍යානුකූල රැකියා ගිවිසුම්'
          ]
        };
      }
      if (c.id === 'ssw-accommodation') {
        return {
          ...c,
          badge: 'හෝටල් සහ සංචාරක සේවා',
          title: 'හෝටල් සහ ආගන්තුක සත්කාරය (Shukuhaku)',
          duration: 'මාස 2 ක පුහුණුව',
          mode: 'ආගන්තුක සත්කාරක ආචාරධර්ම ඒකකය',
          description: 'ජපානයේ තරු පන්තියේ හෝටල්, සංචාරක නිවාඩු නිකේතන සහ සම්ප්‍රදායික රියෝකාන් (Ryokan) ආශ්‍රිත පිළිගැනීමේ නිලධාරී සහ ආගන්තුක සත්කාරක රැකියා.',
          features: [
            'ජපන් ආගන්තුක සත්කාරක ආචාරධර්ම (Omotenashi) සහ ගෞරවාන්විත කථනය (Keigo)',
            'හෝටල් කාමර වෙන්කිරීම් සහ පාරිභෝගික සේවා කළමනාකරණය',
            'Prometric නවාතැන් සේවා නිපුණතා ඇගයීම් විභාග සූදානම',
            'ජපානයේ ප්‍රධාන සංචාරක කලාපවල රැකියා ස්ථානගත කිරීම්'
          ]
        };
      }
      if (c.id === 'ssw-agriculture') {
        return {
          ...c,
          badge: 'කෘෂිකාර්මික ක්ෂේත්‍රය',
          title: 'කෘෂිකර්මාන්තය සහ බෝග වගාව (Nōgyō)',
          duration: 'මාස 2 ක පුහුණුව',
          mode: 'පූර්ණ කෘෂිකාර්මික සූදානම',
          description: 'ජපානයේ ඉබරාකි, නගානෝ, අයිචි ආදී ප්‍රධාන කෘෂිකාර්මික ප්‍රාන්තවල ස්වයංක්‍රීය හරිතාගාර එළවළු වගාව, පලතුරු නෙලීම සහ පශු සම්පත් කළමනාකරණය.',
          features: [
            'ජපන් ගොවිපළ උපකරණ ආරක්ෂාව, බෝග වර්ග සහ වාරිමාර්ග තාක්ෂණික වචන',
            'Prometric කෘෂිකාර්මික නිපුණතා ඇගයීම් විභාග පෙරහුරුව',
            'ජපන් කම්කරු නීති සහ ජාතික සෞඛ්‍ය රක්ෂණය යටතේ පූර්ණ රැකවරණය',
            'අත්සුකෝ ජපන් කාර්යාලය මඟින් සේවා කාලය පුරා නිරන්තර සුබසාධනය'
          ]
        };
      }
      if (c.id === 'ssw-construction') {
        return {
          ...c,
          badge: 'ඉදිකිරීම් සහ සිවිල් ඉංජිනේරු',
          title: 'ඉදිකිරීම් සහ සිවිල් ඉංජිනේරු ශිල්පය',
          duration: 'මාස 2.5 ක තාක්ෂණික පුහුණුව',
          mode: 'ආරක්ෂිත සහ තාක්ෂණික වචන මාලා ඒකකය',
          description: 'ජපාන ආරක්ෂිත ප්‍රමිතීන්ට අනුකූලව සිවිල් ඉංජිනේරු ව්‍යුහ එකලස් කිරීම, අභ්‍යන්තර නිමවුම් සහ විදුලි උපකරණ සවි කිරීම්.',
          features: [
            'සේවා ස්ථාන ආරක්ෂණ ක්‍රමවේද (Anzen Daiichi) සහ මෙවලම් හැසිරවීම',
            'Prometric ඉදිකිරීම් නිපුණතා ඇගයීම් විභාග පෙරහුරුව',
            'අතිකාල දීමනා සහිත ආකර්ෂණීය ජපන් වැටුප් හිමිකම',
            'SLBFE බලපත්‍ර අංක 3293 යටතේ පූර්ණ නීත්‍යානුකූල ලියකියවිලි සැකසීම'
          ]
        };
      }
    } else if (lang === 'jp') {
      if (c.id === 'ssw-caregiver') {
        return {
          ...c,
          badge: '重点受入分野',
          title: '特定技能 介護実務・看護日本語研修',
          duration: '3ヶ月 実務演習＋介護日本語',
          mode: 'アツコ本校 介護実習シミュレーション病棟',
          description: '日本の特別養護老人ホームや医療施設で即戦力となるための実践研修。日本仕様の介護ベッド・車椅子を用いた実技、介護の専門日本語、プロメトリックCBT試験対策を網羅。',
          features: [
            '日本仕様介護ベッド・車椅子を用いた移乗・介助実技訓練',
            '介護現場で使われる専門用語・記録・申し送りの日本語',
            'プロメトリック介護技能評価試験および介護日本語試験対策',
            '日本現地法人（株式会社Atsuko International）を通じた優良医療・福祉施設への直結マッチング'
          ]
        };
      }
      if (c.id === 'ssw-food') {
        return {
          ...c,
          badge: '外食・ホテル分野',
          title: '特定技能 外食業・食品衛生実務',
          duration: '2ヶ月 対策＋プロメトリック試験',
          mode: 'アツコ本校実習室およびオンライン講義',
          description: '日本の大手外食チェーン、ホテル厨房、食品加工企業への就労を目指すカリキュラム。日本の衛生管理基準（HACCP）や接客マナーを指導。',
          features: [
            'HACCPに基づく衛生管理基準および厨房内安全衛生教育',
            '接客サービス用語、オーダーテイク、敬語応対実習',
            'プロメトリック外食業技能評価試験の過去問演習',
            'SLBFE許可No.3293に基づく合法的な雇用契約手続き'
          ]
        };
      }
      if (c.id === 'ssw-accommodation') {
        return {
          ...c,
          badge: '宿泊・観光分野',
          title: '特定技能 宿泊業（ホテル・旅館接遇）',
          duration: '2ヶ月 専門研修',
          mode: 'アツコ本校 ホテル接遇演習室',
          description: '日本のホテル、リゾート、老舗旅館でのフロント、客室管理、接客サービスに対応するおもてなし教育プログラム。',
          features: [
            '日本のおもてなし精神、接遇マナー、美しい敬語表現',
            'ホテル宿泊管理システム、チェックイン予約応対',
            'プロメトリック宿泊業技能評価試験の徹底演習',
            '全国の主要観光地・リゾートホテルへの配属支援'
          ]
        };
      }
      if (c.id === 'ssw-agriculture') {
        return {
          ...c,
          badge: '農業・畜産分野',
          title: '特定技能 農業分野（耕種・畜産）',
          duration: '2ヶ月 専門研修',
          mode: 'アツコ本校 農業総合カリキュラム',
          description: '茨城、長野、愛知などの農業先進地における自動温室栽培、野菜・果樹収穫、畜産管理に向けた実践講習。',
          features: [
            '日本の農業機械安全使用、作物管理、潅水設備の専門用語',
            'プロメトリック農業技能評価試験（耕種・畜産）対策',
            '日本の労働基準法および社会保険・国民健康保険による完全保護',
            '日本現地法人（小牧市拠点）による渡航後の継続的巡回・生活支援'
          ]
        };
      }
      if (c.id === 'ssw-construction') {
        return {
          ...c,
          badge: '建設・土木分野',
          title: '特定技能 建設・土木施工分野',
          duration: '2.5ヶ月 技術安全研修',
          mode: 'アツコ本校 安全工学・専門用語講義',
          description: '日本の厳格な安全基準に基づく型枠施工、鉄筋、内装仕上、土木工事のための実践講習。',
          features: [
            '安全第一（ゼロ災害）現場マナー、安全帯・保護具の使用基準',
            'プロメトリック建設分野特定技能評価試験対策',
            '時間外割増賃金が保証された適正な日本基準給与',
            'SLBFE許可No.3293に基づく完全な出国審査および就労保護'
          ]
        };
      }
    }
    return c;
  });

  return (
    <div className="page-container courses-page">
      {/* 1. Page Hero Banner */}
      <section className="page-header-banner">
        <div className="container">
          <div className="page-header-content">
            <span className="section-badge badge-gold">
              <Award size={14} />
              {ui.badge}
            </span>
            <h1 className="page-hero-title">
              {ui.titlePre} <span className="text-gradient-red">{ui.titleHighlight}</span>
            </h1>
            <p className="page-hero-subtitle">
              {ui.subtitle}
            </p>

            <div className="course-stats-bar">
              {ui.stats.map((st, idx) => (
                <div key={idx} className="course-stat-item">
                  <span className="course-stat-num">{st.num}</span>
                  <span className="course-stat-lbl">{st.lbl}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Japanese Language Proficiency Track */}
      <section className="section" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge badge-red">
              <BookOpen size={14} />
              {ui.langBadge}
            </span>
            <h2 className="section-title">
              {ui.langTitle} <span className="text-gradient-red">{ui.langHighlight}</span>
            </h2>
            <p className="section-subtitle">
              {ui.langSubtitle}
            </p>
          </div>

          <div className="courses-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1.75rem' }}>
            {localizedLangCourses.map((course) => (
              <div key={course.id} className="course-card" style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 'var(--radius-xl)', padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span style={{ background: '#fee2e2', color: '#b91c1c', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.65rem', borderRadius: 'var(--radius-full)' }}>
                      {course.badge}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>
                      {course.duration}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--navy-900)', margin: '0.25rem 0 0.5rem' }}>
                    {course.title}
                  </h3>
                  <div style={{ fontFamily: 'var(--font-jp)', fontSize: '0.85rem', color: '#b45309', fontWeight: 700, marginBottom: '0.75rem' }}>
                    {course.jpTitle}
                  </div>

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {course.description}
                  </p>

                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {course.features.map((feat, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--navy-800)' }}>
                        <CheckCircle2 size={15} style={{ color: '#10b981', flexShrink: 0, marginTop: '2px' }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div style={{ background: '#ffffff', padding: '0.65rem 0.85rem', borderRadius: 'var(--radius-md)', fontSize: '0.8rem', color: '#475569', marginBottom: '1rem', border: '1px solid #e2e8f0' }}>
                    <strong>{ui.idealCandidateLbl || 'Ideal for:'}</strong> {course.suitableFor}
                  </div>
                  <button 
                    onClick={() => onOpenModal(`Course Enrollment: ${course.title}`)}
                    className="btn btn-primary btn-block"
                  >
                    <span>{ui.enrollBtn || 'Enroll in Course'}</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SSW Technical & Vocational Training Track */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-badge badge-gold">
              <Briefcase size={14} />
              {ui.sswBadge}
            </span>
            <h2 className="section-title">
              {ui.sswTitle} <span className="text-gradient-red">{ui.sswHighlight}</span>
            </h2>
            <p className="section-subtitle">
              {ui.sswSubtitle}
            </p>
          </div>

          <div className="courses-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '1.75rem' }}>
            {localizedSswCourses.map((course) => (
              <div key={course.id} className="course-card" style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 'var(--radius-xl)', padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span style={{ background: '#fef3c7', color: '#92400e', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.65rem', borderRadius: 'var(--radius-full)' }}>
                      {course.badge}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>
                      {course.duration}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--navy-900)', margin: '0.25rem 0 0.5rem' }}>
                    {course.title}
                  </h3>
                  <div style={{ fontFamily: 'var(--font-jp)', fontSize: '0.85rem', color: '#0284c7', fontWeight: 700, marginBottom: '0.75rem' }}>
                    {course.jpTitle}
                  </div>

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {course.description}
                  </p>

                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {course.features.map((feat, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--navy-800)' }}>
                        <CheckCircle2 size={15} style={{ color: '#0284c7', flexShrink: 0, marginTop: '2px' }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div style={{ background: '#f8fafc', padding: '0.65rem 0.85rem', borderRadius: 'var(--radius-md)', fontSize: '0.8rem', color: '#475569', marginBottom: '1rem', border: '1px solid #e2e8f0' }}>
                    <strong>{ui.modeLbl || 'Training Venue:'}</strong> {course.mode}
                  </div>
                  <button 
                    onClick={() => onOpenModal(`SSW Skill Registration: ${course.title}`)}
                    className="btn btn-gold btn-block"
                  >
                    <span>{ui.enrollBtn || 'Register for SSW Training'}</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Active Real-Time Batch Schedules & Calendar */}
      <section className="section" id="active-schedules" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge badge-red">
              <Calendar size={14} />
              {ui.scheduleBadge}
            </span>
            <h2 className="section-title">
              {ui.scheduleTitle} <span className="text-gradient-red">{ui.scheduleHighlight}</span>
            </h2>
            <p className="section-subtitle">
              {ui.scheduleSubtitle}
            </p>
          </div>

          {/* Schedule Filter Tabs */}
          <div className="schedule-filter-bar" style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
            <div className="filter-pill-group" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <button 
                className={`filter-pill ${scheduleFilter === 'all' ? 'active' : ''}`}
                onClick={() => setScheduleFilter('all')}
              >
                {ui.filterAll || 'All Batches'} ({activeCourseSchedules.length})
              </button>
              <button 
                className={`filter-pill ${scheduleFilter === 'language' ? 'active' : ''}`}
                onClick={() => setScheduleFilter('language')}
              >
                {ui.filterLanguage || 'Japanese Language'}
              </button>
              <button 
                className={`filter-pill ${scheduleFilter === 'ssw' ? 'active' : ''}`}
                onClick={() => setScheduleFilter('ssw')}
              >
                {ui.filterSsw || 'SSW Vocational Skills'}
              </button>
            </div>
          </div>

          {/* Structured Responsive Schedules Table */}
          <div className="schedules-table-container">
            <div className="schedules-table-wrapper">
              <table className="schedules-table">
                <thead>
                  <tr>
                    <th>{ui.thCourse || 'Course Name & Category'}</th>
                    <th>{ui.thSchedule || 'Days & Timing'}</th>
                    <th>{ui.modeLbl || 'Venue / Mode'}</th>
                    <th>{ui.thAction || 'Action'}</th>
                  </tr>
                </thead>
                <tbody>
                  {filterSchedules.map((batch) => {
                    const courseName = lang === 'si'
                      ? (batch.id.includes('n5-weekend') ? 'JLPT N5 සති අන්ත මූලික පාඨමාලාව'
                         : batch.id.includes('n5-weekday') ? 'JLPT N5 කඩිනම් සතියේ දින පාඨමාලාව'
                         : batch.id.includes('n4') ? 'JLPT N4 මධ්‍යම ප්‍රමිති පාඨමාලාව'
                         : batch.id.includes('jft') ? 'JFT-Basic A2 පරිගණක (CBT) පාඨමාලාව'
                         : batch.id.includes('caregiver') ? 'SSW සාත්තු සේවා (Kaigo) ප්‍රායෝගික පුහුණුව'
                         : batch.id.includes('food') ? 'SSW ආහාර සේවා සහ ආගන්තුක සත්කාරය'
                         : batch.course)
                      : lang === 'jp'
                        ? (batch.id.includes('n5-weekend') ? 'JLPT N5 週末基礎コース'
                           : batch.id.includes('n5-weekday') ? 'JLPT N5 平日速成コース'
                           : batch.id.includes('n4') ? 'JLPT N4 中級標準コース'
                           : batch.id.includes('jft') ? 'JFT-Basic A2 CBT対策コース'
                           : batch.id.includes('caregiver') ? '特定技能 介護実務・看護日本語研修'
                           : batch.id.includes('food') ? '特定技能 外食業・食品衛生実務'
                           : batch.course)
                        : batch.course;
                    const catName = lang === 'si'
                      ? (batch.category.includes('Language & SSW') ? 'ජපන් භාෂාව සහ SSW'
                         : batch.category.includes('Language') ? 'ජපන් භාෂාව'
                         : batch.category.includes('CBT') ? 'Prometric CBT පෙරහුරු'
                         : 'SSW වෘත්තීය පුහුණුව')
                      : lang === 'jp'
                        ? (batch.category.includes('Language & SSW') ? '日本語 & 特定技能'
                           : batch.category.includes('Language') ? '日本語教育'
                           : batch.category.includes('CBT') ? 'CBT試験対策'
                           : '特定技能職能研修')
                        : batch.category;
                    const daysName = lang === 'si'
                      ? (batch.days.includes('Saturday & Sunday') ? 'සෙනසුරාදා සහ ඉරිදා'
                         : batch.days.includes('Tuesday & Thursday') ? 'අඟහරුවාදා සහ බ්‍රහස්පතින්දා'
                         : batch.days.includes('Mon, Wed & Friday') ? 'සඳුදා, බදාදා සහ සිකුරාදා'
                         : batch.days.includes('Saturday Full Day') ? 'සෙනසුරාදා පූර්ණ දින + ප්‍රායෝගික'
                         : batch.days.includes('Sunday Mornings') ? 'ඉරිදා උදෑසන'
                         : batch.days.includes('Weekend Evenings') ? 'සති අන්ත සවස් කාලය'
                         : batch.days)
                      : lang === 'jp'
                        ? (batch.days.includes('Saturday & Sunday') ? '土曜・日曜'
                           : batch.days.includes('Tuesday & Thursday') ? '火曜・木曜'
                           : batch.days.includes('Mon, Wed & Friday') ? '月・水・金曜'
                           : batch.days.includes('Saturday Full Day') ? '土曜終日＋実習'
                           : batch.days.includes('Sunday Mornings') ? '日曜午前'
                           : batch.days.includes('Weekend Evenings') ? '週末夕方'
                           : batch.days)
                        : batch.days;
                    const modeName = lang === 'si'
                      ? (batch.mode.includes('Live Zoom') ? 'අත්සුකෝ ප්‍රධාන මූලස්ථානය + සජීවී Zoom'
                         : batch.mode.includes('Simulation Ward') ? 'අත්සුකෝ ප්‍රධාන ප්‍රායෝගික පුහුණු ඒකකය'
                         : batch.mode.includes('CBT Center') ? 'අත්සුකෝ ප්‍රධාන CBT විභාග මධ්‍යස්ථානය'
                         : batch.mode.includes('Zoom Theory') ? 'අත්සුකෝ ප්‍රධාන මූලස්ථානය සහ Zoom'
                         : 'අත්සුකෝ ප්‍රධාන මූලස්ථානය')
                      : lang === 'jp'
                        ? (batch.mode.includes('Live Zoom') ? 'アツコ本校＋Zoom'
                           : batch.mode.includes('Simulation Ward') ? 'アツコ本校 介護実習病棟'
                           : batch.mode.includes('CBT Center') ? 'アツコ本校 CBT試験ラボ'
                           : batch.mode.includes('Zoom Theory') ? 'アツコ本校＋Zoom講義'
                           : 'アツコ本校')
                        : batch.mode;
                    const durationText = lang === 'si'
                      ? (batch.duration.includes('4 Months') ? 'මාස 4 (පැය 160)'
                         : batch.duration.includes('3.5 Months') ? 'මාස 3.5 ක කඩිනම්'
                         : batch.duration.includes('2.5 Months') ? 'මාස 2.5 ක කඩිනම්'
                         : batch.duration.includes('3 Months') ? 'මාස 3 ක ප්‍රායෝගික + සාත්තු ජපන්'
                         : batch.duration.includes('2 Months') ? 'මාස 2 ක සූදානම'
                         : batch.duration)
                      : lang === 'jp'
                        ? (batch.duration.includes('4 Months') ? '4ヶ月 (160時間)'
                           : batch.duration.includes('3.5 Months') ? '3.5ヶ月 短期集中'
                           : batch.duration.includes('2.5 Months') ? '2.5ヶ月 集中対策'
                           : batch.duration.includes('3 Months') ? '3ヶ月 実習＋介護日本語'
                           : batch.duration.includes('2 Months') ? '2ヶ月 集中対策'
                           : batch.duration)
                        : batch.duration;

                    return (
                      <tr key={batch.id} className="schedule-row">
                        <td className="cell-course">
                          <div className="batch-name">{courseName}</div>
                          <span className="batch-cat-tag">{catName}</span>
                        </td>
                        <td className="cell-time">
                          <div className="batch-days">{daysName}</div>
                          <div className="batch-time-clock">
                            <Clock size={13} />
                            <span>{batch.time}</span>
                          </div>
                        </td>
                        <td className="cell-mode">
                          <div className="batch-mode-text">
                            <MapPin size={13} />
                            <span>{modeName}</span>
                          </div>
                          <span className="batch-duration-badge">{durationText}</span>
                        </td>
                        <td className="cell-action">
                          <button 
                            onClick={() => onOpenModal(`Batch Registration: ${courseName}`)}
                            className="btn btn-sm btn-primary"
                          >
                            <span>{ui.btnEnrollNow || 'Apply'}</span>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Real Classroom Proofs & Previous Batches Gallery (Batch 10, Batch 11, Batch 17) */}
      <section className="past-batches-section" id="batch-proofs">
        <div className="container">
          <div className="section-header">
            <span className="section-badge badge-gold">
              <Camera size={14} />
              {ui.proofsBadge || 'Real Classroom Proofs & Completed Batches'}
            </span>
            <h2 className="section-title">
              {ui.proofsTitle || 'Real Classroom Moments &'} <span className="text-gradient-red">{ui.proofsHighlight || 'Previous Batch Proofs'}</span>
            </h2>
            <p className="section-subtitle">
              {ui.proofsSubtitle || 'Authentic photographic proof from our completed Japanese language cohorts at Kadawatha. See real student interactions, visiting native Japanese Sensei sessions, and graduation celebrations.'}
            </p>
          </div>

          {/* Filter Pills */}
          <div className="proofs-filter-bar">
            <div className="proof-pill-group">
              <button
                type="button"
                className={`proof-pill ${proofFilter === 'all' ? 'active' : ''}`}
                onClick={() => setProofFilter('all')}
              >
                <span>{lang === 'si' ? 'සියලු කණ්ඩායම්' : lang === 'jp' ? '全バッチ' : 'All Batches'} ({pastBatchesGallery.length})</span>
              </button>
              <button
                type="button"
                className={`proof-pill ${proofFilter === 'batch10' ? 'active' : ''}`}
                onClick={() => setProofFilter('batch10')}
              >
                <span>Batch 10 (JLPT)</span>
              </button>
              <button
                type="button"
                className={`proof-pill ${proofFilter === 'batch11' ? 'active' : ''}`}
                onClick={() => setProofFilter('batch11')}
              >
                <span>Batch 11 (Culture & Graduation)</span>
              </button>
              <button
                type="button"
                className={`proof-pill ${proofFilter === 'batch17' ? 'active' : ''}`}
                onClick={() => setProofFilter('batch17')}
              >
                <span>Batch 17 (Smart Classroom)</span>
              </button>
            </div>
          </div>

          {/* Proofs Grid */}
          <div className="proofs-grid">
            {filteredProofs.map((item) => (
              <div 
                key={item.id} 
                className="proof-card"
                onClick={() => setLightboxProof(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') setLightboxProof(item);
                }}
                aria-label={`View photo: ${getProofTitle(item)}`}
              >
                <div className="proof-img-container">
                  <img 
                    src={item.image} 
                    alt={getProofTitle(item)}
                    className="proof-img"
                    loading="lazy"
                    decoding="async"
                    width="600"
                    height="412"
                  />
                  <div className="proof-batch-pill">
                    <ShieldCheck size={12} style={{ color: '#fbbf24' }} />
                    <span>{item.badge}</span>
                  </div>
                  <div className="proof-zoom-badge">
                    <ZoomIn size={12} />
                    <span>{ui.proofsViewFullBtn || 'Zoom'}</span>
                  </div>
                </div>

                <div className="proof-body">
                  <span className="proof-tag-chip">{item.tag}</span>
                  <h3 className="proof-title">{getProofTitle(item)}</h3>
                  <p className="proof-desc">{getProofDesc(item)}</p>

                  <div className="proof-footer">
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                      <MapPin size={12} style={{ color: '#0284c7' }} />
                      <span>Atsuko Main</span>
                    </span>
                    <span style={{ color: '#059669', fontWeight: 700 }}>Verified Batch</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Preview Modal */}
      {lightboxProof && (
        <div 
          className="proof-lightbox-backdrop"
          onClick={() => setLightboxProof(null)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="proof-lightbox-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="proof-lightbox-close"
              onClick={() => setLightboxProof(null)}
              aria-label="Close Preview"
            >
              <X size={20} />
            </button>

            <div className="proof-lightbox-img-wrap">
              <img 
                src={lightboxProof.image} 
                alt={getProofTitle(lightboxProof)} 
                className="proof-lightbox-img" 
              />
            </div>

            <div className="proof-lightbox-details">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                <span className="badge badge-gold" style={{ fontSize: '0.75rem' }}>
                  {lightboxProof.badge}
                </span>
                <span className="badge badge-blue" style={{ fontSize: '0.75rem' }}>
                  {lightboxProof.tag}
                </span>
                <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>
                  Atsuko International (Pvt) Ltd • SLBFE Lic. 3293
                </span>
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--navy-950)', marginBottom: '0.5rem' }}>
                {getProofTitle(lightboxProof)}
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                {getProofDesc(lightboxProof)}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
