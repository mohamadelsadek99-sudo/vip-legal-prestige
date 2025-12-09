import { Scale, Trophy, TrendingUp, Award, CheckCircle } from "lucide-react";

const achievements = [
  { icon: Trophy, title: "أفضل أكاديمية قانونية", description: "حصلنا على لقب أفضل أكاديمية للتدريب القانوني لعام 2024" },
  { icon: TrendingUp, title: "نسبة نجاح 95%", description: "من متدربينا حققوا أهدافهم المهنية بعد إتمام التدريب" },
  { icon: Award, title: "اعتماد دولي", description: "برامجنا معتمدة من جهات دولية مرموقة في مجال التدريب القانوني" },
  { icon: CheckCircle, title: "+500 متدرب ناجح", description: "أكثر من 500 محامي ومستشار قانوني تخرجوا من أكاديميتنا" },
];

const milestones = [
  "تدريب أكثر من 500 محامي ومستشار قانوني",
  "إقامة أكثر من 50 ورشة عمل متخصصة",
  "شراكات مع 10+ مؤسسات قانونية كبرى",
  "إصدار شهادات معتمدة لجميع المتدربين",
  "تقديم استشارات قانونية لمئات العملاء",
  "توظيف متدربينا في أكبر مكاتب المحاماة",
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-20 bg-navy relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gold font-playfair mb-4">
            إنجازاتنا ونجاحاتنا
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-24 h-px bg-gradient-to-r from-transparent to-gold" />
            <Scale className="text-gold w-6 h-6" />
            <div className="w-24 h-px bg-gradient-to-l from-transparent to-gold" />
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            نفتخر بما حققناه من إنجازات على مدار سنوات العمل
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className="group p-6 bg-navy-dark/80 border border-gold/20 rounded-2xl hover:border-gold/50 transition-all duration-500 hover:scale-105 hover:shadow-gold text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-bold text-gold mb-3 font-playfair">
                  {achievement.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Milestones */}
        <div className="bg-navy-dark/50 border border-gold/20 rounded-2xl p-8 md:p-12 mx-4 md:mx-8">
          <h3 className="text-3xl md:text-4xl font-bold text-gold text-center mb-8 font-playfair">
            مراحل التفوّق
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-xl bg-navy/50 border border-gold/10 animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-foreground">{milestone}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
