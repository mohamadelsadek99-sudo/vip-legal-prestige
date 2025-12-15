import { Scale, CheckCircle } from "lucide-react";

const reasons = [
  "نقدم برامج تدريبية شاملة تجمع بين الجوانب النظرية والتطبيقية، مع التركيز على تطوير المهارات العملية اللازمة للنجاح في سوق العمل القانوني",
  "محاكاة واقعية تدريب عملي بنسبة 100% لما يحدث داخل هيئة الاستثمار والمحاكم ومكتب العمل والجهات الحكومية",
  "لكل تخصصات محامي الشركات من العقود والعمل والشركات والتحقيقات الداخلية والحكومية حتى إدارة المخاطر والمسؤولية القانونية",
  "شهادة معتمدة تضيف لقيمتك المهنية VIP-Legal Academy اسم له وزن في عالم التدريب القانوني داخل وخارج مصر (شهادة خبرة - ختم النسر - شهادة محتوى - شهادة البورد الأمريكي - الجامعة البريطانية)",
  "بيئة احترافية تشبه الواقع العملي بحيث تتم الجلسات داخل الأكاديمية في أجواء مكاتب قانونية حقيقية تساعدك لبناء شخصية المحامي المحترف",
  "البرنامج يكثف سنوات من الخبرة العملية في 8 أسابيع ويزيدك بسنوات وقضايا عالمية لبناء مستقبل مهني قوي",
  "البرنامج انطلاقة نحو الحصول على لقب مستشار شركات وذلك طبقاً لنص المادة 60 المحاماة رقم 17 لسنة 1983 وتعديلاته",
  "التدريب يكون على أيادي متخصصين من (مستشارين شركات - دكاترة متخصصين - مدربين دوليين)",
  "برنامج تدريبي مناسب لجميع المحامين وطلاب القانون وطلاب الشريعة والقانون",
  "اكتساب جميع المهارات التي تميز محامي الشركات عن المحامي الحر",
  "الأكاديمية تقدم دعم حقيقي أثناء وبعد التدريب وتوفر استشارات وترشيحات وظائف بصفة مجانية وتوجيه مهني",
  "شبكة علاقات مهنية واسعة تربطك بمحامين وخبراء قانونيين من مختلف التخصصات لتبادل الخبرات والفرص",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-navy-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gold font-playfair mb-4">
            نبذة عن الأكاديمية
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-24 h-px bg-gradient-to-r from-transparent to-gold" />
            <Scale className="text-gold w-6 h-6" />
            <div className="w-24 h-px bg-gradient-to-l from-transparent to-gold" />
          </div>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-gold mb-4 font-playfair">
              VIP Academy ⚜️
            </h3>
            <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-6 font-bold">
              أكاديمية كبار الشخصيات القانونية ⚖️
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              أكاديمية تدريب قانوني من الطراز الفريد من نوعها على مستوى الشرق الأوسط
            </p>
          </div>

          {/* Reasons Title */}
          <div className="bg-gold/10 border border-gold/30 rounded-xl p-4 mb-8">
            <h4 className="text-xl md:text-2xl font-bold text-gold text-center font-amiri">
              أكثر من 10 أسباب تخليك تشترك في VIP-Legal Academy
            </h4>
          </div>

          {/* Reasons Grid - 2 per row */}
          <div className="grid md:grid-cols-2 gap-4">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-xl bg-navy/50 border border-gold/20 hover:border-gold/40 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <span className="text-foreground text-base md:text-lg leading-relaxed">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;