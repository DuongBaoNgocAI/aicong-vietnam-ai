import { Bot, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-primary">
                <Bot className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gradient-primary">AI CÔNG</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Nền tảng tiên phong ứng dụng AI để đơn giản hóa dịch vụ công và hỗ trợ doanh nghiệp Việt Nam phát triển.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Việt Nam</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@aicong.vn</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">Dịch Vụ</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Thủ tục hành chính</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">AI Tư vấn</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Chatbot tùy chỉnh</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Phân tích dữ liệu</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">Hỗ Trợ</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Hướng dẫn sử dụng</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Câu hỏi thường gặp</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Liên hệ hỗ trợ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Báo cáo lỗi</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">Theo Dõi Chúng Tôi</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Facebook</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">LinkedIn</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">YouTube</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Zalo</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            &copy; 2025 AI CÔNG - AIcong.vn. Bản quyền thuộc về AI Việt Plus. 
            <span className="text-red-500 mx-1">❤️</span> 
            Designed for Vietnam.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;