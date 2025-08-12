import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Bot } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-primary">
            <Bot className="h-6 w-6 text-white" />
          </div>
          <span className="text-2xl font-bold text-gradient-primary">AI CÔNG</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection('hero')}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Trang Chủ
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Dịch Vụ
          </button>
          <button 
            onClick={() => scrollToSection('features')}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Tính Năng
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Liên Hệ
          </button>
          <Button variant="hero" size="sm">
            Dùng Thử Ngay
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b md:hidden">
          <nav className="container mx-auto flex flex-col gap-4 p-4">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Trang Chủ
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Dịch Vụ
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Tính Năng
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Liên Hệ
            </button>
            <Button variant="hero" size="sm" className="w-full">
              Dùng Thử Ngay
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;