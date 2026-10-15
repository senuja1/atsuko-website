import { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { faqList } from '../data/websiteData';
import { siteTranslations } from '../data/translations';

export default function FaqSection({ lang }) {
  const [openIdx, setOpenIdx] = useState(0);

  const t = siteTranslations[lang]?.faq || siteTranslations.en.faq;

  const siFaqs = [
    {
      q: "අත්සුකෝ ඉන්ටර්නැෂනල් ආයතනය ශ්‍රී ලංකා රජයේ නිල ලියාපදිංචිය ලබා ඇත්ද?",
      a: "ඔව්. අත්සුකෝ ඉන්ටර්නැෂනල් (Atsuko International Pvt Ltd) යනු ශ්‍රී ලංකා විදේශ සේවා නියුක්ති කාර්යාංශයේ (SLBFE) නිල බලපත්‍ර අංක 3293 යටතේ ලියාපදිංචි රජයේ පූර්ණ අනුමැතිය ලත් ආයතනයකි. විදේශ සේවා නියුක්ති කාර්යාංශයේ වෙබ් අඩවියෙන් හෝ අපගේ කාර්යාලයට පැමිණ මෙය තහවුරු කරගත හැක."
    },
    {
      q: "අත්සුකෝ ආයතනයට ජපානය තුළ ලියාපදිංචි කාර්යාලයක් තිබේද?",
      a: "ඔව්. ජපානයේ අපගේ ආයතනය වන්නේ මියගි ප්‍රාන්තයේ සෙන්ඩායි නුවර පිහිටි '株式会社 篤子インターナショナル' (Kabushiki Gaisha Atsuko International) ආයතනයයි. එය ජපාන ආගමන විගමන සේවා කාර්යාංශය විසින් පිළිගත් ලියාපදිංචි ආධාරක ආයතනයක් (登録支援機関 - Touroku Shien Kikan) වන අතර, ජපානයට පැමිණෙන අපගේ සිසුන්ට සහ සේවකයින්ට අවශ්‍ය රැකවරණය සහ නීතිමය මඟපෙන්වීම සලසයි."
    },
    {
      q: "ජපානයේ ඉගෙනුම ලබන අතරතුර නීත්‍යානුකූලව රැකියා කළ හැකිද? උපයාගත හැකි මුදල කොපමණද?",
      a: "ඔව්. ජපාන ආගමන විගමන නීතියට අනුව, වලංගු වැඩ බලපත්‍රයක් (Shikakugai Katsudo Kyoka) සහිත ජාත්‍යන්තර සිසුන්ට අධ්‍යයන කාලසීමාව තුළ සතියකට පැය 28ක් දක්වාත්, දිගු පාසල් නිවාඩු කාලවලදී සතියකට පැය 40ක් දක්වාත් නීත්‍යානුකූලව අර්ධකාලීන රැකියා කළ හැක. ටෝකියෝ සහ ප්‍රධාන නගරවල පැයකට යෙන් 1,100 සිට 1,400 දක්වා (මසකට රු. 300,000 - 450,000 පමණ) උපයා ගත හැක."
    },
    {
      q: "SSW සාත්තු සේවා (Kaigo) වීසා සඳහා සුදුසුකම් මොනවාද?",
      a: "SSW සාත්තු සේවා වීසා ලබාගැනීම සඳහා විභාග දෙකක් සමත් විය යුතුය: 1) ජපන් භාෂා විභාගය (JLPT N4 හෝ JFT-Basic A2), සහ 2) Prometric මධ්‍යස්ථානයේ පවත්වන සාත්තු සත්කාරක කුසලතා සහ සාත්තු ජපන් භාෂා විභාගය. අත්සුකෝ කඩවත ප්‍රධාන මධ්‍යස්ථානයේ පිහිටි ප්‍රායෝගික රෝහල් විද්‍යාගාරයෙන් මේ සඳහා පූර්ණ පුහුණුව ලබාදේ."
    },
    {
      q: "අත්සුකෝ ප්‍රධාන මෙහෙයුම් මධ්‍යස්ථානය පිහිටා ඇත්තේ කොහේද?",
      a: "අපගේ ප්‍රධාන මෙහෙයුම් සහ ප්‍රායෝගික පුහුණු මධ්‍යස්ථානය අංක 191/3/1, සිරිමාවෝ බණ්ඩාරනායක මාවත, මහඅර, කඩවත ලිපිනයේ පිහිටා ඇත. අපගේ ලියාපදිංචි කාර්යාලය 712/B/1/1, තොරණ හන්දිය, කැලණිය ලිපිනයේ පිහිටා ඇත. මීට අමතරව මහනුවර, ගාල්ල, ගම්පහ, බදුල්ල, මාතර, රත්නපුර සහ ත්‍රිකුණාමලයේ ශාඛා මධ්‍යස්ථාන ක්‍රියාත්මක වේ."
    },
    {
      q: "නව කණ්ඩායම් පිළිබඳ තොරතුරු දැනගන්නේ කෙසේද?",
      a: "අපගේ ක්ෂණික ඇමතුම් අංක 072 616 0160 හෝ WhatsApp අංක +94 77 864 3352 ඔස්සේ අපව සම්බන්ධ කරගත හැක. එසේම අපගේ නිල Facebook පිටුව (facebook.com/AtsukoInternational) සහ YouTube (@ATSUKOINTERNATIONAL) ඔස්සේ නව පන්ති පිළිබඳ තොරතුරු දැනගත හැක."
    }
  ];

  const jpFaqs = [
    {
      q: "篤子インターナショナルはスリランカ政府公認の正規機関ですか？",
      a: "はい。篤子インターナショナル（Atsuko International Pvt Ltd）は、スリランカ海外雇用局（SLBFE）より正規認可ライセンス No. 3293 を取得した公認の送り出し・日本語教育機関です。政府公式データベース等で随時確認いただけます。"
    },
    {
      q: "日本現地に正規の支援法人はありますか？",
      a: "はい。宮城県仙台市に日本法人「株式会社 篤子インターナショナル」を構えております。出入国在留管理庁長官の登録を受けた「登録支援機関（登録支援機関番号保有）」として、スリランカから来日する特定技能外国人や留学生の生活立ち上げ、就労支援、法的保護を自社で一貫して行っております。"
    },
    {
      q: "留学生の日本でのアルバイト就労制限と見込み収入はどのくらいですか？",
      a: "日本の出入国在留管理法に基づき、「資格外活動許可」を取得した留学生は、学期中は週28時間以内、長期休業期間中は週40時間（1日8時間）までの就業が合法的に認められています。東京・大阪等の主要都市での時給相場は1,100円〜1,400円程度で、月額12万〜16万円程度の生活費・学費を自活することが可能です。"
    },
    {
      q: "特定技能1号「介護」分野の取得要件は何ですか？",
      a: "特定技能1号（介護）の申請には、①日本語試験（国際交流基金JFT-Basic A2またはJLPT N4以上）への合格、および②プロメトリック社が実施する「介護技能評価試験」と「介護日本語評価試験」の合格が必要です。篤子学校カダワタ校には実技シミュレーション設備があり、確実な合格をサポートしています。"
    },
    {
      q: "スリランカ国内の拠点および本部はどこにありますか？",
      a: "本社運営センター・実習施設はカダワタ（191/3/1, Sirimavo Bandaranaike Mawatha, Mahara, Kadawatha）に所在し、登記上事務所はケラニヤ（712/B/1/1, Thorana Junction, Kelaniya）にございます。また、キャンディ、ゴール、ガンパハ、バドゥッラ、マータラ、ラトナプラ、トリンコマリーに相談窓口を設置しています。"
    },
    {
      q: "問い合わせ窓口と次回開講スケジュールの確認方法は？",
      a: "総合ホットライン 072 616 0160 または WhatsApp +94 77 864 3352 まで直接ご連絡いただくか、公式Facebook（1.7万人超のフォロワー）および公式YouTubeにて最新の開講案内をご確認いただけます。"
    }
  ];

  const faqs = lang === 'si' ? siFaqs : lang === 'jp' ? jpFaqs : faqList;

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="section" style={{ background: '#ffffff' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-badge badge-red">
            <HelpCircle size={14} />
            {t.badge}
          </span>
          <h2 className="section-title">
            {t.title} <span className="text-gradient-red">{t.titleHighlight}</span>
          </h2>
          <p className="section-subtitle">
            {t.subtitle}
          </p>
        </div>

        <div className="faq-grid">
          {faqs.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="faq-item">
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggleFaq(idx)}
                >
                  <span>{item.q}</span>
                  {isOpen ? <ChevronUp size={20} style={{ color: '#dc2626', flexShrink: 0 }} /> : <ChevronDown size={20} style={{ color: '#94a3b8', flexShrink: 0 }} />}
                </button>
                {isOpen && (
                  <div className="faq-answer">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
