
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="pt-32 pb-20 bg-cover bg-center" 
      style={{ 
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2000')",
        backgroundSize: 'cover'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6">
            Премиальное строительство домов в Санкт-Петербурге
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 opacity-90">
            Создаем уникальные дома, которые отражают Вашу индивидуальность. 
            Безупречное качество и внимание к деталям.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              Рассчитать стоимость
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Наши проекты <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
