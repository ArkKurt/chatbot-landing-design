
import { Button } from "@/components/ui/button";
import ChatbotDemo from "./ChatbotDemo";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-white to-blue-50/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              The AI Assistant That Actually <span className="gradient-text">Understands You</span>
            </h1>
            <p className="text-xl text-gray-600 md:pr-10">
              Experience conversations that feel natural with our advanced AI chatbot. 
              Powered by cutting-edge language models to deliver helpful, accurate responses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-chatbot-blue hover:bg-chatbot-blue/90">
                Get Started Free
              </Button>
              <Button size="lg" variant="outline" className="border-chatbot-blue text-chatbot-blue hover:bg-chatbot-blue/10">
                See Pricing
              </Button>
            </div>
            <div className="pt-4 flex items-center text-sm text-gray-500">
              <span className="flex items-center">
                <svg className="h-4 w-4 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                No credit card required
              </span>
              <span className="mx-3">•</span>
              <span className="flex items-center">
                <svg className="h-4 w-4 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Cancel anytime
              </span>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10">
              <ChatbotDemo />
            </div>
            <div className="absolute -top-6 -left-6 right-6 bottom-6 bg-gradient-to-r from-chatbot-purple/20 to-chatbot-teal/20 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
