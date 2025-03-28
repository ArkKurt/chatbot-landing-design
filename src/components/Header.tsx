
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-serif font-bold text-gray-800">ДОМСТРОЙ</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-gray-600 hover:text-accent transition-colors font-medium">
            О нас
          </a>
          <a href="#features" className="text-gray-600 hover:text-accent transition-colors font-medium">
            Услуги
          </a>
          <a href="#projects" className="text-gray-600 hover:text-accent transition-colors font-medium">
            Проекты
          </a>
          <a href="#testimonials" className="text-gray-600 hover:text-accent transition-colors font-medium">
            Отзывы
          </a>
          <a href="#contact" className="text-gray-600 hover:text-accent transition-colors font-medium">
            Контакты
          </a>
          <Button className="bg-accent hover:bg-accent/90 flex items-center gap-2">
            <Phone size={16} /> Связаться
          </Button>
        </nav>

        {/* Mobile Navigation Button */}
        <button className="md:hidden text-gray-600" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#about" 
              className="text-gray-600 hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              О нас
            </a>
            <a 
              href="#features" 
              className="text-gray-600 hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Услуги
            </a>
            <a 
              href="#projects" 
              className="text-gray-600 hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Проекты
            </a>
            <a 
              href="#testimonials" 
              className="text-gray-600 hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Отзывы
            </a>
            <a 
              href="#contact" 
              className="text-gray-600 hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Контакты
            </a>
            <Button className="bg-accent hover:bg-accent/90 w-full flex items-center justify-center gap-2">
              <Phone size={16} /> Связаться
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
