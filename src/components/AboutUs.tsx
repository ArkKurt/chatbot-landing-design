
import { CheckCircle } from "lucide-react";

const AboutUs = () => {
  const benefits = [
    "20+ лет опыта в строительстве",
    "Более 150 реализованных проектов",
    "Собственное производство",
    "Гарантия качества 10 лет",
    "Работа под ключ",
    "Индивидуальный подход"
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1800" 
              alt="Современный дом" 
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-serif font-bold mb-6 text-gray-800">О нашей компании</h2>
            <p className="text-lg text-gray-600 mb-6">
              <span className="font-semibold">ДОМСТРОЙ</span> — это премиальная строительная компания с безупречной репутацией. 
              Мы специализируемся на проектировании и строительстве эксклюзивных домов в Санкт-Петербурге и Ленинградской области.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Наша миссия — создавать пространства, в которых эстетика и функциональность 
              объединяются, чтобы сформировать идеальную среду для жизни.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle size={20} className="text-accent mr-2 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
