
import { MessageCircle, Brain, Database, Zap } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <MessageCircle size={28} className="text-chatbot-blue" />,
      title: "Ask a Question",
      description: "Type your question or request in natural language - just like you're talking to a human assistant."
    },
    {
      icon: <Brain size={28} className="text-chatbot-purple" />,
      title: "AI Processes Your Query",
      description: "Our advanced language model analyzes your input, understanding context, intent, and nuance."
    },
    {
      icon: <Database size={28} className="text-chatbot-teal" />,
      title: "Knowledge Retrieval",
      description: "The AI searches its vast knowledge base to find relevant information to address your query."
    },
    {
      icon: <Zap size={28} className="text-amber-500" />,
      title: "Instant Response",
      description: "Receive a thoughtful, accurate response within seconds, tailored specifically to your question."
    }
  ];

  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How <span className="gradient-text">AIChat</span> Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI chatbot uses advanced natural language processing to understand and respond to your queries instantly.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-10 bottom-10 w-1 bg-gradient-to-b from-chatbot-blue via-chatbot-purple to-chatbot-teal transform -translate-x-1/2 hidden lg:block"></div>
          
          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col lg:flex-row items-center">
                <div className={`w-full lg:w-1/2 mb-6 lg:mb-0 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="bg-white rounded-xl shadow-lg p-6 relative">
                    {/* Step number */}
                    <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-r from-chatbot-blue to-chatbot-purple flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    
                    <div className="pt-2">
                      <div className="flex items-center mb-3">
                        <div className="mr-3">{step.icon}</div>
                        <h3 className="text-xl font-bold">{step.title}</h3>
                      </div>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </div>
                
                {/* Spacer for alternate layout */}
                <div className="hidden lg:block lg:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
