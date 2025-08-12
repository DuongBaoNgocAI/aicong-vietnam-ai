import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useAnimateOnScroll } from "@/hooks/useIntersectionObserver";

const HeroSection = () => {
  const titleRef = useAnimateOnScroll<HTMLDivElement>();
  const subtitleRef = useAnimateOnScroll<HTMLParagraphElement>();
  const buttonsRef = useAnimateOnScroll<HTMLDivElement>();
  const statsRef = useAnimateOnScroll<HTMLDivElement>();
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <div ref={titleRef} className="space-y-4 animate-on-scroll animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Nền tảng AI tiên phong tại Việt Nam
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              AI CÔNG: <br />
              <span className="text-gradient-secondary">Chuyển Đổi Số</span><br />
              Dịch Vụ Công & Doanh Nghiệp
            </h1>
          </div>
          
          <p ref={subtitleRef} className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed animate-on-scroll animate-fade-up animate-delay-200">
            Nền tảng tiên phong ứng dụng AI để đơn giản hóa thủ tục hành chính và cung cấp các công cụ thông minh, 
            giúp người dân và doanh nghiệp Việt Nam tiết kiệm thời gian, tối ưu hiệu quả.
          </p>
          
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll animate-scale animate-delay-400">
            <Button variant="glass" size="xl" className="group">
              Khám Phá Dịch Vụ
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary">
              Xem Demo
            </Button>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 animate-on-scroll animate-slide-right animate-delay-500">
            <div className="text-center">
              <div className="text-4xl font-bold">1000+</div>
              <div className="text-white/80">Khách hàng tin tưởng</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">50+</div>
              <div className="text-white/80">Dịch vụ AI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">24/7</div>
              <div className="text-white/80">Hỗ trợ không ngừng</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;