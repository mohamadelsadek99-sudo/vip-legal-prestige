import { useState } from "react";
import { Building2, Users, Scale, FileText, Shield, Briefcase, CheckCircle, X, Send } from "lucide-react";

const CompanyServicesSection = () => {
  const [showLawyerForm, setShowLawyerForm] = useState(false);
  const [lawyerForm, setLawyerForm] = useState({
    companyName: "",
    contactName: "",
    phone: "",
    email: "",
    lawyerLevel: "",
    tasks: "",
    additionalNotes: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `طلب محامي متدرب للشركة

🏢 اسم الشركة: ${lawyerForm.companyName}
👤 اسم المسؤول: ${lawyerForm.contactName}
📞 رقم الهاتف: ${lawyerForm.phone}
📧 البريد الإلكتروني: ${lawyerForm.email}
📊 درجة القيد المطلوبة: ${lawyerForm.lawyerLevel}
📋 المهام المطلوبة: ${lawyerForm.tasks}
📝 ملاحظات إضافية: ${lawyerForm.additionalNotes}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/201201821140?text=${encodedMessage}`, "_blank");
    setShowLawyerForm(false);
  };

  const services = [
    {
      icon: Building2,
      title: "تأسيس الشركات",
      description: "الشركات الفردية، المساهمة، ذات المسؤولية المحدودة، إلخ"
    },
    {
      icon: Scale,
      title: "الاستشارات القانونية التجارية",
      description: "تحليل المخاطر وتقديم النصيحة الاستراتيجية"
    },
    {
      icon: FileText,
      title: "صياغة ومراجعة العقود",
      description: "اتفاقيات الشراكة، عقود التوزيع، وعقود العمل"
    },
    {
      icon: Shield,
      title: "تسجيل وحماية الملكية الفكرية",
      description: "العلامات التجارية وبراءات الاختراع"
    },
    {
      icon: Briefcase,
      title: "التقاضي التجاري",
      description: "تمثيلكم في النزاعات أمام المحاكم والجهات التحكيمية"
    },
    {
      icon: Users,
      title: "طلب محامي شركات متدرب",
      description: "وفر لشركتك محامي متخصص في الشؤون القانونية للشركات"
    }
  ];

  const lawyerLevels = [
    "جدول عام",
    "ابتدائي",
    "استئناف",
    "نقض"
  ];

  return (
    <section id="company-services" className="py-20 bg-navy relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gold rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gold font-playfair mb-6">
            خدمات الشركات
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8" />
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            تأسيس احترافي.. مستقبل تجاري مضمون
          </h3>
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            نحن متخصصون في تحويل رؤيتك التجارية إلى كيان قانوني راسخ. يوفر فريقنا الاستشارات المتعمقة والحلول العملية التي تغطي كافة مراحل تأسيس الشركات، بدءاً من اختيار الشكل القانوني الأمثل، إعداد الأنظمة الأساسية، وتسجيل الشركة لدى الجهات الرسمية.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            كما نقدم حماية قوية لمصالحك من خلال التمثيل القانوني في القضايا التجارية، وصياغة الاتفاقيات التجارية، وعمليات الاندماج والاستحواذ. دع خبرتنا تكون أساس نجاحك التجاري.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isLawyerRequest = index === 5;
            return (
              <div
                key={index}
                onClick={isLawyerRequest ? () => setShowLawyerForm(true) : undefined}
                className={`group bg-navy-dark/50 backdrop-blur-sm border border-gold/20 rounded-2xl p-6 hover:border-gold/40 transition-all duration-300 hover:transform hover:scale-105 ${isLawyerRequest ? 'cursor-pointer ring-2 ring-gold/30' : ''}`}
              >
                <div className="w-16 h-16 rounded-xl bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                  <Icon className="w-8 h-8 text-gold" />
                </div>
                <h4 className="text-xl font-bold text-gold mb-2 font-playfair">{service.title}</h4>
                <p className="text-muted-foreground">{service.description}</p>
                {isLawyerRequest && (
                  <button className="mt-4 w-full py-2 bg-gold text-navy-dark font-bold rounded-lg hover:bg-gold-light transition-all">
                    اطلب الآن
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="bg-navy-dark/50 backdrop-blur-sm border border-gold/20 rounded-2xl p-8 max-w-4xl mx-auto">
          <h4 className="text-2xl font-bold text-gold text-center mb-6 font-playfair">
            نحن نعمل لضمان امتثالك القانوني الكامل
          </h4>
          <p className="text-center text-muted-foreground mb-6">
            نحن ندرك تعقيدات البيئة التجارية، ولهذا نقدم حزمة شاملة تضمن تحقيق أهدافك التجارية بأمان وثقة
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/201201821140"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              واتساب
            </a>
          </div>
        </div>
      </div>

      {/* Lawyer Request Modal */}
      {showLawyerForm && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setShowLawyerForm(false)}
        >
          <div 
            className="bg-navy-dark border border-gold/30 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-navy-dark border-b border-gold/20 p-6 flex items-center justify-between">
              <h3 className="text-2xl font-bold text-gold font-playfair">
                طلب محامي شركات متدرب
              </h3>
              <button
                onClick={() => setShowLawyerForm(false)}
                className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold hover:bg-gold hover:text-navy-dark transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gold mb-2 font-medium">اسم الشركة *</label>
                  <input
                    type="text"
                    required
                    value={lawyerForm.companyName}
                    onChange={(e) => setLawyerForm({...lawyerForm, companyName: e.target.value})}
                    className="w-full px-4 py-3 bg-navy border border-gold/30 rounded-xl text-foreground focus:border-gold focus:outline-none"
                    placeholder="أدخل اسم الشركة"
                  />
                </div>
                <div>
                  <label className="block text-gold mb-2 font-medium">اسم المسؤول *</label>
                  <input
                    type="text"
                    required
                    value={lawyerForm.contactName}
                    onChange={(e) => setLawyerForm({...lawyerForm, contactName: e.target.value})}
                    className="w-full px-4 py-3 bg-navy border border-gold/30 rounded-xl text-foreground focus:border-gold focus:outline-none"
                    placeholder="أدخل اسم المسؤول"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gold mb-2 font-medium">رقم الهاتف *</label>
                  <input
                    type="tel"
                    required
                    value={lawyerForm.phone}
                    onChange={(e) => setLawyerForm({...lawyerForm, phone: e.target.value})}
                    className="w-full px-4 py-3 bg-navy border border-gold/30 rounded-xl text-foreground focus:border-gold focus:outline-none"
                    placeholder="أدخل رقم الهاتف"
                    dir="ltr"
                  />
                </div>
                <div>
                  <label className="block text-gold mb-2 font-medium">البريد الإلكتروني</label>
                  <input
                    type="email"
                    value={lawyerForm.email}
                    onChange={(e) => setLawyerForm({...lawyerForm, email: e.target.value})}
                    className="w-full px-4 py-3 bg-navy border border-gold/30 rounded-xl text-foreground focus:border-gold focus:outline-none"
                    placeholder="أدخل البريد الإلكتروني"
                    dir="ltr"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gold mb-2 font-medium">درجة القيد المطلوبة *</label>
                <select
                  required
                  value={lawyerForm.lawyerLevel}
                  onChange={(e) => setLawyerForm({...lawyerForm, lawyerLevel: e.target.value})}
                  className="w-full px-4 py-3 bg-navy border border-gold/30 rounded-xl text-foreground focus:border-gold focus:outline-none"
                >
                  <option value="">اختر درجة القيد</option>
                  {lawyerLevels.map((level) => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-gold mb-2 font-medium">المهام المطلوبة *</label>
                <textarea
                  required
                  value={lawyerForm.tasks}
                  onChange={(e) => setLawyerForm({...lawyerForm, tasks: e.target.value})}
                  rows={3}
                  className="w-full px-4 py-3 bg-navy border border-gold/30 rounded-xl text-foreground focus:border-gold focus:outline-none resize-none"
                  placeholder="صف المهام المطلوبة من المحامي (مثال: شؤون قانونية، صياغة عقود، متابعة قضايا...)"
                />
              </div>

              <div>
                <label className="block text-gold mb-2 font-medium">ملاحظات إضافية</label>
                <textarea
                  value={lawyerForm.additionalNotes}
                  onChange={(e) => setLawyerForm({...lawyerForm, additionalNotes: e.target.value})}
                  rows={2}
                  className="w-full px-4 py-3 bg-navy border border-gold/30 rounded-xl text-foreground focus:border-gold focus:outline-none resize-none"
                  placeholder="أي ملاحظات أو متطلبات إضافية..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gold text-navy-dark font-bold rounded-xl hover:bg-gold-light transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                إرسال الطلب عبر واتساب
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default CompanyServicesSection;
