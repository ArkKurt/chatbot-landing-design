
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Отправка формы:", formData);
    // Здесь будет логика отправки формы
    alert("Спасибо! Ваше сообщение отправлено. Мы свяжемся с Вами в ближайшее время.");
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-6 text-gray-800">Связаться с нами</h2>
            <p className="text-lg text-gray-600 mb-8">
              Оставьте заявку для консультации с нашими специалистами или посетите наш офис в Санкт-Петербурге.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone size={20} className="text-accent mr-4 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-800">Телефон</h3>
                  <p className="text-gray-600">+7 (812) 123-45-67</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail size={20} className="text-accent mr-4 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-800">Email</h3>
                  <p className="text-gray-600">info@domstroy-spb.ru</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin size={20} className="text-accent mr-4 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-800">Адрес</h3>
                  <p className="text-gray-600">г. Санкт-Петербург, ул. Большая Морская, 12, офис 150</p>
                  <p className="text-gray-600">Пн-Пт: 9:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Иван Петров"
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input 
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+7 (___) ___-__-__"
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@mail.ru"
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Опишите ваш запрос"
                    className="mt-1"
                    rows={4}
                  />
                </div>
                
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                  Отправить заявку
                </Button>
                
                <p className="text-xs text-gray-500 text-center">
                  Нажимая кнопку «Отправить заявку», вы соглашаетесь с нашей политикой конфиденциальности
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
