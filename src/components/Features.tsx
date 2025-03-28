
import { 
  Brain, 
  MessageSquare, 
  Clock, 
  Shield, 
  Globe, 
  Zap
} from 'lucide-react';

type FeatureProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const FeatureCard = ({ icon, title, description }: FeatureProps) => (
  <div className="feature-card">
    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-chatbot-blue/10 to-chatbot-purple/10 text-chatbot-blue mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: <Brain size={24} />,
      title: "Advanced AI",
      description: "Powered by cutting-edge language models for human-like understanding and responses.",
    },
    {
      icon: <MessageSquare size={24} />,
      title: "Natural Conversations",
      description: "Engage in fluid, contextual conversations that feel like chatting with a human assistant.",
    },
    {
      icon: <Clock size={24} />,
      title: "24/7 Availability",
      description: "Get instant responses at any time of day, with no delays or waiting periods.",
    },
    {
      icon: <Shield size={24} />,
      title: "Secure & Private",
      description: "Your conversations stay private with enterprise-grade encryption and security protocols.",
    },
    {
      icon: <Globe size={24} />,
      title: "Multilingual Support",
      description: "Communicate in over 50 languages with accurate translations and natural responses.",
    },
    {
      icon: <Zap size={24} />,
      title: "Continuous Learning",
      description: "Our AI improves with each interaction, getting smarter and more helpful over time.",
    },
  ];

  return (
    <section id="features" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features for <span className="gradient-text">Powerful Results</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI chatbot combines cutting-edge technology with user-friendly design
            to deliver exceptional conversational experiences.
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
