import { useState } from "react";
import { Scale, ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "ما هي مدة الدورات التدريبية؟",
    answer: "تتراوح مدة الدورات بين 4 أسابيع إلى 12 أسبوعاً حسب نوع الدورة ومحتواها. يتم تحديد المدة بناءً على عمق المادة العلمية وعدد الساعات التدريبية المطلوبة."
  },
  {
    question: "هل الشهادات معتمدة؟",
    answer: "نعم، جميع شهاداتنا معتمدة ومعترف بها محلياً، وتصدر من أكاديمية VIP Legal Academy مع توثيق كامل للساعات التدريبية والمحتوى."
  },
  {
    question: "كيف يمكنني التسجيل في الدورات؟",
    answer: "يمكنك التسجيل من خلال التواصل معنا عبر الواتساب أو الاتصال المباشر. سيقوم فريقنا بإرشادك لاختيار الدورة المناسبة وإتمام إجراءات التسجيل."
  },
  {
    question: "ما هي طرق الدفع المتاحة؟",
    answer: "نوفر عدة طرق للدفع تشمل: فيزا/ماستركارد، فودافون كاش والمحافظ الإلكترونية، التحويل البنكي المباشر. يمكنك اختيار الطريقة الأنسب لك."
  },
  {
    question: "هل يمكن حضور الدورات عن بُعد؟",
    answer: "نعم، نوفر خيار الحضور عن بُعد لمعظم دوراتنا. يمكنك الانضمام للمحاضرات المباشرة أونلاين والتفاعل مع المحاضرين والزملاء."
  },
  {
    question: "هل يوجد دعم للمتدربين بعد انتهاء الدورة؟",
    answer: "نعم، نقدم دعماً مستمراً لجميع خريجينا يشمل استشارات قانونية مجانية، وفرص للتواصل المهني، وتحديثات على التطورات القانونية."
  },
  {
    question: "ما هي المتطلبات للالتحاق بالدورات؟",
    answer: "تختلف المتطلبات حسب نوع الدورة. بعض الدورات تتطلب شهادة في القانون، بينما دورات أخرى متاحة لجميع المهتمين بالمجال القانوني."
  },
  {
    question: "هل يوجد خصومات للمجموعات؟",
    answer: "نعم، نقدم خصومات خاصة للمجموعات والمؤسسات. تواصل معنا لمعرفة العروض المتاحة."
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-navy-dark relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gold font-playfair mb-4">
            أسئلتكم وإجاباتنا
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-24 h-px bg-gradient-to-r from-transparent to-gold" />
            <Scale className="text-gold w-6 h-6" />
            <div className="w-24 h-px bg-gradient-to-l from-transparent to-gold" />
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            إجابات على أكثر الأسئلة التي يطرحها عملاؤنا
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-navy/50 border border-gold/20 rounded-xl overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-right hover:bg-gold/5 transition-colors"
              >
                <span className="text-gold font-bold text-lg pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gold transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="p-5 pt-0 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
