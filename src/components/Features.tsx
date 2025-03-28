
import { 
  Compass, 
  PenTool, 
  Home, 
  Truck, 
  Settings, 
  Shield
} from 'lucide-react';

type FeatureProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const FeatureCard = ({ icon, title, description }: FeatureProps) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-accent/10 text-accent mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-serif font-semibold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: <Compass size={24} />,
      title: "Проектирование",
      description: "Индивидуальное проектирование домов с учетом всех пожеланий и особенностей участка.",
    },
    {
      icon: <PenTool size={24} />,
      title: "Дизайн интерьера",
      description: "Профессиональный дизайн интерьера, который идеально сочетается с архитектурой дома.",
    },
    {
      icon: <Home size={24} />,
      title: "Строительство",
      description: "Строительство коттеджей с использованием современных технологий и материалов высшего качества.",
    },
    {
      icon: <Truck size={24} />,
      title: "Отделка",
      description: "Премиальная внутренняя и внешняя отделка с использованием экологичных материалов.",
    },
    {
      icon: <Settings size={24} />,
      title: "Инженерные системы",
      description: "Внедрение современных инженерных систем и технологий умного дома.",
    },
    {
      icon: <Shield size={24} />,
      title: "Гарантийное обслуживание",
      description: "Гарантийное и постгарантийное обслуживание всех наших объектов.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold mb-4 text-gray-800">Наши услуги</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы предлагаем полный спектр услуг в сфере строительства премиального жилья —
            от разработки проекта до реализации под ключ.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
