import { Card, CardContent } from "@/components/ui/card";
import { Flag, DollarSign, Zap, Shield } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Flag className="w-8 h-8" />,
      title: "100% Tiếng Việt",
      description: "Giao diện và nội dung hoàn toàn bằng tiếng Việt, thân thiện với người dùng Việt Nam",
      color: "text-red-500"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Giá Cả Phải Chăng",
      description: "Cam kết mang đến giải pháp AI với chi phí hợp lý nhất cho mọi đối tượng khách hàng",
      color: "text-green-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Nhanh Chóng & Hiệu Quả",
      description: "Tối ưu hóa quy trình, giảm thiểu thời gian xử lý và tăng hiệu quả công việc",
      color: "text-yellow-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Bảo Mật Tuyệt Đối",
      description: "Đảm bảo an toàn thông tin cá nhân và dữ liệu doanh nghiệp với công nghệ bảo mật tiên tiến",
      color: "text-blue-500"
    }
  ];

  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary">
            Tại Sao Chọn AI CÔNG?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Chúng tôi cam kết mang đến trải nghiệm tuyệt vời nhất với các ưu điểm vượt trội
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group hover-lift bg-white border-0 shadow-brand hover:shadow-brand-lg animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gray-50 ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;