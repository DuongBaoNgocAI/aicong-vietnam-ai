import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Building2, Sparkles, ArrowRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <FileText className="w-12 h-12" />,
      title: "Dịch Vụ Công Nhanh Gọn",
      description: "Tìm kiếm và thực hiện các thủ tục hành chính công một cách đơn giản, minh bạch. Hướng dẫn từng bước chi tiết, tiết kiệm thời gian đi lại.",
      buttonText: "Khám Phá Ngay",
      variant: "hero" as const,
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: <Building2 className="w-12 h-12" />,
      title: "Công Cụ AI Cho Doanh Nghiệp",
      description: "Các giải pháp AI tùy chỉnh giúp tự động hóa quy trình, phân tích dữ liệu và tăng trưởng kinh doanh. Phù hợp với mọi quy mô doanh nghiệp.",
      buttonText: "Dành Cho Doanh Nghiệp",
      variant: "cta" as const,
      gradient: "from-green-500 to-teal-600"
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: "Tool AI Miễn Phí",
      description: "Trải nghiệm các tiện ích AI sáng tạo và hữu ích cho công việc và cuộc sống hàng ngày. Hoàn toàn miễn phí cho mọi người dùng.",
      buttonText: "Sử Dụng Miễn Phí",
      variant: "outline" as const,
      gradient: "from-orange-500 to-red-600"
    }
  ];

  const handleServiceClick = (serviceName: string) => {
    alert(`🚀 ${serviceName} đang được phát triển và sẽ sớm ra mắt!\n\nVui lòng theo dõi website để cập nhật thông tin mới nhất.`);
  };

  return (
    <section id="services" className="py-24 gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary">
            Khám Phá Dịch Vụ Của Chúng Tôi
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Chúng tôi cung cấp các giải pháp AI toàn diện, từ dịch vụ công cho người dân đến công cụ thông minh cho doanh nghiệp
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover-lift hover-glow ripple border-0 shadow-brand-lg bg-white/80 backdrop-blur-sm"
            >
              <CardHeader className="text-center pb-6">
                <div className={`mx-auto mb-4 w-24 h-24 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <CardTitle className="text-2xl font-bold mb-2">{service.title}</CardTitle>
                <CardDescription className="text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button 
                  variant={service.variant} 
                  size="lg" 
                  className="w-full group"
                  onClick={() => handleServiceClick(service.title)}
                >
                  {service.buttonText}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;