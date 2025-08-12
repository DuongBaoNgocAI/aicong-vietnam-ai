import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Bot, Phone, X, MessageCircle } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const FloatingActions = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const chatSuggestions = [
    "📄 Tôi cần làm giấy khai sinh?",
    "🏢 Thủ tục đăng ký kinh doanh?",
    "📈 AI giúp gì cho marketing?",
    "💰 Bảng giá dịch vụ AI?",
    "📞 Cách liên hệ hỗ trợ?"
  ];

  const handleSuggestionClick = (question: string) => {
    alert(`Câu hỏi: ${question}\n\nTính năng chatbot AI đang được phát triển và sẽ sớm ra mắt!`);
  };

  const handleHotlineClick = () => {
    alert('📞 Hotline: 1900-XXX-XXX\n\nChúng tôi sẵn sàng hỗ trợ bạn 24/7!');
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <Button
          size="icon"
          variant="cta"
          className="w-14 h-14 rounded-full shadow-brand-xl hover:scale-110"
          onClick={() => setIsChatbotOpen(true)}
        >
          <Bot className="w-6 h-6" />
        </Button>
        
        <Button
          size="icon"
          variant="hero"
          className="w-14 h-14 rounded-full shadow-brand-xl hover:scale-110"
          onClick={handleHotlineClick}
        >
          <Phone className="w-6 h-6" />
        </Button>
      </div>

      <Dialog open={isChatbotOpen} onOpenChange={setIsChatbotOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Bot className="w-6 h-6 text-secondary" />
              AI Assistant
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Xin chào! Tôi có thể giúp gì cho bạn?
            </p>
            
            <div className="space-y-2">
              {chatSuggestions.map((suggestion, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="w-full justify-start text-left h-auto p-4 hover:bg-accent"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </Button>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FloatingActions;