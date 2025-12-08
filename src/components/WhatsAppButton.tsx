import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/201201821140"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="relative">
        {/* Pulse Animation */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-30" />
        
        {/* Button */}
        <div className="relative flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-5 py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105">
          <MessageCircle className="w-6 h-6" />
          <span className="font-bold hidden sm:inline">تواصل معانا</span>
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
