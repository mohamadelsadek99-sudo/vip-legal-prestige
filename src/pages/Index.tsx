import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import CoursesSection from "@/components/CoursesSection";
import ServicesSection from "@/components/ServicesSection";
import AchievementsSection from "@/components/AchievementsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-tajawal" dir="rtl">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <CoursesSection />
      <ServicesSection />
      <AchievementsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
